class Slider {
    constructor(sliderId, prevButtonId, nextButtonId, slideClass, indicatorClass) {
        this.slider = document.getElementById(sliderId);
        this.slides = document.querySelectorAll(`.${slideClass}`);
        this.indicators = document.querySelectorAll(`.${indicatorClass}`);
        this.prevButton = document.getElementById(prevButtonId);
        this.nextButton = document.getElementById(nextButtonId);
        this.index = 0;

        console.log("prevButton", this.prevButton);
        console.log("nextButton", this.nextButton);

        this.prevButton.addEventListener("click", () => {this.moveImageBack();});
        this.nextButton.addEventListener("click", () => {this.moveImage();});

        this.activeIndicator();
    }

    moveImage() {
        this.index++;
        
        if (this.index >= this.slides.length) {
            this.index = 0;
        }

        this.slider.style.transform = `translateX(-${this.index * 100}%)`;

        this.activeIndicator();
    }

    moveImageBack() {
        this.index--;

        if (this.index < 0) {
            this.index = this.slides.length - 1;
        }

        this.slider.style.transform = `translateX(-${this.index * 100}%)`;

        this.activeIndicator();
    }

    activeIndicator() {
        this.indicators.forEach(indicator => indicator.classList.remove("active"));

        if (this.index < this.indicators.length) {
            this.indicators[this.index].classList.add("active");
        }
    }
}

export default Slider;