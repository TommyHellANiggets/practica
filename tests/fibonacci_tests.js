const { fibRecursive } = require('../fibonacci/fib_recursive');
const { fibLoop } = require('../fibonacci/fib_loop');
const { fibArray, getNthFib } = require('../fibonacci/fib_array');
const { fibBinet } = require('../fibonacci/fib_binet');
const { fibEvenOdd } = require('../fibonacci/fib_big_even_odd');

// Известные значения чисел Фибоначчи для тестирования
const knownValues = {
    0: 0,
    1: 1,
    2: 1,
    3: 2,
    4: 3,
    5: 5,
    6: 8,
    7: 13,
    8: 21,
    9: 34,
    10: 55
};

// Тестирование рекурсивной функции
console.log('\nТестирование рекурсивной функции:');
Object.entries(knownValues).forEach(([n, expected]) => {
    const result = fibRecursive(Number(n));
    console.log(`n = ${n}: ${result === expected ? 'OK' : 'FAIL'}`);
});

// Тестирование функции с циклом
console.log('\nТестирование функции с циклом:');
Object.entries(knownValues).forEach(([n, expected]) => {
    const result = fibLoop(Number(n));
    console.log(`n = ${n}: ${result === expected ? 'OK' : 'FAIL'}`);
});

// Тестирование функции с массивом
console.log('\nТестирование функции с массивом:');
Object.entries(knownValues).forEach(([n, expected]) => {
    const result = getNthFib(Number(n));
    console.log(`n = ${n}: ${result === expected ? 'OK' : 'FAIL'}`);
});

// Тестирование функции Бине
console.log('\nТестирование функции Бине:');
Object.entries(knownValues).forEach(([n, expected]) => {
    const result = fibBinet(Number(n));
    console.log(`n = ${n}: ${result === expected ? 'OK' : 'FAIL'}`);
});

// Тестирование функции определения четности
console.log('\nТестирование функции определения четности:');
const evenOddTests = {
    1: 'odd',   // F(1) = 1
    2: 'odd',   // F(2) = 1
    3: 'even',  // F(3) = 2
    4: 'odd',   // F(4) = 3
    5: 'odd',   // F(5) = 5
    6: 'even',  // F(6) = 8
    841645: 'odd' // Большое число для проверки
};

Object.entries(evenOddTests).forEach(([n, expected]) => {
    const result = fibEvenOdd(Number(n));
    console.log(`n = ${n}: ${result === expected ? 'OK' : 'FAIL'}`);
}); 