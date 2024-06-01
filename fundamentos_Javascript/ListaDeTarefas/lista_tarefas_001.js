/*
1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit.
*/

const prompt = require('prompt-sync')();

function conversorTemperatura() {
    let temperatura = parseInt(prompt("Informe a temperatura em Celsius: "));
    console.log("Selecione a temperatura:\n[K]elvin\n[F]arenheit");
    let kelvinFarenheit = prompt("");

    if (kelvinFarenheit.toLowerCase() == "k" || kelvinFarenheit.toLowerCase() == "kelvin") {
        return `Sua temperatura em Kelvin é ${parseFloat(temperatura) + 273.15}°`;
    } else if (kelvinFarenheit.toLowerCase() == "f" || kelvinFarenheit.toLowerCase() == "farenheit") {
        return `Sua temperatura em Farenheit é ${(temperatura * 9 / 5) + 32}°`;
    } else {
        return "Você não selecionou uma temperatura válida"
    }
}

console.log(conversorTemperatura());

/*
2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores.
*/

function eleitorado() {
    let eleitores = parseInt(prompt("Informe o número de eleitores: "));
    let votosBrancos = parseInt(prompt("Informe o número de votos brancos: "));
    let votosNulos = parseInt(prompt("Informe o número de votos nulos: "));
    let votosValidos = parseInt(prompt("Informe o número de votos válidos: "));

    let percentualBrancos = (votosBrancos * 100) / eleitores;
    let percentualNulos = (votosNulos * 100) / eleitores;
    let percentualValidos = (votosValidos * 100) / eleitores;

    return `${percentualBrancos}% de votos brancos\n
    ${percentualNulos}% de votos nulos\n
    ${percentualValidos}% de votos válidos`;
}


console.log(eleitorado());

/*

3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.
*/

function algoritmo() {

    let numero1 = parseInt(prompt("Informe o número 1: "));
    let numero2 = parseInt(prompt("Informe o número 2: "));
    let numero3 = parseInt(prompt("Informe o número 3: "));
    let numero4 = parseInt(prompt("Informe o número 4: "));


    let somar = numero1 + 25;
    let triplicar = numero2 * 3;
    let modificar = numero3 * (12 / 100);
    numero4 = numero1 + numero2 + numero3

    return `
    Some 25 ao primeiro intero: ${somar}\n
    Triplique o valor do segundo inteiro: ${triplicar}\n
    Modifique o valor do inteiro para 12% do valor original: ${modificar}\n
    Armazene a soma dos 3 inteiros: ${numero4}`
}

console.log(algoritmo());

/*
4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).
*/

function notaSemestral1() {
    let nota1 = parseFloat(prompt("Informa a primeira nota do aluno: "));
    let nota2 = parseFloat(prompt("Informa a segunda nota do aluno: "));

    let media = (nota1 + nota2) / 2;

    if (media >= 6) {
        return `PARABÉNS! Você foi aprovado com a média ${media}`
    }
}

console.log(notaSemestral1());

/*
5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0
*/
function notaSemestral2() {
    let nota1 = parseFloat(prompt("Informa a primeira nota do aluno: "));
    let nota2 = parseFloat(prompt("Informa a segunda nota do aluno: "));

    let media = (nota1 + nota2) / 2;

    if (media >= 6) {
        return `PARABÉNS! Você foi aprovado com a média ${media}`
    } else {
        return `Você não foi aprovado, estude um pouco mais!`
    }
}

console.log(notaSemestral2());

/*
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/

function triangulo() {
    let ladoA = parseInt(prompt("Informe o lado A do triângulo: "))
    let ladoB = parseInt(prompt("Informe o lado B do triângulo: "))
    let ladoC = parseInt(prompt("Informe o lado C do triângulo: "))

    if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
        if (ladoA == ladoB && ladoB == ladoC) {
            return "Temos um triângulo equilatero, com todos os lados iguais!"
        } else if (ladoA == ladoB && ladoA != ladoC || ladoA == ladoC && ladoA != ladoB || ladoB == ladoC && ladoB != ladoA) {
            return "Temos um triângulo isósceles, com dois lados iguais!"
        } else {
            return "Temos um triângulo escaleno, com todos os lados diferentes!"
        }
    } else {
        return "Os lados fornecidos não formam um triângulo"
    }
}

console.log(triangulo());

/*
7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

function apple() {
    let compra = parseInt(prompt("Informe quantas maças você deseja comprar: "));

    if (compra < 12) {
        let valor = parseFloat(compra * .3);
        return `O valor total da compra de ${compra} maçãs é R$ ${valor.toFixed(2)}`;
    } else {
        let valor = parseFloat(compra * .25);
        return `O valor total da compra de ${compra} maçãs é R$ ${valor.toFixed(2)}`;
    }
}

console.log(apple());

/*
8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/

function doisValores() {
    let valor1 = parseInt(prompt("Informe o primeiro valor: "));
    let valor2;
    do {
        valor2 = parseInt(prompt("Informe o segundo valor: "));
    } while (valor2 == valor1);

    if (valor1 > valor2) {
        return `Os valores são ${valor1} e ${valor2}`;
    } else {
        return `Os valores são ${valor2} e ${valor1}`;
    }
}

console.log(doisValores());

/*
9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo:
*/

function origem() {
    let origemProduto = parseInt(prompt("Informe o código de origem do produto: "));

    if (origemProduto >= 10 && origemProduto <= 20) {
        return "Região Centro-Oeste";
    } else if (origemProduto >= 25 && origemProduto <= 50) {
        return "Região Nordeste";
    } else {
        switch (origemProduto) {
            case 1:
                return "Região Sul";
            case 2:
                return "Região Norte";
            case 3:
                return "Região Leste";
            case 4:
                return "Região Oeste";
            case 5:
            case 6:
                return "Região Nordeste";
            case 7:
            case 8:
            case 9:
                return "Região Sudeste";
            default:
                return "Produto Importado"
        }
    }
}

console.log(origem());

/*
10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

function repetidor() {
    let numero = parseInt(prompt("Informe um número: "));
    for (i = 0; i < 10; i++) {
        console.log(numero);
    }
}
repetidor();

/*
11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.
*/

function parImpar() {
    let numero;
    do {
        numero = parseInt(prompt("Digite um número: "));
        if (numero <= 0) {
            break
        }
        else if (numero % 2 === 0) {
            console.log("PAR")
        } else {
            console.log("ÍMPAR")
        }
    } while (numero > 0);

}

parImpar()

/*
12. Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
divididos por 11, dão resto igual a 5.
*/

function restoDivisao() {
    for (i = 1000; i < 2000; i++) {
        if (i % 11 == 5) {
            console.log(i);
        }
    }
}

restoDivisao()

/*
13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N
*/

function valores() {
    let numero = parseInt(prompt("Informe o número: "));
    for (i = 1; i <= 5; i++) {
        console.log(`${i} * ${numero} = ${i * numero}`)
    }
}

valores();

/*
14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/

function decimais() {
    let numero;
    let soma = 0;
    let contador = 0;

    while (numero !== 0) {
        numero = parseFloat(prompt("Informe o seu número (para encerrar, digite 0): "));
        contador += 1;
        soma += numero;
    }
    console.log(`A média aritmética dos números decimais é: ${soma / (contador - 1)}`);
}

decimais();

/*
15. Fazer um algoritmo para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.
*/

function mediaPonderada() {
    let somaProdutos = 0;
    let somaPesos = 0;

    while (true) {
        let numeros = parseFloat(prompt("Informe o seu número (para encerrar, digite 0): "));
        if (numeros === 0) {
            break
        }

        let pesos = parseFloat(prompt("Informe o peso: "));
        somaProdutos += numeros * pesos;
        somaPesos += pesos;
    }

    let mediaPonderada = somaProdutos / somaPesos;

    return `A média ponderada é ${mediaPonderada}`
}

console.log(mediaPonderada())
    ;
/*
16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
*/

function numerosPrimos() {

    function numeroPrimo(numero) {
        for (let divisor = 2; divisor < numero; divisor++) {
            if (numero % divisor === 0) {
                return false;
            }
        }
        return true;
    }

    let contador = 0;
    let numero = 101;
    while (contador < 50) {
        if (numeroPrimo(numero)) {
            console.log(numero);
            contador++;
        }
        numero++;
    }
}

numerosPrimos();
