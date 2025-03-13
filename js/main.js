import sendForm from "./form.js"
import hamburguer from "./hamburguer.js";
import scroller from "./scroller.js";
import navegation from "./navegation.js";
import toTop from "./topButton.js";

addEventListener("DOMContentLoaded", () => {
    sendForm();
    hamburguer();
    scroller();
    navegation();
    toTop();
})