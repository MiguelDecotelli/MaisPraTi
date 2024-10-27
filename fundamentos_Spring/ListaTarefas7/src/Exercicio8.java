//8. Implemente uma fila que simula a fila de processos prontos para execução em um
//sistema operacional. Permita que novos processos sejam adicionados e que o processo
//mais antigo seja removido para execução.

import java.util.LinkedList;
import java.util.Queue;

class Process {
    private String processId;
    private int priority;

    public Process(String processId, int priority) {
        this.processId = processId;
        this.priority = priority;
    }

    public String getProcessId() {
        return processId;
    }

    public int getPriority() {
        return priority;
    }

    @Override
    public String toString() {
        return "Processo: " + processId + ", Prioridade: " + priority;
    }
}

class ProcessQueue {
    private Queue<Process> queue;

    public ProcessQueue() {
        this.queue = new LinkedList<>();
    }

    public void addProcess(Process process) {
        queue.offer(process);
        System.out.println("Novo processo adicionado à filabanho: " + process);
    }

    public void executeNextProcess() {
        if (!queue.isEmpty()) {
            Process process = queue.poll();
            System.out.println("Executando... " + process);
        } else {
            System.out.println("Não há nenhum processo na fila para execução.");
        }
    }

    public void showQueue() {
        if (queue.isEmpty()) {
            System.out.println("Não há nenhum processo na fila.");
        } else {
            System.out.println("Fila de processos prontos:");
            for (Process process : queue) {
                System.out.println(process);
            }
        }
    }
}