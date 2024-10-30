//8. Sistema de Gestão de Funcionários
//○ Objetivo: Crie um sistema que gerencie diferentes tipos de funcionários
//(Gerente, Desenvolvedor, Estagiario). Cada tipo de funcionário deve ter
//uma maneira diferente de calcular o salário e o bônus. Utilize uma
//combinação de herança, polimorfismo e encapsulamento para estruturar
//as classes. Implemente um método calcularFolhaPagamento que itera
//sobre todos os funcionários e calcula o total de salários e bônus. Adicione
//novas funcionalidades, como a possibilidade de promover um funcionário,
//o que altera seu tipo e os cálculos de salário e bônus.

import java.util.ArrayList;
import java.util.List;

abstract class Funcionario3 {
    private String name;
    protected double baseSalary;

    public Funcionario3(String name, double baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    public String getName() {
        return name;
    }

    public abstract double calculateSalary();
    public abstract double calculateBonus();
}

class Gerente3 extends Funcionario3 {
    public Gerente3(String name, double baseSalary) {
        super(name, baseSalary);
    }

    @Override
    public double calculateSalary() {
        return baseSalary * 1.5;
    }

    @Override
    public double calculateBonus() {
        return baseSalary * 0.2;
    }
}

class Desenvolvedor3 extends Funcionario3 {
    public Desenvolvedor3(String name, double baseSalary) {
        super(name, baseSalary);
    }

    @Override
    public double calculateSalary() {
        return baseSalary; // Salário base para desenvolvedor
    }

    @Override
    public double calculateBonus() {
        return baseSalary * 0.1; // Bônus de 10% para desenvolvedor
    }
}

class Estagiario extends Funcionario3 {
    public Estagiario(String name, double baseSalary) {
        super(name, baseSalary);
    }

    @Override
    public double calculateSalary() {
        return baseSalary * 0.8;
    }

    @Override
    public double calculateBonus() {
        return 0;
    }
}

class GestaoFuncionarios {
    private List<Funcionario3> funcionarios = new ArrayList<>();

    public void addEmployee(Funcionario3 funcionario) {
        funcionarios.add(funcionario);
    }

    public void promoteEmployee(Funcionario3 funcionario, Funcionario3 novoCargo) {
        funcionarios.remove(funcionario);
        funcionarios.add(novoCargo);
        System.out.println(funcionario.getName() + " promovido a " + novoCargo.getClass().getSimpleName());
    }

    public double calcularFolhaPagamento() {
        double total = 0;
        for (Funcionario3 funcionario : funcionarios) {
            total += funcionario.calculateSalary() + funcionario.calculateBonus();
        }
        return total;
    }
}
