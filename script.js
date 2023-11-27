const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value // Valor em real
    const currencyValuetToConvert = document.querySelector(".currency-value-to-convert") // Outras moedas
    const currencyValueConvert = document.querySelector(".currency-value")

    console.log(currencySelect.value)
    const dolarToday = 4.9
    const euroToday = 5.4
    const libraToday = 6.2
    const bitcoinToday = 17592680


    if (currencySelect.value == "dolar") { // Se o selec estiver selecionado o valor de dolar, entre aqui
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "libra") { // Se o selec estiver selecionado o valor de libra, entre aqui
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {  // Se o selec estiver selecionado o valor de bitcoin, entre aqui
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencySelect.value == "euro") { // Se o selec estiver selecionado o valor de euro, entre aqui
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

        currencyValuetToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
