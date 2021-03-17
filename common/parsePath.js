/*
    #3 Анализ строки
    Написать функцию которая будет принимать в качестве аргумента строку имитирующую адрес до файла.
    Функция должна возвращать true или false в зависимости от того есть у этого файла расширение html или нет.
*/

const path = "/users/download/index.html";

console.log(isHtml(path));

function isHtml(path) {
    const arPath = path.split("."),
        resolution = arPath[arPath.length - 1];

    return (resolution === 'html');
}

