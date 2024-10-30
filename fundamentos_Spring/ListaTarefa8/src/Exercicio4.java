//4. Sobrescrita de Métodos
//○ Objetivo: Na classe Funcionario, crie um método trabalhar(), que
//imprime uma mensagem genérica sobre o trabalho realizado. Nas
//subclasses Gerente e Desenvolvedor, sobrescreva esse método para
//especificar o tipo de trabalho realizado por cada um. Utilize a anotação
//@Override e explore como ela ajuda a garantir que a sobrescrita foi feita
//corretamente.

class Funcionario2 {
    protected String nome;
    protected double salario;

    public Funcionario2(String nome, double salario) {
        this.nome = nome;
        this.salario = salario;
    }

    public String getNome() {
        return nome;
    }

    public double getSalario() {
        return salario;
    }

    public void trabalhar() {
        System.out.println(nome + " está trabalhando.");
    }

    public double calcularBonus() {
        return 0;
    }

    @Override
    public String toString() {
        return "Funcionario [Nome=" + nome + ", Salário=" + salario + "]";
    }
}

class Gerente2 extends Funcionario2 {

    public Gerente2(String nome, double salario) {
        super(nome, salario);
    }

    @Override
    public void trabalhar() {
        System.out.println(nome + " está gerenciando a equipe e definindo estratégias.");
    }

    @Override
    public double calcularBonus() {
        return salario * 0.20;
    }

    @Override
    public String toString() {
        return "Gerente [Nome=" + nome + ", Salário=" + salario + ", Bônus=" + calcularBonus() + "]";
    }
}

class Desenvolvedor2 extends Funcionario2 {

    public Desenvolvedor2(String nome, double salario) {
        super(nome, salario);
    }

    @Override
    public void trabalhar() {
        System.out.println(nome + " está desenvolvendo código e solucionando problemas.");
    }

    @Override
    public double calcularBonus() {
        return salario * 0.10;
    }

    @Override
    public String toString() {
        return "Desenvolvedor [Nome=" + nome + ", Salário=" + salario + ", Bônus=" + calcularBonus() + "]";
    }
}
