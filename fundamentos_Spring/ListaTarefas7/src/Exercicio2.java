
//2. Crie uma aplicação que simule o histórico de navegação de um navegador utilizando
//uma lista simplesmente encadeada. Implemente funcionalidades para adicionar novas
//URLs e remover URLs antigas quando a lista atingir um certo tamanho.

class BrowserHistory {
    private class Node {
        String url;
        Node next;

        public Node(String url) {
            this.url = url;
            this.next = null;
        }
    }

    private Node head;
    private Node tail;
    private int size;
    private final int maxSize;

    public BrowserHistory(int maxSize) {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.maxSize = maxSize;
    }

    public void visit(String url) {
        Node newNode = new Node(url);
        if (head == null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
        size++;

        if (size > maxSize) {
            removeOldest();
        }
    }

    private void removeOldest() {
        if (head != null) {
            head = head.next;
            size--;
        }
    }

    public void showHistory() {
        Node temp = head;
        while (temp != null) {
            System.out.println(temp.url);
            temp = temp.next;
        }
    }
}


