class HuffmanNode {
    constructor() {
        this.char = null;
        this.left = null;
        this.right = null;
    }
}

function buildTreeFromCodes(codes) {
    const root = new HuffmanNode();
    
    for (const [char, code] of Object.entries(codes)) {
        let current = root;
        
        for (let i = 0; i < code.length; i++) {
            if (code[i] === '0') {
                if (!current.left) {
                    current.left = new HuffmanNode();
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = new HuffmanNode();
                }
                current = current.right;
            }
        }
        
        current.char = char;
    }
    
    return root;
}

function huffmanDecode(codes, encodedText) {
    if (!codes || !encodedText) {
        throw new Error('Необходимо предоставить таблицу кодов и закодированный текст');
    }

    const root = buildTreeFromCodes(codes);
    
    let decodedText = '';
    let current = root;
    
    for (const bit of encodedText) {
        if (bit === '0') {
            current = current.left;
        } else {
            current = current.right;
        }
        
        if (current.char !== null) {
            decodedText += current.char;
            current = root;
        }
    }
    
    return decodedText;
}

function parseInput(input) {
    const lines = input.trim().split('\n');
    const [uniqueChars, encodedLength] = lines[0].split(' ').map(Number);
    
    const codes = {};
    for (let i = 1; i <= uniqueChars; i++) {
        const [charWithQuotes, code] = lines[i].split(': ');
        const char = charWithQuotes.slice(1, -1);
        codes[char] = code;
    }
    
    const encodedText = lines[uniqueChars + 1];
    
    return { codes, encodedText };
}

function runExample() {
    const input = `12 60
' ': 1011
'.': 1110
'D': 1000
'c': 000
'd': 001
'e': 1001
'i': 010
'm': 1100
'n': 1010
'o': 1111
's': 011
'u': 1101
100011110001001101000111111011001010011000010110011010111110`;

    const { codes, encodedText } = parseInput(input);
    const decodedText = huffmanDecode(codes, encodedText);
    console.log(decodedText);
}

if (require.main === module) {
    runExample();
}

module.exports = {
    huffmanDecode,
    parseInput
};