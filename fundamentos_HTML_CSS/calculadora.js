function inserir(valor) {
    if (document.formulario.tela.value.length < 14) {
        document.formulario.tela.value += valor;
    }
}

function limpar() {
    document.formulario.tela.value = '';
}

function deletar() {
    let expressao = document.formulario.tela.value;
    document.formulario.tela.value = expressao.substring(0, expressao.length - 1);
}

function calcular() {
    let resultado = document.formulario.tela.value;
    if (resultado) {
        document.formulario.tela.value = eval(resultado);
    }
}

