function fibBinet(n) {
    if (n < 0 || n > 64 || !Number.isInteger(n)) {
        throw new Error('n должно быть целым числом от 0 до 64');
    }

    if (n === 0) return 0;
    if (n === 1) return 1;

    const sqrt5 = Math.sqrt(5);
    const phi = (1 + sqrt5) / 2;
    const psi = (1 - sqrt5) / 2;

    return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / sqrt5);
}

function measureFibTime(n) {
    const start = performance.now();
    const result = fibBinet(n);
    const end = performance.now();
    
    return {
        n,
        result,
        timeMs: end - start
    };
}

function runExamples() {
    const testCases = [0, 1, 2, 3, 4, 5, 32];
    testCases.forEach(n => {
        const result = fibBinet(n);
        console.log(`Fib(${n}) = ${result}`);
    });
}

function runPerformanceTests() {
    const testCases = [10, 20, 40, 50, 64];
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
    fibBinet,
    measureFibTime,
    runExamples,
    runPerformanceTests
};