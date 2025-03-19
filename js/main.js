import sendForm from "./form.js"
import hamburguer from "./hamburguer.js";
import scroller from "./scroller.js";
import navegation from "./navegation.js";
import toTop from "./topButton.js";
import exchange from "./exchange.js";
import newsletter from "./newsletter.js";
import Slider from './slider.js';

addEventListener("DOMContentLoaded", () => {
    sendForm();
    hamburguer();
    scroller();
    navegation();
    toTop();
    exchange();
    newsletter();

    new Slider("slider", "leftArrow", "rightArrow", "slider__slides", "slider__indicartors-item");
})