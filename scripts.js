const convertButton = document.querySelector('.convertButton')
const inputField = document.querySelector('.input-field')
const currencySelect = document.querySelector('.currencySelect')

function convertValues(){
    const inputCurrencyValue = document.querySelector('.input-field').value
    const numberToConvert = document.querySelector('.numberToConvert')
    const convertedNumber = document.querySelector('.convertedNumber')
    const endResult = document.querySelector('.endResult')

    const dolarToday = 5.6
    const euroToday = 6.43

    if(currencySelect.value === 'dolar'){
        convertedNumber.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

        endResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value === 'euro'){
        convertedNumber.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

        endResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    numberToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

convertButton.addEventListener('click', convertValues)