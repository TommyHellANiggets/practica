const { huffmanEncode } = require('../huffman/huffman_encoding');
const { huffmanDecode, parseInput } = require('../huffman/huffman_decoding');

const testCases = [
    {
        input: 'Errare humanum est.',
        description: 'Тест из задания (латинская фраза)'
    },
    {
        input: 'hello world',
        description: 'Простой тест с пробелом'
    },
    {
        input: 'aaaaabbbcc',
        description: 'Тест с повторяющимися символами'
    },
    {
        input: '!@#$%^&*()',
        description: 'Тест со специальными символами'
    },
    {
        input: 'Docendo discimus.',
        description: 'Тест из примера декодирования'
    }
];

function testEncodeDecode(text) {
    console.log(`\nТестирование текста: "${text}"`);
    
    const encoded = huffmanEncode(text);
    console.log('Количество уникальных символов:', encoded.uniqueChars);
    console.log('Длина закодированной строки:', encoded.encodedLength);
    console.log('Таблица кодов:');
    Object.entries(encoded.codes)
        .sort(([a], [b]) => a.localeCompare(b))
        .forEach(([char, code]) => {
            console.log(`'${char}': ${code}`);
        });
    console.log('Закодированный текст:', encoded.encodedText);
    
    const decoded = huffmanDecode(encoded.codes, encoded.encodedText);
    console.log('Декодированный текст:', decoded);
    
    const isCorrect = decoded === text;
    console.log('Результат:', isCorrect ? 'OK' : 'FAIL');
    
    return isCorrect;
}

function runAllTests() {
    console.log('Запуск тестов алгоритмов Хаффмана\n');
    
    let passed = 0;
    let total = testCases.length;
    
    testCases.forEach(({ input, description }) => {
        console.log(`=== ${description} ===`);
        if (testEncodeDecode(input)) {
            passed++;
        }
    });
    
    console.log(`\nРезультаты тестирования:`);
    console.log(`Пройдено тестов: ${passed}/${total}`);
}

if (require.main === module) {
    runAllTests();
}

module.exports = {
    testEncodeDecode,
    runAllTests
};