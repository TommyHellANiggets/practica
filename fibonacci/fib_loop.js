function fibLoop(n) {
    if (n < 0 || n > 32 || !Number.isInteger(n)) {
        throw new Error('n должно быть целым числом от 0 до 32');
    }

    if (n === 0) return 0;
    if (n === 1) return 1;

    let prev = 0;
    let current = 1;
    
    for (let i = 2; i <= n; i++) {
        const next = prev + current;
        prev = current;
        current = next;
    }

    return current;
}

function measureFibTime(n) {
    const start = performance.now();
    const result = fibLoop(n);
    const end = performance.now();
    
    return {
        n,
        result,
        timeMs: end - start
    };
}

function runPerformanceTests() {
    const testCases = [5, 10, 20, 25, 32];
    const results = testCases.map(n => measureFibTime(n));
    
    console.log('Результаты тестирования производительности:');
    results.forEach(({ n, result, timeMs }) => {
        console.log(`n = ${n}: Fib(${n}) = ${result}, Время: ${timeMs.toFixed(3)} мс`);
    });
}

if (require.main === module) {
    runPerformanceTests();
}

module.exports = { fibLoop };