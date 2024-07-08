function isPrime(number) {
    if (typeof number !== 'number' || number < 0 || number > 1000) {
        console.log('Данные неверны');
        return;
    }

    if (number === 0 || number === 1) {
        console.log(`${number} не является простым числом`);
        return;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log(`${number} не является простым числом`);
            return;
        }
    }

    console.log(`${number} является простым числом`);
}

// Примеры вызова функции
isPrime(0);   // 0 не является простым числом
isPrime(1);   // 1 не является простым числом
isPrime(2);   // 2 является простым числом
isPrime(4);   // 4 не является простым числом
isPrime(17);  // 17 является простым числом
isPrime(1001); // Данные неверны
