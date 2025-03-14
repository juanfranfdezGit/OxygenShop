export default function hamburguer() {
    let header = document.getElementsByClassName("header")[0];
    let headerNav = document.getElementsByClassName("header__nav--mobile")[0];
    let hamburguer = document.getElementsByClassName("header__hamburguer")[0];

    hamburguer.addEventListener("click", () => {
        if (headerNav.className === "header__nav--mobile disallow") {
            headerNav.className = "header__nav--mobile";
            header.className = "header disallow";
        } else if (headerNav.className === "header__nav--mobile") {
            headerNav.className = "header__nav--mobile disallow";
            header.className = "header";
        }
    })
}