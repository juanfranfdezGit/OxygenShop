export default function navegation() {
    const navButtons = document.getElementsByClassName("header__menu-item");
    const navButtonsMobile = document.getElementsByClassName("header__menu-item--mobile");

    Array.from(navButtons).forEach(button => {
        button.addEventListener("click", () => {
            Array.from(navButtons).forEach(but => but.classList.remove("header__menu-item--active"));
    
            button.classList.add("header__menu-item--active");
        })
    });
    
    Array.from(navButtonsMobile).forEach(button => {
        button.addEventListener("click", () => {
            Array.from(navButtonsMobile).forEach(but => but.classList.remove("header__menu-item--mobile--active"));
    
            button.classList.add("header__menu-item--mobile--active");
        })
    });
}