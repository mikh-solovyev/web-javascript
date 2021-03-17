window.onload = function () {
    const slider = document.querySelector(".slider"),
        prevBtn = slider.querySelector("#prev"),
        nextBtn = slider.querySelector("#next"),
        list = slider.querySelector(".slider__list");

    let currentPosition = 0;

    prevBtn.addEventListener("click", function() {
        if(currentPosition > 0) {
            list.style.right = (currentPosition - 100) + "px";
            currentPosition = parseInt(list.style.right);
        }
    });

    nextBtn.addEventListener("click", function() {
        if(currentPosition < 500) {
            list.style.right = (currentPosition + 100) + "px";
            currentPosition = parseInt(list.style.right);
        }
    });
};