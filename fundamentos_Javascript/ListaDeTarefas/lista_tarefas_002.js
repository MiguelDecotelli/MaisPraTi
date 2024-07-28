const prompt = require('prompt-sync')();


/* 1- Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias. */

function tempoDeVida() {
    let cigarrosDiarios = parseInt(prompt("Quantos cigarros você fuma por dia? "));
    let anosFumando = parseInt(prompt("Há quantos anos você fuma? "));

    totalDeCigarrosFumados = (cigarrosDiarios * 365) * anosFumando;

    let diasDeVidaPerdidos = (totalDeCigarrosFumados / 144);

    return diasDeVidaPerdidos.toFixed(2);
}

console.log(tempoDeVida());

/* 2- Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida. */

function multar() {
    let velocidade = parseInt(prompt("Qual a velocidade do carro? "));

    let multa = (velocidade - 80) * 5;

    if (velocidade > 80) {
        return `Você foi multado no valor de R$ ${multa.toFixed(2)}.`
    }
}

console.log(multar());

/* 3- Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas. */

function viagem() {
    let distancia = parseInt(prompt("Qual distância que você deseja percorrer (em KM)? "));
    if (distancia <= 200) {
        passagem = (distancia * .5);
        return passagem
    } else {
        passagem = (distancia * .45);
        return passagem
    }
}

console.log(viagem());

/* 4- Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois. */

function triangulo(a, b, c) {

    if ((a < b + c) && (b < a + c) && (c < a + b)) {
        return `É possível formar um triângulo!`
    } else {
        return `Não é possível formar um triângulo`
    }
}

console.log(triangulo(3, 4, 5));

/* 5- Crie um jogo de JoKenPo (Pedra-Papel-Tesoura). */

function JoKenPo() {
    console.log("Bem vindo ao JO KEN PO! \n\nDigite FIM para encerrar\n")
    const JOKENPO = ["pedra", "papel", "tesoura"];
    let jogador;
    do {
        jogador = prompt("Pedra, Papel ou Tesoura? ").toLowerCase();
        if (jogador == "fim") {
            console.log("Até a próxima!");
            break
        } else {
            let maquina = JOKENPO[Math.floor(Math.random() * JOKENPO.length)];
            console.log(`\nVocê escolheu: ${jogador.toUpperCase()}`)
            console.log(`A máquina escolheu: ${maquina.toUpperCase()}`)
            if (jogador === "pedra" && maquina === "tesoura") {
                console.log(`Pedra quebra tesoura! você ganhou!\n`);
            } else if (jogador === "tesoura" && maquina === "papel") {
                console.log(`Tesoura corta papel! você ganhou!\n`);
            } else if (jogador === "papel" && maquina === "pedra") {
                console.log(`Papel cobre pedra! você ganhou!\n`);
            } else if (jogador === maquina) {
                console.log(`Ih! Empatou!\n`);
            } else {
                console.log(`Poxa, você perdeu.\n`);
            }
        }
    } while (jogador != "fim");
}
JoKenPo();

/* 6- Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado. */

function numeros() {
    let computador = Math.floor(Math.random() * (5) + 1);
    let jogador = parseInt(prompt("Escolha um número entre 1 e 5: "))
    if (jogador == computador) {
        console.log(`Parabéns, você acertou o número da máquina: ${computador}!`)
    } else {
        console.log(`Que pena, Você escolheu o número ${jogador}, mas a máquina sorteou ${computador}.`)
    }

}

numeros();

/* 7- Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km */

function locadora(carro, distancia) {
    let valor;
    if (carro == "popular") {
        if (distancia <= 100) {
            valor = 90 + (distancia * 0.2)
        } else {
            valor = 90 + (distancia * 0.1)
        }
    } else if (carro == "luxo") {
        if (distancia <= 200) {
            valor = 150 + (distancia * 0.3)
        } else {
            valor = 150 + (distancia * 0.25)
        }
    }
    return `O valor final do aluguel é de R$ ${valor}`;
}

console.log(locadora("luxo", 500))

/* 8- Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar. */

function saude() {
    let atividades = parseInt(prompt("Informe quantas horas de atividade você realizou: "));
    let pontos;

    if (atividades <= 10) {
        pontos = 2 * atividades;
    } else if (atividades > 10 && atividades <= 20) {
        pontos = 5 * atividades;
    } else if (atividades > 20) {
        pontos = 10 * atividades;
    }
    let ganhos = pontos * 0.05;
    return `Neste mês você acumulou ${pontos} pontos em atividades e ganhou R$ ${ganhos.toFixed(2)}`
}

console.log(saude());

/* 9- Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.*/

function salarioFuncionarios() {
    let homens = 0;
    let salarioHomens = 0;
    let mulheres = 0;
    let salarioMulheres = 0;
    let continuar;
    do {
        let sexo = prompt("Por favor informe seu sexo - [F]eminino ou [M]asculino: ").toLowerCase();
        let salario = parseFloat(prompt("Por favor informe seu salário: "));
        if (sexo == "m") {
            homens += 1;
            salarioHomens += salario;
        } else if (sexo == "f") {
            mulheres += 1
            salarioMulheres += salario
        }
        continuar = prompt("Deseja continuar [S]im ou [N]ão? ")

    } while (continuar == "s")

    console.log(`\nSalário total pago aos homens: ${salarioHomens}\nSalário total pago às mulheres: ${salarioMulheres}`)
}

salarioFuncionarios();

/* 10- Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.*/

function variosNumeros() {
    let numeros = 0;
    let soma = 0;
    let menorNumero = 999999;
    let media = 0;
    let pares = 0;
    let continuar;

    do {
        let numero = parseInt(prompt("Digite um número: "))
        numeros += 1;
        soma += numero;
        if (numero < menorNumero) {
            menorNumero = numero;
        }
        media = soma / numeros;
        if (numero % 2 == 0) {
            pares += 1;
        }
        continuar = prompt("Deseja continuar [S]im ou [N]ão? ")
    } while (continuar != "n")

    console.log(`\na) Somatório: ${soma}\nb) Menor valor: ${menorNumero}\nc) Média dos valores: ${media}\nd) Quantidade de números pares: ${pares}`)
}

variosNumeros();

/* 11- Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência.*/

function progressaoAritmetica() {
    let primeiroTermo = parseInt(prompt("Informe o primeiro termo da PA: "))
    let razao = parseInt(prompt("Informe a razão de crescimento: "))
    let soma = 0;

    for (let i = 0; i < 10; i++) {
        let termo = primeiroTermo + i * razao;
        soma += termo
        console.log(`${i + 1} = ${termo}`)
    }
    console.log(`A soma entre os números é: ${soma}`)
}

progressaoAritmetica();

/* 12- Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.*/

function fibonacci() {
    let antecessor = 1;
    let sucessor = 1;
    let fibonacci = [antecessor, sucessor]

    for (let i = 0; i < 8; i++) {
        let sequenciaFibonacci = (antecessor + sucessor)
        fibonacci.push(sequenciaFibonacci);
        antecessor = sucessor;
        sucessor = sequenciaFibonacci;
    }
    console.log(fibonacci)
}

fibonacci();

/* 13- Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci. */

function fibonacci2() {
    let antecessor = 1;
    let sucessor = 1;
    let fibonacci = [antecessor, sucessor]

    for (let i = 0; i < 13; i++) {
        let sequenciaFibonacci = (antecessor + sucessor)
        fibonacci.push(sequenciaFibonacci);
        antecessor = sucessor;
        sucessor = sequenciaFibonacci;
    }
    console.log(fibonacci)
}

fibonacci2();

/* 14- Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados. */

function listaNomes() {
    const lista = [];
    console.log("Informe 7 nomes.\n")
    for (let i = 0; i < 7; i++) {
        let nomes = prompt(`Nome 0${i + 1}: `)
        lista.push(nomes)
    }
    lista.reverse();

    console.log("\nLista de nomes invertida:\n")
    lista.forEach(nome => {
        console.log(nome)
    });
}
listaNomes();

/* 15- Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados. */

function vetorPares() {
    const vetor = [];
    console.log("Digite 10 numeros inteiros.\n")
    for (let i = 0; i < 10; i++) {
        let numero = prompt(`Numero 0${i + 1}: `)
        vetor.push(numero)
    }

    vetor.forEach((numero, indice) => {
        if (numero % 2 == 0) {
            console.log(`\nNumero ${numero} na posição ${indice}`)
        }
    });
}

vetorPares();

/* 16- Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.*/

function geradorNumeros() {
    const vetor = []
    for (let i = 0; i < 20; i++) {
        let numerosAleatorios = Math.floor(Math.random() * 100);
        vetor.push(numerosAleatorios)
    }
    console.log(`Os números gerados foram: ${vetor}\n`)

    vetor.sort((x, y) => x - y);

    console.log(`O vetor com seus números ordenados é: ${vetor.sort()}`)

}

geradorNumeros();

/* 17- Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade. */

function idades() {
    const nomes = [];
    const idades = [];


    for (let i = 0; i < 9; i++) {
        let nome = prompt("Digite o nome de uma pessoa: ");
        nomes.push(nome)
        let idade = prompt("Agora digite a idade dessa pessoa: ");
        idades.push(idade)
    }

    for (let i = 0; i < 9; i++) {
        if (idades[i] < 18) {
            console.log(`Nome: ${nomes[i]} - Idade: ${idades[i]} anos`)
        }
    }
}

idades();

/* 18- Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro. */

function registroFuncionario() {

    const funcionario = {
        nome: "",
        cargo: "",
        salario: 0,
    };

    funcionario.nome = prompt("Qual o seu nome? ")
    funcionario.cargo = prompt("Qual o seu cargo? ")
    funcionario.salario = parseFloat(prompt("Qual o seu salário? "))

    console.log(funcionario)
}

registroFuncionario();

/* 19- Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS. */

function horarios() {
    const horarios = [];

    function validarHorarios(horario) {
        const regex = /^([01]\d|2[0-3])\.[0-5]\d\.[0-5]\d$/;
        return regex.test(horario)
    }

    for (let i = 0; i < 5; i++) {
        let horario;
        do {
            horario = prompt("Informe o horário no formato HH.MM.SS: ")
            horarios.push(horario)
        } while (!validarHorarios(horario))

        console.log("Horários informados são:")
        horarios.forEach(horario => {
            console.log(horario)

        });
    }
}
horarios();


/* 20- Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).  */

function empregados() {
    const empregados = []
    let numeroEmpregados = 80

    for (let i = 0; i < numeroEmpregados; i++) {
        let matricula = prompt(`Informe o número da matrícula -> empregado ${i + 1}: `)
        let nome = prompt(`Informe o nome do empregado -> empregado ${i + 1}: `)
        let salario = parseFloat(prompt(`Informe o valor do Salário -> empregado ${i + 1}: `))

        const INSS = salario * .12
        let salarioLiquido = salario - INSS

        let empregado = {
            matricula: matricula,
            nome: nome,
            salarioBruto: salario,
            DeducaoInss: INSS,
            salarioLiquido: salarioLiquido,
        };

        empregados.push(empregado);
    }
    empregados.forEach(empregado => {
        console.log(`\nMatrícula: ${empregado.matricula}\nNome: ${empregado.nome}\nSalário Bruto: R$ ${empregado.salarioBruto.toFixed(2)}\nDedução INSS: R$ ${empregado.DeducaoInss.toFixed(2)}\nSalário Líquido: R$ ${empregado.salarioLiquido.toFixed(2)}`)
    });

}

empregados();

/* 21- Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. */

function pesoIdeal(altura, sexo) {
    if (sexo === "M") {
        peso = 72.7 * parseFloat(altura) - 58;
        return `O seu peso ideal é ${peso.toFixed(2)}`;
    } else if (sexo == "F") {
        peso = 72.7 * parseFloat(altura) - 58;
        return `O seu peso ideal é ${peso.toFixed(2)}`;
    }
}

console.log(pesoIdeal(1.78, "M"));
console.log(pesoIdeal(1.58, "F"));

/* 22- A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.*/

function moradores() {
    let contador = 0;
    let salarios = 0;
    let totalFilhos = 0;
    let mediaSalarial = 0;
    let mediaFilhos = 0;
    let maiorSalario = 0;
    let salario350 = 0;
    let percentual = 0
    let continuar = true;

    do {
        let salario = parseFloat(prompt("Informe o seu salário: "));
        let filhos = parseInt(prompt("Quantos filhos você tem? "));
        salarios += salario;
        totalFilhos += filhos;
        contador += 1;

        if (salario >= maiorSalario) {
            maiorSalario = salario;
        }

        if (salario <= 350) {
            salario350 += 1;
        }

        let pergunta = prompt("Pressione qualquer tecla para continuar e não para encerrar: ").toLowerCase();
        if (pergunta === "não" || pergunta == "nao") {
            continuar = false;
        }
    } while (continuar == true)

    mediaSalarial = salarios / contador
    mediaFilhos = parseFloat(totalFilhos / contador).toFixed(2);
    percentual = (salario350 / contador) * 100

    console.log(`\nMédia de salários da população: R$ ${mediaSalarial.toFixed(2)}\nMédia de filhos: ${mediaFilhos}\nO Maior salário é de R$ ${maiorSalario.toFixed(2)}\nPessoas com salario inferior a R$ 350,00: ${percentual.toFixed(2)}%`)
}

moradores();

/* 23- Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos. */

function matrizIdentidade() {
    let matriz = [];
    for (let i = 0; i < 7; i++) {
        let linha = [];
        for (let j = 0; j < 7; j++) {
            if (i === j) {
                linha.push(1);
            } else {
                linha.push(0);
            }
        }
        matriz.push(linha);
    }

    for (let i = 0; i < 7; i++) {
        console.log(matriz[i].join(" "));
    }
}

matrizIdentidade();

/* 24- Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M. */

function matrizNegativos() {
    let matriz = [];
    let vetorC = [];

    for (let i = 0; i < 6; i++) {
        let linha = [];
        for (let j = 0; j < 8; j++) {
            linha.push(Math.floor(Math.random() * 17) - 8);
        }
        matriz.push(linha);
    }

    for (let i = 0; i < 6; i++) {
        let numerosNegativos = 0;
        for (let j = 0; j < 8; j++) {
            if (matriz[i][j] < 0) {
                numerosNegativos += 1;
            }
        }
        vetorC.push(numerosNegativos);
    }

    console.log("Matriz M:\n")
    for (let i = 0; i < 6; i++) {
        console.log(matriz[i].join("  "));
    }

    console.log(`\nNúmero de elementos negativos por linha da Matriz: ${vetorC.join(" ")}`);
}
matrizNegativos();

/* 25- Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente. */

function matrizNumerosReais() {
    let matriz = [];
    for (let i = 0; i < 15; i++) {
        let linha = [];
        for (let j = 0; j < 20; j++) {
            linha.push(Math.floor(Math.random() * 101) - 50)
        }
        matriz.push(linha);
    }
    let valoresColunas = new Array(20).fill(0);

    for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 15; i++) {
            valoresColunas[j] += matriz[i][j];
        }
    }

    for (let i = 0; i < 15; i++) {
        console.log(matriz[i].join(" "));
    }

    for (let j = 0; j < 20; j++) {
        console.log(`Valor coluna${j + 1}: ${valoresColunas[j]}`)
    }
}
matrizNumerosReais();


/* 26- Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5]. */

function multiplicarMatriz() {
    let matrizA = [];
    for (let i = 0; i < 3; i++) {
        let linha = [];
        for (let j = 0; j < 5; j++) {
            linha.push(Math.floor(Math.random() * 101) - 50)
        }
        matrizA.push(linha);
    }
    let matrizB = [];
    for (let i = 0; i < 3; i++) {
        let linha = [];
        for (let j = 0; j < 5; j++) {
            linha.push(Math.floor(Math.random() * 101) - 50)
        }
        matrizB.push(linha);
    }

    let matrizProduto = [];
    for (let i = 0; i < 3; i++) {
        let linha = [];
        for (let j = 0; j < 5; j++) {
            linha.push((matrizA[i][j] * matrizB[i][j]))
        }
        matrizProduto.push(linha);
    }

    console.log("\nMatriz A:")
    for (let i = 0; i < 3; i++) {
        console.log(matrizA[i].join(" "))
    }

    console.log("\nMatriz B:")
    for (let i = 0; i < 3; i++) {
        console.log(matrizB[i].join(" "))
    }

    console.log("\nMatriz Produto:")
    for (let i = 0; i < 3; i++) {
        console.log(matrizProduto[i].join(" "))
    }
}

produtoMatrizes();

/* 27- Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final. */

function multiplicarMatriz() {
    let A = Math.floor(Math.random() * 10)
    let matriz = [];
    for (let i = 0; i < 6; i++) {
        let linha = [];
        for (let j = 0; j < 6; j++) {
            linha.push(Math.floor(Math.random() * 101))
        }
        matriz.push(linha);
    }
    let vetorV = [];
    for (let i = 0; i < 6; i++) {
        let linha = [];
        for (let j = 0; j < 6; j++) {
            linha.push((matriz[i][j] * A))
        }
        vetorV.push(linha);
    }

    for (let i = 0; i < 6; i++) {
        console.log(vetorV[i].join(" "))
    }
}

multiplicarMatriz();

/* 28- Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal; */

function matriz10() {
    let matriz = [];
    for (let i = 0; i < 10; i++) {
        let linha = [];
        for (let j = 0; j < 10; j++) {
            linha.push(Math.floor(Math.random() * 11))
        }
        matriz.push(linha);
    }

    let somaDiagonalSuperior = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = i + 1; j < 10; j++) {
            somaDiagonalSuperior += matriz[i][j];
        }
    }

    let somaDiagonalInferior = 0;
    for (let i = 1; i < 10; i++) {
        for (let j = 0; j < i; j++) {
            somaDiagonalInferior += matriz[i][j];
        }
    }

    console.log("\nMatriz 10x10")
    for (let i = 0; i < 10; i++) {
        console.log(matriz[i].join(" "))
    }
    console.log(`\na) ${somaDiagonalSuperior}`)
    console.log(`\nb) ${somaDiagonalInferior}`)
}

matriz10();

/* 29- Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz. */

function matrizSomas() {
    let matrizM = [];
    for (let i = 0; i < 5; i++) {
        let linha = [];
        for (let j = 0; j < 5; j++) {
            linha.push(Math.floor(Math.random() * 10))
        }
        matrizM.push(linha);
    }

    let somaLinha4 = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (i === 3) {
                somaLinha4 += matrizM[i][j];
            }
        }
    }

    let somaColuna2 = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (j === 1) {
                somaColuna2 += matrizM[i][j];
            }
        }
    }

    let somaDiagonalPrincipal = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (i === j) {
                somaDiagonalPrincipal += matrizM[i][j];
            }
        }
    }

    let somaTodosElementos = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            somaTodosElementos += matrizM[i][j];
        }
    }

    console.log("\nMatriz M 5x5")
    for (let i = 0; i < 5; i++) {
        console.log(matrizM[i].join(" "))
    }
    console.log(`\na) ${somaLinha4}`)
    console.log(`\nb) ${somaColuna2}`)
    console.log(`\nc) ${somaDiagonalPrincipal}`)
    console.log(`\nd) ${somaTodosElementos}`)
}

matrizSomas();

/* 30- Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados. */

function matrizVetores() {
    let matriz = [];
    let vetorSL = Array(5).fill(0);
    let vetorSC = Array(5).fill(0);

    for (let i = 0; i < 5; i++) {
        let linha = [];
        for (let j = 0; j < 5; j++) {
            let valor = Math.floor(Math.random() * 10)
            linha.push(valor)
            vetorSL[i] += valor;
            vetorSC[j] += valor;
        }
        matriz.push(linha);
    }

    console.log("\nMatriz:")
    for (let i = 0; i < 5; i++) {
        console.log(matriz[i].join(" "))
    }

    console.log(`Vetor Soma das Linhas: ${vetorSL}`)
    console.log(`Vetor Soma das Colunas: ${vetorSC}`)
}

matrizVetores();

/* 31- Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo todos
os elementos de V diferentes de A. Mostre os resultados. */

function matrizInteiros() {
    let A = Math.floor(Math.random() * 10)
    let contagem = 0;
    let matrizV = [];
    let matrizX = [];
    for (let i = 0; i < 30; i++) {
        let linha = [];
        for (let j = 0; j < 30; j++) {
            linha.push(Math.floor(Math.random() * 10))
        }
        matrizV.push(linha);
    }

    for (let i = 0; i < 30; i++) {
        let linha = []
        for (let j = 0; j < 30; j++) {
            if (A === matrizV[i][j]) {
                contagem += 1
            }
            else if (A !== matrizV[i][j]) {
                linha.push(matrizV[i][j])
            }
        }
        matrizX.push(linha)
    }
    console.log(`\nNúmero inteiro A: ${A}`)

    console.log("\nMatriz V:")
    for (let i = 0; i < 30; i++) {
        console.log(matrizV[i].join(" "))
    }
    console.log(`\nNúmero de vezes que o valor de A aparece na matriz: ${contagem}`)
    console.log("\nMatriz X:")
    for (let i = 0; i < 30; i++) {
        console.log(matrizX[i].join(" "))
    }
}

matrizInteiros();

/* 32- Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada. */

function matrizModificada() {
    let matrizM = [];
    for (let i = 0; i < 12; i++) {
        let linha = [];
        for (let j = 0; j < 13; j++) {
            linha.push(Math.floor(Math.random() * 10))
        }
        matrizM.push(linha);
    }

    function elementoModulo(linha) {
        let maiorModulo = Math.abs(linha[0]);
        for (let i = 1; i < linha.length; i++) {
            if (Math.abs(linha[i]) > maiorModulo) {
                maiorModulo = Math.abs(linha[i]);
            }
        }
        return maiorModulo;
    }

    let matrizNova = []
    for (let i = 0; i < 12; i++) {
        let linhaNova = []
        let modulo = elementoModulo(matrizM[i])
        for (let j = 0; j < 13; j++) {
            linhaNova.push((matrizM[i][j] / modulo).toFixed(2));
        }
        matrizNova.push(linhaNova)
    }

    console.log("\nMatriz Original:")
    for (let i = 0; i < 12; i++) {
        console.log(matrizM[i].join(" "))
    }

    console.log("\nMatriz Modificada pelo módulo:")
    for (let i = 0; i < 12; i++) {
        console.log(matrizNova[i].join(" "))
    }
}

matrizModificada();


/* 33- Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária. */

function matrizDiagonais() {
    let matriz = [];
    for (let i = 0; i < 3; i++) {
        let linha = [];
        for (let j = 0; j < 3; j++) {
            linha.push(Math.floor(Math.random() * 10))
        }
        matriz.push(linha);
    }

    console.log("\nMatriz:")
    for (let i = 0; i < 3; i++) {
        console.log(matriz[i].join(" "))
    }

    let somaDiagonalSecundaria = 0;
    for (let i = 0; i < matriz.length; i++) {
        somaDiagonalSecundaria += matriz[i][matriz.length - 1 - i]
    }

    let mediaDiagonalSecundaria = (somaDiagonalSecundaria / matriz.length).toFixed(2)
    console.log(`\nMédia da diagonal secundária: ${mediaDiagonalSecundaria}`)

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (i === j) {
                matriz[i][j] = matriz[i][j] * mediaDiagonalSecundaria
            }
        }
    }

    console.log("\nNova Matriz:")
    for (let i = 0; i < 3; i++) {
        console.log((matriz[i]).join(" "))
    }

}
matrizDiagonais();

/* 34- Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações. */

function matrizReais() {
    let matrizR = [];
    for (let i = 0; i < 50; i++) {
        let linha = [];
        for (let j = 0; j < 50; j++) {
            linha.push(Math.floor(Math.random() * 10))
        }
        matrizR.push(linha);
    }

    console.log("\nMatriz:")
    for (let i = 0; i < 50; i++) {
        console.log((matrizR[i]).join(" "))
    }

    for (let i = 0; i < 50; i++) {
        let elementoDiagonalPrincipal = matrizR[i][i];
        for (let j = 0; j < 50; j++) {
            matrizR[i][j] *= elementoDiagonalPrincipal
        }
    }

    console.log("\nNova Matriz:")
    for (let i = 0; i < 50; i++) {
        console.log((matrizR[i]).join(" "))
    }
}

matrizReais();

/* 35- Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias. */

function algoritmo() {
    let vetorPar = [];
    let vetorImpar = [];
    let quantidade = 0;

    while (quantidade < 30) {
        let valores = Math.ceil((Math.random() * 99) + 1);

        if (valores % 2 === 0) {
            vetorPar.push(valores)
            if (vetorPar.length === 5) {
                console.log(`\nVetor Par: ${vetorPar}`)
            }
        } else {
            vetorImpar.push(valores)
            if (vetorImpar.length === 5) {
                console.log(`\nVetor Ímpar: ${vetorImpar}`)
            }
        }
        quantidade++
    }

    console.log(`\nVetor de numeros pares: ${vetorPar}`)
    console.log(`\nVetor de números ímpares: ${vetorImpar}`)
}

algoritmo();

/* 36- Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR". */

function loteria() {
    function numerosUnicos() {
        let numeros = new Set();
        while (numeros.size < 13) {
            numeros.add(Math.floor(Math.random() * 60) + 1);
        }
        return Array.from(numeros)
    }

    let gabarito = numerosUnicos();

    console.log(`Gabarito: ${gabarito}`);

    for (let i = 1; i < 101; i++) {
        let cartaoAposta = i;
        let cartaoApostador = numerosUnicos();


        let numerosCertos = 0;
        for (let j = 0; j < 13; j++) {
            if (gabarito.includes(cartaoApostador[j])) {
                numerosCertos++;
            }
        }
        console.log(`Apostador ${cartaoAposta} - Numeros do cartão: ${cartaoApostador} - ${numerosCertos} acertos`);

        if (numerosCertos === 13) {
            console.log(`Parabéns, o apostador ${cartaoAposta} foi o GANHADOR!!`)
        }
    }
}

loteria();

/* 37- Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário. */

function provaAlunos() {
    const opcoes = ['A', 'B', 'C', 'D']
    let vetorRespostasR = []
    let questoes = 0

    while (questoes < 20) {
        let opcao = opcoes[Math.floor(Math.random() * opcoes.length)]
        vetorRespostasR.push(opcao)
        questoes++;
    }

    console.log(`Gabarito da prova: ${vetorRespostasR}`);


    for (let i = 1; i < 51; i++) {
        let aluno = i;
        let provaAluno = [];

        for (let j = 0; j < 20; j++) {
            let opcao = opcoes[Math.floor(Math.random() * opcoes.length)]
            provaAluno.push(opcao);
        }

        let respostasCertas = 0;
        for (let j = 0; j < 20; j++) {
            if (provaAluno[j] === vetorRespostasR[j]) {
                respostasCertas++;
            }
        }
        console.log(`Matrícula ${aluno} - Respostas: ${provaAluno} - ${respostasCertas} respostas certas`);

        if (respostasCertas >= 12) {
            console.log("APROVADO")
        } else {
            console.log("REPROVADO")
        }
    }
}

provaAlunos();

/* 38- Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor. */

function vetorLeitura() {

    function vetor() {

        let vetorL = []
        for (let i = 0; i < 6; i++) {
            vetorL.push(Math.floor(Math.random() * 10) + 1)
        }
        return vetorL
    }

    let vetorL = vetor()
    let somaElementos = vetorL.reduce((a, b) => a + b, 0);
    let produtoElementos = vetorL.reduce((a, b) => a * b, 1);
    let mediaElementos = somaElementos / vetorL.length;
    let elementosOrdenados = [...vetorL].sort((a, b) => a - b)

    console.log(`1) Soma dos elementos: ${somaElementos}`)
    console.log(`2) Produto dos elementos: ${produtoElementos}`)
    console.log(`3) Média dos elementos: ${mediaElementos.toFixed(2)}`)
    console.log("4) Elementos em ordem crescente: ", elementosOrdenados)
    console.log("5) vetor de 6 posições: ", vetorL)
}

vetorLeitura();

/* 39- Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B. */

function vetores() {
    let vetorA = []
    let vetorB = []
    for (let i = 0; i < 100; i++) {
        vetorA.push(Math.floor(Math.random() * 100) - 50)
    }

    for (let i = 0; i < 100; i++) {
        if (vetorA[i] > 0) {
            vetorB.push(vetorA[i])
        }
    }

    console.log("Vetor A: ", vetorA)
    console.log("Vetor B: ", vetorB)
}

vetores();

/* 40- Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.) */

function loto() {

    function numerosUnicos() {
        let numeros = new Set();
        while (numeros.size < 5) {
            numeros.add(Math.floor(Math.random() * 100) + 1);
        }
        return Array.from(numeros)
    }

    let vetor5 = numerosUnicos();

    console.log(`Resultado da Loto: ${vetor5}`)

    for (let i = 0; i < 50; i++) {
        let apostadores = i
        let apostas = numerosUnicos()

        let numerosCertos = 0;
        for (let j = 0; j < 5; j++) {
            if (vetor5.includes(apostas[j])) {
                numerosCertos++;
            }
        }
        console.log(`Apostador ${apostadores}: Números apostados: ${apostas} - numeros acertados: ${numerosCertos}`)

        if (numerosCertos === 5) {
            console.log("Ganhador")
        }
    }
}

loto();

/* 41- Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade. */

function pessoas() {

    const pessoa = {
        nome: prompt("Informe o nome: "),
        idade: parseInt(prompt("Informe a idade: "))
    }

    console.log(`${pessoa.nome} possui ${pessoa.idade} anos.\n`)

    pessoa.email = prompt("Qual o seu e-mail? ")

    console.log(pessoa)
}

pessoas();

/* 42- Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays. */

function produtos() {

    const produto = {
        nome: 'iPad',
        valor: 5.500,
        caracteristicas: ["prata", "wi-fi", "128GB", "8ª geração"],
        tags: ['eletrônicos', 'tablet'],
        estoque: 100
    };

    function novoObjeto(obj) {
        const novoObjeto = {};
        for (const propsArray in obj) {
            if (Array.isArray(obj[propsArray])) {
                novoObjeto[propsArray] = obj[propsArray];
            }
        }
        return novoObjeto;
    }

    const resultado = novoObjeto(produto)
    console.log(resultado)
}

produtos();

/* 43- Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos. */

function newObject() {

    const objeto1 = {
        nome: 'iPad',
        marca: 'Apple',
        valor: 5500,
        caracteristicas: ["prata", "wi-fi", "128GB", "8ª geração", "IOS 17"],
        tags: ['eletrônicos', 'tablet'],
        estoque: 100,
        disponibilidade: 'imediata'
    }

    const objeto2 = {
        nome: 'iPhone',
        valor: 8600,
        caracteristicas: ["gold", "5G + wi-fi", "256GB", "12ª geração", "IOS 17"],
        tags: ['eletrônicos', 'celular'],
        disponibilidade: 'imediata'
    }

    const novoObjeto = { ...objeto1, ...objeto2 }

    console.log(novoObjeto)
}

newObject();

/* 44- Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número. */

function quantidadeStrings() {

    const produto = {
        nome: 'iPad',
        marca: 'Apple',
        valor: 5.500,
        caracteristicas: ["prata", "wi-fi", "128GB", "8ª geração"],
        tags: ['eletrônicos', 'tablet'],
        estoque: 100,
        disponibilidade: 'imediata'
    }

    function contagem(object) {

        let quantidade = 0;

        for (const props in object) {
            if (typeof object[props] === 'string') {
                quantidade++;
            }
        }
        return quantidade;
    }

    const numeroDeStrings = contagem(produto)
    console.log(`O número de strings dentro do objeto é: ${numeroDeStrings}`)
}

quantidadeStrings();

/* 45- Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array. */

function arrayDeStrings() {

    const array = ['Iron Man', 'Hulk', 'Captain America', 'Hulk', 'Hulk', 'Thor', 'Iron Man', 'Thor', 'Hawkeye', 'Captain America', 'Iron Man', 'Black Widow', 'Thor', 'Nick Fury']

    const objeto = {};
    for (const strings of array) {
        if (objeto[strings]) {
            objeto[strings]++;
        } else {
            objeto[strings] = 1;
        }
    }

    console.log(objeto)

}

arrayDeStrings();

/* 46- Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor. */

function arrayDeObjetos() {

    const resumoVendas = [
        {
            vendedor: "Miguel",
            valor: 80000

        },
        {
            vendedor: "Denis",
            valor: 500
        },
        {
            vendedor: "Flavio",
            valor: 50000

        },
        {
            vendedor: "Miguel",
            valor: 15000
        },
        {
            vendedor: "Alessandra",
            valor: 20000

        },
        {
            vendedor: "Pedro",
            valor: 35000
        },
        {
            vendedor: "Rafaella",
            valor: 24000

        },
        {
            vendedor: "Flavio",
            valor: 15000
        },
        {
            vendedor: "Alessandra",
            valor: 12000

        },
        {
            vendedor: "Denis",
            valor: 100
        },
        {
            vendedor: "Rafaella",
            valor: 10000

        },
        {
            vendedor: "Miguel",
            valor: 1000
        },
        {
            vendedor: "Pedro",
            valor: 2000

        },
        {
            vendedor: "Pedro",
            valor: 5000
        },
        {
            vendedor: "Rafaella",
            valor: 24000

        },
        {
            vendedor: "Miguel",
            valor: 45000
        },
    ]

    const somaDeVendas = resumoVendas.reduce((somatorio, vendas) => {
        const { vendedor, valor } = vendas;
        if (!somatorio[vendedor]) {
            somatorio[vendedor] = 0;
        }
        somatorio[vendedor] += valor
        return somatorio;
    }, {});

    console.log(somaDeVendas)

}

arrayDeObjetos();

/* 47- Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados. */

function transformer() {
    const objeto = { a: 10, b: 28, c: 36, d: 42 }

    function multiplicar(objeto) {
        const novoObjeto = {};
        for (let chave in objeto) {
            novoObjeto[chave] = objeto[chave] * 5;
        }
        return novoObjeto;
    }

    console.log("Objeto inicial:", objeto)

    const objetoMultiplicado = multiplicar(objeto);
    console.log("\nObjeto multiplicado por 5:", objetoMultiplicado)
}

transformer();

/* 48- Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades. */

function inventarios() {
    const inventarioLojaA = [
        {
            "caneta": 300,
        },
        {
            "lapis": 100,
        },
        {
            "borracha": 50,
        },
        {
            "cola": 20,
        },
        {
            "estojo": 5,
        },

    ]
    const inventarioLojaB = [
        {
            "caneta": 50,
        },
        {
            "papel": 1000,
        },
        {
            "mochila": 10,
        },
        {
            "estojo": 40,
        },
        {
            "estojo": 5,
        },
        {
            "regua": 17,
        },
        {
            "tesoura": 6,
        },
        {
            "caderno": 80
        }

    ]

    const inventariosCombinados = (inventarioLojaA, inventarioLojaB) => {
        const novoInventario = {};

        inventarioLojaA.forEach(item => {
            for (const chave in item) {
                novoInventario[chave] = (novoInventario[chave] || 0) + item[chave];
            }
        });

        inventarioLojaB.forEach(item => {
            for (const chave in item) {
                novoInventario[chave] = (novoInventario[chave] || 0) + item[chave];
            }
        });

        return novoInventario;
    }

    const inventario = inventariosCombinados(inventarioLojaA, inventarioLojaB)
    console.log(inventario)
}

inventarios();


/* 49- Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria. */

function financialTransactions() {

    const operations = [
        {
            "id": 1,
            "valor": 100,
            "data": "31/07",
            "categoria": "compra",
        },
        {
            "id": 2,
            "valor": 1000,
            "data": "1/07",
            "categoria": "venda",
        },
        {
            "id": 3,
            "valor": 400,
            "data": "31/10",
            "categoria": "emprestimo",
        },
        {
            "id": 4,
            "valor": 700,
            "data": "21/02",
            "categoria": "venda",
        },
        {
            "id": 5,
            "valor": 1500,
            "data": "09/09",
            "categoria": "venda",
        },
        {
            "id": 6,
            "valor": 500,
            "data": "1/6",
            "categoria": "compra",
        },
    ]


    const transactions = operations.reduce((sum, sales) => {
        const { categoria, valor } = sales;
        if (!sum[categoria]) {
            sum[categoria] = {
                transacoes: [],
                subtotal: 0
            };
        }

        sum[categoria].transacoes.push(sales);
        sum[categoria].subtotal += valor

        return sum;
    }, {});

    console.log(JSON.stringify(transactions, null, 2));
    return transactions;
}

financialTransactions();

/* 50- Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
nomeCliente.
2. Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
disponíveis em uma cidade específica.
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
aumentar o número de quartos disponiveis no hotel correspondente.
○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
cliente.
3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
○ As reservas devem ser identificadas por um ID único e associadas a um
único hotel.
4. Desafios Adicionais (Opcionais):
○ Implementar uma função de check-in e check-out que atualize a
disponibilidade de quartos.
○ Gerar relatórios de ocupação para um hotel.
○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
avaliações dentro do objeto do hotel. */

function SistemaHoteleiro() {

    const hoteis = [];
    const reservas = [];

    function adicionarHotel() {
        let hotel = {

            id: hoteis.length + 1,
            nome: prompt("Nome do Hotel: "),
            cidade: prompt("Cidade do Hotel: "),
            numeroQuartos: parseInt(prompt("Número de quartos do Hotel: ")),
            quartosDisponiveis: parseInt(prompt("Número de quartos disponíveis: ")),
            estrelas: [],
        };
        hoteis.push(hotel)
        console.log("Hotel adicionado com sucesso")
    }

    function buscarHoteis(cidade) {
        let hoteisPorCidade = hoteis.filter(hotel => hotel.cidade.toLowerCase() === cidade.toLowerCase());
        if (hoteisPorCidade.length > 0) {
            let mensagem = `Hotéis encontrados em ${cidade}:\n`;
            hoteisPorCidade.forEach(hotel => {
                mensagem += `Nome: ${hotel.nome}\nQuartos disponíveis: ${hotel.quartosDisponiveis}`;
            });
            console.log(mensagem)
        } else {
            console.log(`Nenhum hotel encontrado na cidade de ${cidade}`)
        }
    }

    function fazerReserva() {
        let nomeHotel = prompt('Informe o nome do Hotel para reserva: ');

        let hotel = hoteis.find(hotel => hotel.nome.toLowerCase() === nomeHotel.toLowerCase());
        if (hotel) {
            if (hotel.quartosDisponiveis > 0) {
                let reserva = {

                    idReserva: reservas.length + 1,
                    idHotel: hotel.id,
                    nomeCliente: prompt("Informe o nome do cliente: ")
                };
                reservas.push(reserva)
                hotel.quartosDisponiveis--;
                console.log(`Reserva feita com sucesso para Hotel ${hotel.nome}!\nCódigo da reserva: ${reserva.idReserva}`)
            } else {
                console.log("Não há quartos disponíveis neste hotel.")
            }
        } else {
            console.log("Hotel não encontrado!")
        }
    }

    function cancelarReserva() {
        let codigoReserva = parseInt(prompt("Informe o código da reserva que deseja cancelar: "));
        let nomeCliente = prompt("Informe o nome do cliente: ");

        let reserva = reservas.find(reserva => reserva.idReserva === codigoReserva);

        if (reserva && reserva.nomeCliente.toLowerCase() === nomeCliente.toLowerCase()) {
            let hotel = hoteis.find(hotel => hotel.id === reserva.idHotel)
            hotel.quartosDisponiveis++;
            let indiceReserva = reservas.findIndex(reserva => reserva.idReserva === codigoReserva)
            reservas.splice(indiceReserva, 1)
            console.log("Reserva cancelada com sucesso!!")
        } else {
            console.log("Nenhuma reserva encontrada com esse código.")
        }
    }

    function listarReservas() {

        if (reservas.length > 0) {
            let mensagem = "Reservas:\n"
            reservas.forEach(reserva => {
                let hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
                mensagem += `Código da reserva: ${reserva.idReserva} - Hotel: ${hotel.nome} - Cidade: ${hotel.cidade} - Cliente: ${reserva.nomeCliente}\n`;
            });
            console.log(mensagem);
        } else {
            console.log("Nenhuma reserva encontrada.")
        }
    }

    function checkIn() {
        let codigoReserva = parseInt(prompt("Informe o código da reserva para realizar o check-In: "));
        let reserva = reservas.find(reserva => reserva.idReserva === codigoReserva);
        if (reserva) {
            console.log("Check-In realizado com sucesso!!")
        } else {
            console.log("Reserva não encontrada!")
        }
    }

    function checkOut() {
        let codigoReserva = parseInt(prompt("Informe o código da reserva que deseja cancelar: "));
        let reserva = reservas.find(reserva => reserva.idReserva === codigoReserva);

        if (reserva) {
            let hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
            hotel.quartosDisponiveis++;
            let indiceReserva = reservas.findIndex(reserva => reserva.idReserva === codigoReserva)
            reservas.splice(indiceReserva, 1)
            console.log("Check-Out realizado com sucesso!!")
            let avaliarHotel;
            do {
                avaliarHotel = parseInt(prompt("Numa escala de 1 a 5, onde 5 você está muito satisfeito, que nota você dá para sua estadia? "))
                hotel.estrelas.push(avaliarHotel);
            } while (avaliarHotel < 1 || avaliarHotel > 5)
            console.log("Muito obrigado por avaliar a gente!")
        } else {
            console.log("Reserva não encontrada!")
        }
    }

    function relatorio() {
        let relatorioHotel = prompt("Informe o nome do hotel a que deseja um relatório: ");
        let hotel = hoteis.find(hotel => hotel.nome.toLowerCase() === relatorioHotel.toLowerCase());
        if (hotel) {
            let totalReservas = reservas.filter(reserva => reserva.idHotel === hotel.id).length;
            console.log(`Hotel: ${hotel.nome} - Cidade: ${hotel.cidade} - Número de quartos: ${hotel.numeroQuartos} - Quartos reservados: ${totalReservas} - Quartos disponíveis: ${hotel.quartosDisponiveis}`)
        } else {
            console.log("Hotel não encontrado!")
        }
    }

    return {
        adicionarHotel,
        buscarHoteis,
        fazerReserva,
        cancelarReserva,
        listarReservas,
        checkIn,
        checkOut,
        relatorio,
    };
}

let sistemaDeHoteis = SistemaHoteleiro();
sistemaDeHoteis.adicionarHotel();
sistemaDeHoteis.buscarHoteis("Rio de Janeiro");
sistemaDeHoteis.fazerReserva();
sistemaDeHoteis.fazerReserva();
sistemaDeHoteis.cancelarReserva();
sistemaDeHoteis.listarReservas();
sistemaDeHoteis.checkIn();
sistemaDeHoteis.checkOut();
sistemaDeHoteis.relatorio();
