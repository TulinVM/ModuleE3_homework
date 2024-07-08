function countElements(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;

    arr.forEach(element => {
        if (typeof element === 'number') {
            if (element === 0) {
                zeroCount += 1;
            } else if (element % 2 === 0) {
                evenCount += 1;
            } else {
                oddCount += 1;
            }
        }
    });

    console.log(`Четных элементов: ${evenCount}`);
    console.log(`Нечетных элементов: ${oddCount}`);
    console.log(`Нулевых элементов: ${zeroCount}`);
}

// Пример вызова функции
let array = [0, 1, 2, 3, 4, 'a', null, 5, 0, -2];
countElements(array);
