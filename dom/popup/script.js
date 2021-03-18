window.onload = function () {
    const btn = document.querySelector(".btn_action_open");

    btn.addEventListener("click", function (){
        const container = document.createDocumentFragment();

        // create elements
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");

        const modalContainer = document.createElement("div");
        modalContainer.classList.add("modal-container");

        const close = document.createElement("a");
        close.classList.add("close");
        close.innerText = "x";
        close.href = "#";

        // При нажатии на крестик удаляем элемент из DOM
        close.addEventListener("click", () => { overlay.remove() });

        const content = document.createElement("div");
        content.classList.add("content");
        content.innerHTML = "Hello, <b>world</b>!";

        // Добавляем созданные элементы в DOM
        modalContainer.appendChild(close);
        modalContainer.appendChild(content);
        overlay.appendChild(modalContainer);
        container.appendChild(overlay);

        document.body.appendChild(container);
    });
};