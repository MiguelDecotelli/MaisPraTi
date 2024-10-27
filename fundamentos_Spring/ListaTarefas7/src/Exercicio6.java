//6. Crie um simulador de fila de atendimento em um banco. Utilize uma fila para gerenciar
//os clientes que aguardam atendimento e implemente a lógica para chamar o próximo
//cliente.

import java.util.LinkedList;
import java.util.Queue;

class BankQueue {
    private Queue<String> queue;

    public BankQueue() {
        this.queue = new LinkedList<>();
    }

    public void addCustomer(String customerName) {
        queue.offer(customerName);
        System.out.println(customerName + " entrou na fila.");
    }

    public void callNextCustomer() {
        if (!queue.isEmpty()) {
            String nextCustomer = queue.poll();
            System.out.println("Chamando " + nextCustomer + " para atendimento.");
        } else {
            System.out.println("Nenhum cliente na fila.");
        }
    }

    public void showQueue() {
        if (queue.isEmpty()) {
            System.out.println("Nenhum cliente na fila.");
        } else {
            System.out.println("Clientes na fila: " + queue);
        }
    }
}