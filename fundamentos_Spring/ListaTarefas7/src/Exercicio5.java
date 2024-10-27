//5. Implemente um jogo simples de cartas onde a mão do jogador é representada por
//uma lista duplamente encadeada. Permita que o jogador adicione, remova, e reorganize
//as cartas na mão.

class Card {
    String naipe;
    String valor;

    public Card(String naipe, String valor) {
        this.naipe = naipe;
        this.valor = valor;
    }

    @Override
    public String toString() {
        return valor + " de " + naipe;
    }
}

class Hand {
    private class Node {
        Card card;
        Node prev;
        Node next;

        public Node(Card card) {
            this.card = card;
            this.prev = null;
            this.next = null;
        }
    }

    private Node head;
    private Node tail;

    public Hand() {
        this.head = null;
        this.tail = null;
    }

    public void addCard(Card card) {
        Node newNode = new Node(card);
        if (head == null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            newNode.prev = tail;
            tail = newNode;
        }
    }

    public void removeCard(String naipe, String valor) {
        Node temp = head;
        while (temp != null) {
            if (temp.card.naipe.equals(naipe) && temp.card.valor.equals(valor)) {
                if (temp.prev != null) {
                    temp.prev.next = temp.next;
                } else {
                    head = temp.next;
                }

                if (temp.next != null) {
                    temp.next.prev = temp.prev;
                } else {
                    tail = temp.prev;
                }
                return;
            }
            temp = temp.next;
        }
    }

    public void moveCardToFront(String naipe, String valor) {
        Node temp = head;
        while (temp != null) {
            if (temp.card.naipe.equals(naipe) && temp.card.valor.equals(valor)) {
                if (temp.prev != null) {
                    temp.prev.next = temp.next;
                    if (temp.next != null) {
                        temp.next.prev = temp.prev;
                    } else {
                        tail = temp.prev;
                    }

                    temp.next = head;
                    temp.prev = null;
                    head.prev = temp;
                    head = temp;
                }
                return;
            }
            temp = temp.next;
        }
    }

    public void showHand() {
        Node temp = head;
        System.out.println("Cartão na mão:");
        while (temp != null) {
            System.out.println(temp.card);
            temp = temp.next;
        }
    }
}
