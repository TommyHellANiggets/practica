class HuffmanNode {
    constructor(char, frequency) {
        this.char = char;
        this.frequency = frequency;
        this.left = null;
        this.right = null;
    }
}

function buildFrequencyMap(text) {
    const frequencyMap = new Map();
    for (const char of text) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }
    return frequencyMap;
}

function buildHuffmanTree(frequencyMap) {
    const priorityQueue = Array.from(frequencyMap.entries())
        .map(([char, freq]) => new HuffmanNode(char, freq))
        .sort((a, b) => a.frequency - b.frequency);

    while (priorityQueue.length > 1) {
        const left = priorityQueue.shift();
        const right = priorityQueue.shift();
        
        const parent = new HuffmanNode(null, left.frequency + right.frequency);
        parent.left = left;
        parent.right = right;
        
        let i = 0;
        while (i < priorityQueue.length && priorityQueue[i].frequency < parent.frequency) {
            i++;
        }
        priorityQueue.splice(i, 0, parent);
    }

    return priorityQueue[0];
}

function buildCodeTable(root) {
    const codeTable = new Map();

    function traverse(node, code = '') {
        if (node.char !== null) {
            codeTable.set(node.char, code);
            return;
        }
        traverse(node.left, code + '0');
        traverse(node.right, code + '1');
    }

    traverse(root);
    return codeTable;
}

function huffmanEncode(text) {
    if (!text || typeof text !== 'string') {
        throw new Error('Входной текст должен быть непустой строкой');
    }

    const frequencyMap = buildFrequencyMap(text);
    const root = buildHuffmanTree(frequencyMap);
    const codeTable = buildCodeTable(root);
    
    let encodedText = '';
    for (const char of text) {
        encodedText += codeTable.get(char);
    }

    return {
        uniqueChars: codeTable.size,
        encodedLength: encodedText.length,
        codes: Object.fromEntries(codeTable),
        encodedText
    };
}

function printEncodingResults(text) {
    const result = huffmanEncode(text);
    
    console.log(`${result.uniqueChars} ${result.encodedLength}`);
    
    Object.entries(result.codes)
        .sort(([a], [b]) => a.localeCompare(b))
        .forEach(([char, code]) => {
            console.log(`'${char}': ${code}`);
        });
    
    console.log(result.encodedText);
}

function runExample() {
    const text = 'Errare humanum est.';
    printEncodingResults(text);
}

if (require.main === module) {
    runExample();
}

module.exports = {
    huffmanEncode,
    printEncodingResults
};