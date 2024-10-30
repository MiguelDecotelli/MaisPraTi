import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        System.out.println("EXERCÍCIO 1");

        Produto1 produto = new Produto1("Notebook Dell Inspiron", 3500.00, 10);
        System.out.println(produto);
        produto.setPrice(3700.00);
        produto.setAmount(12);
        System.out.println("\nApós atualização da quantidade e do estoque:");
        System.out.println(produto);

        produto.setPrice(-500.00);
        produto.setAmount(-3);

        System.out.println("EXERCÍCIO 2");

        Produto2 produto2 = new Produto2("iPad", 3500.00, 10);

        System.out.println(produto2);
        System.out.println("\nApós aplicação de descontos: 20 e 60%");


        try {
            produto2.applyDiscount(20);
            System.out.println(produto2 + "\n");
            produto2.applyDiscount(60);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }

        System.out.println("EXERCÍCIO 3");

        Funcionario gerente = new Gerente("Jaques", 18000.00);
        Funcionario desenvolvedor = new Desenvolvedor("Miguel", 12000.00);

        System.out.println(gerente);
        System.out.println(desenvolvedor);

        System.out.println("EXERCÍCIO 4");

        Funcionario2 gerente2 = new Gerente2("Miguel", 23000.00);
        Funcionario2 desenvolvedor2 = new Desenvolvedor2("Flávio", 15000.00);

        System.out.println(gerente2);
        System.out.println(desenvolvedor2);

        gerente2.trabalhar();
        desenvolvedor2.trabalhar();

        System.out.println("EXERCÍCIO 5");

        MeioTransporte[] meiosDeTransporte = {
                new Carro(),
                new Bicicleta(),
                new Trem()
        };

        for (MeioTransporte transporte : meiosDeTransporte) {
            transporte.accelerate();
            transporte.brake();
            System.out.println();
        }

        System.out.println("EXERCÍCIO 6");

        List<Animal> animais = new ArrayList<>();
        animais.add(new Cachorro());
        animais.add(new Gato());
        animais.add(new Vaca());

        for (Animal animal : animais) {
            animal.emitirSom();
        }

        System.out.println("EXERCÍCIO 7");

        FormaPagamento cartaoCredito = new CartaoCredito();
        FormaPagamento boleto = new Boleto();
        FormaPagamento PIX = new PIX();

        cartaoCredito.processPayment(850.00);
        boleto.processPayment(250.00);
        PIX.processPayment(180.00);

        System.out.println("EXERCÍCIO 8");

        GestaoFuncionarios gestao = new GestaoFuncionarios();

        Funcionario3 gerente3 = new Gerente3("Andressa", 10000);
        Funcionario3 desenvolvedor3 = new Desenvolvedor3("Dênis", 7000);
        Funcionario3 estagiario = new Estagiario("Pedro", 3000);

        gestao.addEmployee(gerente3);
        gestao.addEmployee(desenvolvedor3);
        gestao.addEmployee(estagiario);

        System.out.printf("Total da folha de pagamento: R$%.2f%n", gestao.calcularFolhaPagamento());

        Funcionario3 novoDesenvolvedor = new Desenvolvedor3(estagiario.getName(), estagiario.calculateSalary());
        gestao.promoteEmployee(estagiario, novoDesenvolvedor);

        System.out.printf("Total da folha de pagamento após promoção: R$%.2f%n", gestao.calcularFolhaPagamento());



    }
}
