/*
    #1 Фильтрация строки
    Создать переменную со строковым значением.
    Сформировать переменную которая будет состоять только из ГЛАСНЫХ букв этой строки.
    Результат вывести в консоль.
*/

const string = "Привет! Как дела?";

console.log(getVowels(string));

function getVowels(str) {
    let result = '',
        vowels = ['а', 'е', 'ё', 'и','о', 'у', 'ы', 'э', 'ю', 'я'];

    for (let i = 0; i < str.length; i++) {
        let letter = str[i].toLowerCase();

        if(vowels.includes(letter)) {
            result += letter;
        }
    }

    return result;
}