//1. Implemente um gerenciador de tarefas onde cada tarefa é um nó em uma lista
//simplesmente encadeada. Permita que o usuário adicione, remova, e marque tarefas
//como concluídas.

class Task {
    String description;
    boolean isCompleted;
    Task next;

    public Task(String description) {
        this.description = description;
        this.isCompleted = false;
        this.next = null;
    }

    public void markAsCompleted() {
        this.isCompleted = true;
    }

    @Override
    public String toString() {
        return description + (isCompleted ? " [Completed]" : " [Pending]");
    }
}

class TaskManager {
    private Task head;

    public TaskManager() {
        this.head = null;
    }

    public void addTask(String description) {
        Task newTask = new Task(description);
        if (head == null) {
            head = newTask;
        } else {
            Task temp = head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = newTask;
        }
    }

    public void removeTask(String description) {
        if (head == null) return;

        if (head.description.equals(description)) {
            head = head.next;
            return;
        }

        Task current = head;
        while (current.next != null && !current.next.description.equals(description)) {
            current = current.next;
        }

        if (current.next != null) {
            current.next = current.next.next;
        }
    }

    public void completeTask(String description) {
        Task current = head;
        while (current != null) {
            if (current.description.equals(description)) {
                current.markAsCompleted();
                return;
            }
            current = current.next;
        }
    }

    public void showTasks() {
        Task temp = head;
        while (temp != null) {
            System.out.println(temp);
            temp = temp.next;
        }
    }
}


