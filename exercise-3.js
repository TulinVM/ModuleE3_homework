function createAdder(x) {
    return function(y) {
        return x + y;
    };
}

// Пример использования функции
const addFive = createAdder(5); // Создаем функцию, которая добавляет 5
console.log(addFive(10)); // Вывод: 15

const addTen = createAdder(10); // Создаем функцию, которая добавляет 10
console.log(addTen(25)); // Вывод: 35
