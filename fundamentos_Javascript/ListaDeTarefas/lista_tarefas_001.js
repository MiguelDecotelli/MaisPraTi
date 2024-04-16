/*
1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit.
*/

const prompt = require('prompt-sync')();

function conversorTemperatura() {
    let temperatura = parseInt(prompt("Informe a temperatura em Celsius: "));
    console.log("Selecione a temperatura:\n[K]elvin\n[F]arenheit");
    let kelvinFarenheit = prompt("")

    if(kelvinFarenheit.toLowerCase() == "k" || kelvinFarenheit.toLowerCase() == "kelvin"){
        return `Sua temperatura em Kelvin é ${parseFloat(temperatura) + 273.15}º`
    } else if (kelvinFarenheit.toLowerCase() == "f" || kelvinFarenheit.toLowerCase() == "farenheit") {
        return `Sua temperatura em Farenheit é ${(temperatura * 9/5) + 32}°`
    } else {
        return "Você não selecionou uma temperatura válida"
    }
}

console.log(conversorTemperatura());

