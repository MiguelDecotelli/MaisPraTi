//5. Polimorfismo com Interfaces
//○ Objetivo: Crie uma interface MeioTransporte com métodos acelerar() e
//frear(). Implemente essa interface em classes Carro, Bicicleta e Trem.
//No método principal, crie um array de MeioTransporte e percorra-o
//chamando acelerar() e frear() para cada objeto. Utilize polimorfismo
//para que cada tipo de transporte implemente acelerar() e frear() de
//maneira diferente.

interface MeioTransporte {
    void accelerate();
    void brake();
}

class Carro implements MeioTransporte {

    @Override
    public void accelerate() {
        System.out.println("O carro está acelerando.");
    }

    @Override
    public void brake() {
        System.out.println("O carro está freando.");
    }
}

class Bicicleta implements MeioTransporte {

    @Override
    public void accelerate() {
        System.out.println("A bicicleta está acelerando com pedaladas.");
    }

    @Override
    public void brake() {
        System.out.println("A bicicleta está freando com os freios de mão.");
    }
}

class Trem implements MeioTransporte {

    @Override
    public void accelerate() {
        System.out.println("O trem está ganhando velocidade a medida que queima mais lenha.");
    }

    @Override
    public void brake() {
        System.out.println("O trem está freando para parar na próxima estação.");
    }
}
