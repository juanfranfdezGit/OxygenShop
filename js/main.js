let header = document.getElementsByClassName("header")[0];
let headerNav = document.getElementsByClassName("header__nav--mobile")[0];
let hamburguer = document.getElementsByClassName("header__hamburguer")[0];
let navButtons = document.getElementsByClassName("header__menu-item");
let navButtonsMobile = document.getElementsByClassName("header__menu-item--mobile");
let topButton = document.getElementsByClassName("toTopButton")[0];
let scroller = document.getElementsByClassName("scroller")[0];

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

        button.classList.add("header__menu-item--active");
    })
});

Array.from(navButtonsMobile).forEach(button => {
    button.addEventListener("click", () => {
        Array.from(navButtonsMobile).forEach(but => but.classList.remove("header__menu-item--mobile--active"));

        button.classList.add("header__menu-item--mobile--active");
    })
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
        topButton.className = "toTopButton active";
    } else {
        topButton.className = "toTopButton";
    }
})

topButton.addEventListener("click", () => {
    setTimeout(() => window.scrollTo({top: 0}), 200)
})

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / windowHeight) * 100;
    
    scroller.style.width = `${scrollPercent}%`
})