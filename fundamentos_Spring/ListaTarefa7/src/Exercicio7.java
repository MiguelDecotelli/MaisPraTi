//7. Implemente um sistema de gerenciamento de impressões onde os trabalhos de
//impressão são enfileirados e processados na ordem em que chegam. Use uma fila para
//armazenar os trabalhos de impressão.

import java.util.LinkedList;
import java.util.Queue;

class PrintJob {
    private String documentName;
    private int pages;

    public PrintJob(String documentName, int pages) {
        this.documentName = documentName;
        this.pages = pages;
    }

    public String getDocumentName() {
        return documentName;
    }

    public int getPages() {
        return pages;
    }

    @Override
    public String toString() {
        return "Arquivo: " + documentName + ", Páginas: " + pages;
    }
}

class PrintQueue {
    private Queue<PrintJob> queue;

    public PrintQueue() {
        this.queue = new LinkedList<>();
    }

    public void addPrintJob(PrintJob job) {
        queue.offer(job);
        System.out.println("Novo trabalho de impressão foi adicionado: " + job);
    }

    public void processNextJob() {
        if (!queue.isEmpty()) {
            PrintJob job = queue.poll();
            System.out.println("Processando " + job);
        } else {
            System.out.println("Não há nenhum trabalho de impressão na fila.");
        }
    }

    public void showQueue() {
        if (queue.isEmpty()) {
            System.out.println("Não há nenhum trabalho de impressão na fila.");
        } else {
            System.out.println("Trabalhos de impressão na fila:");
            for (PrintJob job : queue) {
                System.out.println(job);
            }
        }
    }
}

