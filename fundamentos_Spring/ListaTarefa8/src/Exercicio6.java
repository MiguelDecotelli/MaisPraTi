//6. Polimorfismo com Classes Abstratas
//○ Objetivo: Crie uma classe abstrata Animal com um método abstrato
//emitirSom(). Crie subclasses Cachorro, Gato e Vaca, cada uma
//implementando emitirSom() de maneira específica. Crie uma lista de
//Animal no método principal e adicione instâncias de cada subclasse. Itere
//sobre a lista e invoque o método emitirSom() para cada animal,
//demonstrando o polimorfismo.

abstract class Animal {
    public abstract void emitirSom();
}

class Cachorro extends Animal {
    @Override
    public void emitirSom() {
        System.out.println("O cachorro está latindo: Au Au!");
    }
}

class Gato extends Animal {
    @Override
    public void emitirSom() {
        System.out.println("O gato está miando: Miau!");
    }
}

class Vaca extends Animal {
    @Override
    public void emitirSom() {
        System.out.println("A vaca está mugindo: Muuu!");
    }
}
