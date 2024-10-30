//3. Criação de uma Hierarquia de Classes
//○ Objetivo: Crie uma classe Funcionario com atributos nome e salario. Em
//seguida, crie duas subclasses: Gerente e Desenvolvedor. Adicione um
//método calcularBonus que retorna um valor diferente para cada tipo de
//funcionário (por exemplo, 20% do salário para Gerente e 10% para
//Desenvolvedor). Utilize protected para permitir que as subclasses
//acessem os atributos da classe base de forma segura.

class Funcionario {
    protected String name;
    protected double salary;

    public Funcionario(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public double getSalary() {
        return salary;
    }

    public double calculateBonus() {
        return 0;
    }

    @Override
    public String toString() {
        return "Funcionario [Nome=" + name + ", Salário=" + salary + "]";
    }
}

class Gerente extends Funcionario {

    public Gerente(String name, double salary) {
        super(name, salary);
    }

    @Override
    public double calculateBonus() {
        return salary * 0.20;
    }

    @Override
    public String toString() {
        return "Gerente [Nome=" + name + ", Salário=" + salary + ", Bônus=" + calculateBonus() + "]";
    }
}

class Desenvolvedor extends Funcionario {

    public Desenvolvedor(String name, double salary) {
        super(name, salary);
    }

    @Override
    public double calculateBonus() {
        return salary * 0.10;
    }

    @Override
    public String toString() {
        return "Desenvolvedor [Nome=" + name + ", Salário=" + salary + ", Bônus=" + calculateBonus() + "]";
    }
}
