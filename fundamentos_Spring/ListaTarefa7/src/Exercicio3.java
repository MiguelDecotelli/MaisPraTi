//3. Implemente um sistema de controle de reversão (undo) para uma aplicação de
//edição de texto. Use uma lista simplesmente encadeada para armazenar as ações
//realizadas e permita que o usuário desfaça as últimas ações.

class UndoManager {
    private class ActionNode {
        String action;
        ActionNode next;

        public ActionNode(String action) {
            this.action = action;
            this.next = null;
        }
    }

    private ActionNode head;

    public UndoManager() {
        head = null;
    }

    public void performAction(String action) {
        ActionNode newAction = new ActionNode(action);
        newAction.next = head;
        head = newAction;
    }

    public void undo() {
        if (head != null) {
            System.out.println("desfazendo ação: " + head.action);
            head = head.next;
        } else {
            System.out.println("Sem ações para desfazer.");
        }
    }

    public void showHistory() {
        ActionNode temp = head;
        System.out.println("Histórico de ações:");
        while (temp != null) {
            System.out.println(temp.action);
            temp = temp.next;
        }
    }
}