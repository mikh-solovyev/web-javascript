/*
    #4 Фильтрация массива
    Создайте функцию которая в качестве аргумента принимает целое число, и проверяет четное оно или нет.
    Затем создайте произвольный массив целых чисел. И используя функцию проверки числа на четность,
    создайте из готового массива новый, который будет содержать только четные числа.
    Результат выведите в консоль.
*/

const mixedArray = [3,13,74,14,66,15,22,4];
const isEven = num => {
    return !(num % 2);
};

console.log(filterArray(mixedArray, isEven));

function filterArray(array, fn) {
    let arResult = [];

    for (let i = 0; i < array.length; i++) {
        if(fn(array[i])) {
            arResult.push(array[i]);
        }
    }

    return arResult;
}
