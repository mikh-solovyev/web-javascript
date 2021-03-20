window.onload = function () {

    // Элементы используюмые в слайдере
    const slider = {
        root: document.querySelector(".slider"),
        prevBtn: document.querySelector("#prev"),
        nextBtn: document.querySelector("#next"),
        wrapper: document.querySelector(".slider__wrapper"),
        list: document.querySelector(".slider__list"),
        items: document.querySelectorAll(".slider__item"),
    };

    // Небольшие настройки для слайдера
    const options = {
        count: slider.items.length,
        showCount: 3,
        itemSize: 200,
        currentPosition: 0,
        minPosition: 0,
        maxPosition: 0
    };

    // Считаем на сколько возможно максимально сдвинуть слайдер
    options.maxPosition = (options.count * options.itemSize) - (options.showCount * options.itemSize);

    // Задание начальных стилей при загрузке, для расчетов ширины
    const render = function () {
        slider.wrapper.style.width = (options.itemSize * options.showCount) + "px";

        for (let element of slider.items) {
            element.style.minWidth = options.itemSize + "px";
            element.style.minHeight = options.itemSize + "px";
        }
    };

    render();

    // Обработка событий на кнопку назад
    slider.prevBtn.addEventListener("click", function() {
        if(options.currentPosition > options.minPosition) {
            slider.list.style.right = (options.currentPosition - options.itemSize) + "px";
            options.currentPosition = parseInt(slider.list.style.right);
        }
    });

    // Обработка событий на кнопку вперед
    slider.nextBtn.addEventListener("click", function() {
        if(options.currentPosition < options.maxPosition) {
            slider.list.style.right = (options.currentPosition + options.itemSize) + "px";
            options.currentPosition = parseInt(slider.list.style.right);
        }
    });
};