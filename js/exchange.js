export default function exchange() {    
    let exchangeRates = {}
    const select = document.getElementById("exchanges");
    const basicPrice = document.getElementById("basicPrice");
    const profPrice = document.getElementById("profPrice");
    const premiumPrice = document.getElementById("premiumPrice");

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

    const actualPrice = {
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
        basicPrice.innerHTML = symbols[currency]+(actualPrice.basic * exchangeRates[currency]).toFixed(0);
        profPrice.innerHTML = symbols[currency]+(actualPrice.prof * exchangeRates[currency]).toFixed(0);
        premiumPrice.innerHTML = symbols[currency]+(actualPrice.premium * exchangeRates[currency]).toFixed(0);
    } 

    select.addEventListener("change", (e) => {
        exchangePrice(e.target.value);
    })
}