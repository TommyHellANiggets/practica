function fibRecursive(n) {
    if (n < 0 || n > 24 || !Number.isInteger(n)) {
        throw new Error('n должно быть целым числом от 0 до 24');
    }

    if (n === 0) return 0;
    if (n === 1) return 1;

    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

function measureFibTime(n) {
    const start = performance.now();
    const result = fibRecursive(n);
    const end = performance.now();
    
    return {
        n,
        result,
        timeMs: end - start
    };
}

function runPerformanceTests() {
    const testCases = [5, 10, 15, 20, 24];
    const results = testCases.map(n => measureFibTime(n));
    
    console.log('Результаты тестирования производительности:');
    results.forEach(({ n, result, timeMs }) => {
        console.log(`n = ${n}: Fib(${n}) = ${result}, Время: ${timeMs.toFixed(3)} мс`);
    });
}

if (require.main === module) {
    runPerformanceTests();
}

module.exports = {
    fibRecursive,
    measureFibTime,
    runPerformanceTests
}; 