export default function toTop() {
    let topButton = document.getElementsByClassName("toTopButton")[0];

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
}