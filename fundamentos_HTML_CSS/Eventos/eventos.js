// document.getElementById('nome').value = "Logan"

// let nome = prompt("Qual o seu nome?")
// let idade = prompt("Qual a sua idade?")

// if (idade >= 18){
//     document.write(`<h1>${nome}, por ter ${idade} anos, Você é maior de idade e pode beber<h1>`)
// } else {
//     document.write(`<h1>Você possui apenas ${idade}, portanto é menor de idade, precisa de um adulto para virar o pote<h1>`)
// }

// let amigo = prompt("E o Payet tem quantos anos?")

// media = (parseInt(idade) + parseInt(amigo)) / 2

// document.write(`A média da idade de vocês é ${media}`)

function eventoMouse(){
    document.write("Sumiu a cor quando cliquei")
}
// function eventoJanela(){
//     document.write("Janela se mexe!")
// }

function eventoTeclado() {
    document.write("Coutinho voltou!")
}

function eventoBlur() {
    const selectElement = document.getElementById('players');
    const selectedValue = selectElement.options[selectElement.selectedIndex].value;
    const resultElement = document.getElementById('result');

    resultElement.textContent = selectedValue;
}