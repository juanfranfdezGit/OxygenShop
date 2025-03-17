export default function slider() {
    const slider = document.getElementById("slider"); 
    const slides = document.getElementsByClassName("slider__slides")
    const indicators = document.getElementsByClassName("slider__indicartors-item"); 
    const prevButton = document.getElementById("leftArrow");
    const nextButton = document.getElementById("rightArrow");

    let index = 0;

    function moveImage() { 
        index++;

        if (index >= slides.length) {
            index = 0
        }

        slider.style.transform = `translateX(-${index * 100}%)`
        activeIndicator()
    }

    function moveImageBack() { 
        index--;

        if (index < 0) {
            index = slides.length - 1;
        }

        slider.style.transform = `translateX(-${index * 100}%)`
        activeIndicator()
    }

    function activeIndicator() {
        Array.from(indicators).forEach(indicator => indicator.classList.remove("active"))

        indicators[index].classList.add("active");
    }

    nextButton.addEventListener("click", () => {moveImage()})
    prevButton.addEventListener("click", () => {moveImageBack()})
}