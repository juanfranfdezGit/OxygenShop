let header = document.getElementsByClassName("header")[0];
let headerNav = document.getElementsByClassName("header__nav--mobile")[0];
let hamburguer = document.getElementsByClassName("header__hamburguer")[0];
let navButtons = document.getElementsByClassName("header__menu-item");
let navButtonsMobile = document.getElementsByClassName("header__menu-item--mobile");

hamburguer.addEventListener("click", () => {
    if (headerNav.className === "header__nav--mobile disallow") {
        headerNav.className = "header__nav--mobile";
        header.className = "header disallow";
    } else if (headerNav.className === "header__nav--mobile") {
        headerNav.className = "header__nav--mobile disallow";
        header.className = "header";
    }
})

Array.from(navButtons).forEach(button => {
    button.addEventListener("click", () => {
        Array.from(navButtons).forEach(but => but.classList.remove("header__menu-item--active"));

       button.classList.add("header__menu-item--active")
    })
});

Array.from(navButtonsMobile).forEach(button => {
    button.addEventListener("click", () => {
        Array.from(navButtonsMobile).forEach(but => but.classList.remove("header__menu-item--mobile--active"));

       button.classList.add("header__menu-item--mobile--active")
    })
});