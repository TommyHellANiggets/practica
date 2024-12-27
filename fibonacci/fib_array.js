function fibArray(n) {
    if (n < 0 || n > 40 || !Number.isInteger(n)) {
        throw new Error('n должно быть целым числом от 0 до 40');
    }

    const fib = [0, 1];

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib.slice(0, n + 1);
}

function getNthFib(n) {
    return fibArray(n)[n];
}

function measureFibTime(n) {
    const start = performance.now();
    const result = fibArray(n);
    const end = performance.now();
    
    return {
        n,
        result,
        timeMs: end - start
    };
}

function runExamples() {
    const n = 8;
    const sequence = fibArray(n);
    console.log(`Последовательность Фибоначчи до ${n}-го числа:`, sequence);
}

function runPerformanceTests() {
    const testCases = [10, 20, 30, 35, 40];
    const results = testCases.map(n => measureFibTime(n));
    
    console.log('Результаты тестирования производительности:');
    results.forEach(({ n, result, timeMs }) => {
        console.log(`n = ${n}: Массив длины ${result.length}, Время: ${timeMs.toFixed(3)} мс`);
    });
}

if (require.main === module) {
    runPerformanceTests();
}

module.exports = {
    fibArray,
    getNthFib,
    measureFibTime,
    runExamples,
    runPerformanceTests
};