# Алгоритмические задачи - Учебная практика

## Описание
Данный репозиторий содержит реализации различных алгоритмических задач на JavaScript:
1. Алгоритмы вычисления чисел Фибоначчи
2. Алгоритмы кодирования/декодирования Хаффмана

## Структура проекта
```
algorithms_practicum/
├── fibonacci/
│   ├── fib_recursive.js
│   ├── fib_loop.js
│   ├── fib_array.js
│   ├── fib_binet.js
│   └── fib_big_even_odd.js
├── huffman/
│   ├── huffman_encoding.js
│   └── huffman_decoding.js
└── tests/
    ├── fibonacci_tests.js
    └── huffman_tests.js
```

## Установка и запуск
1. Клонируйте репозиторий:
```bash
git clone https://github.com/[ваш-username]/algorithms_practicum.git
cd algorithms_practicum
```

2. Установите зависимости:
```bash
npm install
```

3. Запуск тестов:
```bash
npm test
```

## Примеры использования

### Числа Фибоначчи
```javascript
const { fibRecursive } = require('./fibonacci/fib_recursive');
console.log(fibRecursive(6)); // Выведет: 8
```

### Кодирование Хаффмана
```javascript
const { huffmanEncode } = require('./huffman/huffman_encoding');
console.log(huffmanEncode("Errare humanum est."));
``` 