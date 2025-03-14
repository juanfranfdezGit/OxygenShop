export default function exchange() {    
    let exchangeRates = []
    let usdSymbol = document.getElementById("usdSymbol");
    let eurSymbol = document.getElementById("euroSymbol");
    let gbpSymbol = document.getElementById("gbpSymbol");
    let basicPrice = document.getElementById("basicPrice");
    let profPrice = document.getElementById("profPrice");
    let premiumPrice = document.getElementById("premiumPrice");

    async function takeChanges() {
        await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json")
        .then((res) => res.json())
        .then((json) => {
            exchangeRates = {
                gbp: json.usd.gbp,
                eur: json.usd.eur,
                usd: json.usd.usd
            };
        })
        .catch((err) => {console.log(err)})
    }

    takeChanges()

    const priceActual = {
        basic: 0,
        prof: 25,
        premium: 60
    }

    const symbols = {
        eur: "€",
        usd: "$",
        gbp: "£"
    }

    function exchangePrice(currency) {
        basicPrice.innerHTML = symbols[currency]+(priceActual.basic * exchangeRates[currency]).toFixed(0);
        profPrice.innerHTML = symbols[currency]+(priceActual.prof * exchangeRates[currency]).toFixed(0);
        premiumPrice.innerHTML = symbols[currency]+(priceActual.premium * exchangeRates[currency]).toFixed(0);
    } 

    usdSymbol.addEventListener("click", () => exchangePrice("usd"))
    eurSymbol.addEventListener("click", () => exchangePrice("eur"))
    gbpSymbol.addEventListener("click", () => exchangePrice("gbp"))
}