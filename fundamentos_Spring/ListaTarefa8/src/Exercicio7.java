//7. Abstração em um Sistema de Pagamentos
//○ Objetivo: Crie uma classe abstrata FormaPagamento com métodos
//abstratos processarPagamento(double valor) e validarPagamento().
//Crie classes concretas CartaoCredito, Boleto e Pix que herdam de
//FormaPagamento e implementam os métodos abstratos. Adicione lógica de
//validação específica para cada forma de pagamento e simule um sistema
//que utilize diferentes formas de pagamento.

abstract class FormaPagamento {
    public abstract boolean validatePayment();
    public abstract void processPayment(double value);
}

class CartaoCredito extends FormaPagamento {

    @Override
    public boolean validatePayment() {
        System.out.println("Validando pagamento com Cartão de Crédito...");
        return true;
    }

    @Override
    public void processPayment(double value) {
        if (validatePayment()) {
            System.out.printf("Pagamento de R$%.2f processado com Cartão de Crédito.%n.", value);
        } else {
            System.out.println("Falha na validação do pagamento com Cartão de Crédito.");
        }
    }
}

class Boleto extends FormaPagamento {

    @Override
    public boolean validatePayment() {
        System.out.println("Validando pagamento com Boleto...");
        return true;
    }

    @Override
    public void processPayment(double value) {
        if (validatePayment()) {
            System.out.printf("Pagamento de R$%.2f processado através de boleto.%n.", value);
        } else {
            System.out.println("Falha na validação do pagamento com Boleto.");
        }
    }
}

class PIX extends FormaPagamento {

    @Override
    public boolean validatePayment() {
        System.out.println("Validando pagamento com Pix...");
        return true;
    }

    @Override
    public void processPayment(double value) {
        if (validatePayment()) {
            System.out.printf("Pagamento de R$%.2f processado via PIX.%n.", value);
        } else {
            System.out.println("Falha na validação do pagamento com PIX.");
        }
    }
}
