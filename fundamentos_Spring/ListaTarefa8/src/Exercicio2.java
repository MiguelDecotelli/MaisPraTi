//2. Melhorando a Classe com Validação
//○ Objetivo: Extenda a classe Produto para incluir um método
//aplicarDesconto(double porcentagem) que reduz o preço do produto.
//Valide para garantir que o desconto não possa ser maior que 50%.
//Implemente a lógica que lança uma exceção se o desconto for inválido.

class Produto2 {
    private String name;
    private double price;
    private int amount;

    public Produto2(String name, double price, int amount) {
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

    public int getAmount() {
        return amount;
    }

    public void setName(String name) {
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

    public void applyDiscount(double percentage) throws IllegalArgumentException {
        if (percentage < 0 || percentage > 50) {
            throw new IllegalArgumentException("Desconto inválido. A percentage deve estar entre 0% e 50%.");
        }
        double discount = price * (percentage / 100);
        price -= discount;
        System.out.println("Desconto de " + percentage + "% aplicado. Novo preço: " + price);
    }

    @Override
    public String toString() {
        return "Produto [Nome=" + name + ", Preço=" + price + ", Quantidade em Estoque=" + amount + "]";
    }
}
