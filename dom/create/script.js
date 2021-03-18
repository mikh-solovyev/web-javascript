window.onload = function () {
    const input = document.querySelector(".amount-selector"),
        colors = document.querySelector(".color-selector"),
        blocks = document.querySelector(".blocks");

    // Флаг для определения, четные или не четные красим
    let flag = true;

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


    colors.addEventListener("change", function (e) {
        const color = e.target.value,
            items = blocks.querySelectorAll(".item");

        for (let i = 0; i < items.length; i++) {
            items[i].style.background = "#FFF";

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