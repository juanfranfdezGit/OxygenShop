export default function scroller() {
    let scroller = document.getElementsByClassName("scroller")[0];

    
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / windowHeight) * 100;
        
        scroller.style.width = `${scrollPercent}%`
    })
}