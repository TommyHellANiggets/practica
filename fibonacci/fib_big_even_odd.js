function fibEvenOdd(n) {
    if (n < 1 || n > 1000000 || !Number.isInteger(n)) {
        throw new Error('n должно быть целым числом от 1 до 10^6');
    }

    const lastDigit = getLastDigit(n);
    return lastDigit % 2 === 0 ? 'even' : 'odd';
}

function getLastDigit(n) {
    const period = 60;
    n = n % period;
    
    if (n <= 1) return n;
    
    let prev = 0;
    let current = 1;
    
    for (let i = 2; i <= n; i++) {
        const next = (prev + current) % 10;
        prev = current;
        current = next;
    }
    
    return current;
}

function measureFibTime(n) {
    const start = performance.now();
    const result = fibEvenOdd(n);
    const end = performance.now();
    
    return {
        n,
        result,
        timeMs: end - start
    };
}

function runExamples() {
    const testCases = [1, 2, 3, 4, 5, 841645];
    testCases.forEach(n => {
        const result = fibEvenOdd(n);
        console.log(`Fib(${n}) is ${result}`);
    });
}

function runPerformanceTests() {
    const testCases = [10, 1000, 10000, 100000, 1000000];
    const results = testCases.map(n => measureFibTime(n));
    
    console.log('Результаты тестирования производительности:');
    results.forEach(({ n, result, timeMs }) => {
        console.log(`n = ${n}: Четность = ${result}, Время: ${timeMs.toFixed(3)} мс`);
    });
}

if (require.main === module) {
    runPerformanceTests();
}

module.exports = {
    fibEvenOdd,
    getLastDigit,
    measureFibTime,
    runExamples,
    runPerformanceTests
};