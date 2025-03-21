export default function hamburguer() {
    const header = document.getElementsByClassName("header")[0];
    const headerNav = document.getElementsByClassName("header__nav--mobile")[0];
    const hamburguer = document.getElementsByClassName("header__hamburguer")[0];
    const spans = hamburguer.querySelectorAll("span");

    hamburguer.addEventListener("click", () => {
        if (headerNav.className === "header__nav--mobile disallow") {
            headerNav.className = "header__nav--mobile";
            header.className = "header disallow";

            spans.forEach((span) => {
                span.className = "hamburguer__allow";
            })

        } else if (headerNav.className === "header__nav--mobile") {
            headerNav.className = "header__nav--mobile disallow";
            header.className = "header";

            spans.forEach((span) => {
                span.className = "";
            })
        }
    })
}