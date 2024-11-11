//4. Implemente um editor de texto simples onde as operações de desfazer (undo) e
//refazer (redo) são gerenciadas por uma lista duplamente encadeada.

class TextEditor {
    private class Node {
        String action;
        Node prev;
        Node next;

        public Node(String action) {
            this.action = action;
            this.prev = null;
            this.next = null;
        }
    }

    private Node currentAction;
    private Node head;
    private Node tail;

    public TextEditor() {
        this.head = null;
        this.tail = null;
        this.currentAction = null;
    }

    public void performAction(String action) {
        Node newAction = new Node(action);

        if (head == null) {
            head = newAction;
            tail = newAction;
            currentAction = newAction;
        } else {

            if (currentAction != tail) {
                currentAction.next = null;
                tail = currentAction;
            }
            tail.next = newAction;
            newAction.prev = tail;
            tail = newAction;
            currentAction = newAction;
        }
    }

    public void undo() {
        if (currentAction != null) {
            System.out.println("Desfazer ações: " + currentAction.action);
            currentAction = currentAction.prev;
        } else {
            System.out.println("Sem ações para desfazer.");
        }
    }

    public void redo() {
        if (currentAction != null && currentAction.next != null) {
            currentAction = currentAction.next;
            System.out.println("Refazendo ação: " + currentAction.action);
        } else if (currentAction == null && head != null) {
            currentAction = head;
            System.out.println("Refazendo ação: " + currentAction.action);
        } else {
            System.out.println("Sem ações para desfazer.");
        }
    }

    public void showActions() {
        Node temp = head;
        System.out.println("Histórico de ações:");
        while (temp != null) {
            System.out.println(temp.action);
            temp = temp.next;
        }
    }

    public void showCurrentAction() {
        if (currentAction != null) {
            System.out.println("Ação atual: " + currentAction.action);
        } else {
            System.out.println("Sem ações.");
        }
    }
}
