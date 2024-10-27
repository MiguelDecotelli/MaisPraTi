

class Main {
    public static void main(String[] args) {

        System.out.println("\nEXERCÍCIO 1:");
        TaskManager taskManager = new TaskManager();

        taskManager.addTask("Fazer as atividades atrasadas");
        taskManager.addTask("Terminar o projeto");
        taskManager.addTask("Assistir NBA");
        taskManager.addTask("Torcer pro Grêmio");

        System.out.println("\n");

        System.out.println("Lista de tarefas:");
        taskManager.showTasks();

        System.out.println("\n");

        taskManager.completeTask("Terminar o projeto");
        taskManager.showTasks();

        System.out.println("\n");

        taskManager.removeTask("Torcer pro Grêmio");
        taskManager.showTasks();

        System.out.println("\nEXERCICIO 2:");

        BrowserHistory history = new BrowserHistory(5); // Limite máximo de 3 URLs no histórico

        history.visit("https://ge.com.br");
        history.visit("https://google.com");
        history.visit("https://github.com");
        history.visit("https://nba.com");
        history.visit("https://java.com");


        System.out.println("\nHistórico atual:");
        history.showHistory();

        history.visit("https://start.spring.io");
        System.out.println("\nHistórico atual:");
        history.showHistory();

        history.visit("https://stackoverflow.com");
        System.out.println("\nhistórico atual:");
        history.showHistory();

        System.out.println("\nEXERCICIO 3: ");

        UndoManager undoManager = new UndoManager();

        undoManager.performAction("Digite 'Hello World'");
        undoManager.performAction("Digite 'Miguel'");
        undoManager.performAction("Delete 'Miguel'");

        undoManager.showHistory();

        undoManager.undo();
        System.out.println("\nApós desfazer:");
        undoManager.showHistory();

        undoManager.undo();
        System.out.println("\nApós um novo desfazer:");
        undoManager.showHistory();

        undoManager.undo();
        System.out.println("\nApós desfazer última ação:");
        undoManager.showHistory();

        undoManager.undo();

        System.out.println("\nEXERCICIO 4: ");

        TextEditor editor = new TextEditor();

        editor.performAction("Digite 'Hello World'");
        editor.performAction("Digite 'Miguel'");
        editor.performAction("Delete 'Miguel'");

        editor.showActions();

        System.out.println("\n");
        editor.undo();
        editor.showCurrentAction();

        System.out.println("\n");
        editor.undo();
        editor.showCurrentAction();

        System.out.println("\n");
        editor.redo();
        editor.showCurrentAction();

        System.out.println("\n");
        editor.redo();
        editor.showCurrentAction();

        System.out.println("\n");
        editor.redo();

        System.out.println("\nEXERCICIO 5: ");
        Hand playerHand = new Hand();

        playerHand.addCard(new Card("Espadas", "Ás"));
        playerHand.addCard(new Card("Copas", "Rei"));
        playerHand.addCard(new Card("Ouros", "10"));
        playerHand.addCard(new Card("Paus", "Dama"));

        System.out.println("\n");
        playerHand.showHand();

        System.out.println("\n");
        playerHand.removeCard("Ouros", "10");
        playerHand.showHand();

        System.out.println("\n");
        playerHand.moveCardToFront("Paus", "Dama");
        playerHand.showHand();


        System.out.println("\nEXERCICIO 6: ");

        BankQueue bankQueue = new BankQueue();

        bankQueue.addCustomer("Miguel");
        bankQueue.addCustomer("Flávio");
        bankQueue.addCustomer("Andressa");
        bankQueue.addCustomer("Dênis");

        System.out.println("\nFila de clientes:");
        bankQueue.showQueue();

        bankQueue.callNextCustomer();
        bankQueue.callNextCustomer();

        System.out.println("\nFila de clientes após atendimento:");
        bankQueue.showQueue();

        bankQueue.callNextCustomer();
        bankQueue.callNextCustomer();
        bankQueue.showQueue();


        System.out.println("\nEXERCICIO 7: ");


        PrintQueue printQueue = new PrintQueue();

        printQueue.addPrintJob(new PrintJob("DemonstrativoPerformance.pdf", 15));
        printQueue.addPrintJob(new PrintJob("RelatorioProjetoFinal.docx", 8));
        printQueue.addPrintJob(new PrintJob("Python.csv", 5));

        System.out.println("\nFila de impressão:");
        printQueue.showQueue();

        printQueue.processNextJob();
        printQueue.processNextJob();

        System.out.println("\nFila de impressão após alguns processamentos:");
        printQueue.showQueue();

        printQueue.processNextJob();

        printQueue.processNextJob();

        System.out.println("\nEXERCICIO 8: ");

        ProcessQueue processQueue = new ProcessQueue();

        // Adicionando processos à fila
        processQueue.addProcess(new Process("Oauth2", 1));
        processQueue.addProcess(new Process("JWT", 2));
        processQueue.addProcess(new Process("TDD", 3));

        System.out.println("\n");
        processQueue.showQueue();
        System.out.println("\n");

        processQueue.executeNextProcess();
        processQueue.executeNextProcess();
        System.out.println("\n");
        processQueue.showQueue();

        processQueue.executeNextProcess();

        processQueue.executeNextProcess();

    }
}