//1. Criação de uma Classe Simples
//○ Objetivo: Crie uma classe Produto que represente um produto de uma
//loja. A classe deve ter atributos privados nome, preço e quantidade em
//estoque. Implemente métodos públicos para acessar e modificar esses
//atributos. Garanta que o preço e a quantidade não possam ser negativos.

class Produto1 {
    private String name;
    private double price;
    private int amount;

    public Produto1(String name, double price, int amount) {
        this.name = name;
        setPrice(price);
        setAmount(amount);
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public int getQuantidadeEmEstoque() {
        return amount;
    }

    public void setNome(String name) {
        this.name = name;
    }

    public void setPrice(double price) {
        if (price >= 0) {
            this.price = price;
        } else {
            System.out.println("Erro: O preço não pode ser negativo.");
        }
    }

    public void setAmount(int amount) {
        if (amount >= 0) {
            this.amount = amount;
        } else {
            System.out.println("Erro: A quantidade em estoque não pode ser negativa.");
        }
    }

    @Override
    public String toString() {
        return "Produto [Nome=" + name + ", Preço=" + price + ", Quantidade em Estoque=" + amount + "]";
    }
}
