window.onload = function () {
    const input = document.querySelector(".amount-selector"),
        colors = document.querySelector(".color-selector"),
        blocks = document.querySelector(".blocks");

    // Флаг для определения, четные или не четные красим
    let flag = true;

    // Обработка события на изменения количества в input
    input.addEventListener("input", function (e) {
        const elementCnt = e.target.value,
            fragment = document.createDocumentFragment();

        blocks.innerHTML = "";

        for (let i = 1; i <= elementCnt; i++) {
            const item = document.createElement("div");
            item.classList.add("item");
            item.innerText = i;
            fragment.appendChild(item);
        }

        blocks.appendChild(fragment);
    });

    // Обработка события на изменение цвета
    colors.addEventListener("change", function (e) {
        const color = e.target.value,
            items = blocks.querySelectorAll(".item");

        for (let i = 0; i < items.length; i++) {
            items[i].style.background = "#FFF";

            // В зависимости от флага меняем четные или не четные
            if(flag) {
                if(i % 2) {
                    items[i].style.background = color;
                }
            } else {
                if( !(i % 2 ) ) {
                    items[i].style.background = color;
                }
            }
        }

        // Переключаем флаг
        flag = !flag;
    });
};