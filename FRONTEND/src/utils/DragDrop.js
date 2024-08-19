export class ListNode {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(element) {
        const node = new ListNode(element);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }
    find(element) {
        let current = this.head;
        while (current) {
            if (current.element == element)
                return current;
            current = current.next;
        }
        return null;
    }
    swap(node1, node2, container) {
        if (node1 == node2) return;
        const prev1 = node1.prev;
        const next1 = node1.next;
        const prev2 = node2.prev;
        const next2 = node2.next;

        if (node2.next === node1) {
            // Adjust node2's previous node to point to node1
            if (prev2) {
                prev2.next = node1;
            } else {
                // If node2 was the head, now node1 becomes the head
                this.head = node1;
            }

            // Adjust node1's next node to point to node2
            if (next1) {
                next1.prev = node2;
            } else {
                // If node1 was the tail, now node2 becomes the tail
                this.tail = node2;
            }

            // Now swap the pointers between node1 and node2
            node2.next = next1;
            node1.prev = prev2;

            node1.next = node2;
            node2.prev = node1;
        }
        else if (node1.next != node2) {
            if (prev1) prev1.next = next1;
            if (next1) next1.prev = prev1;
            if (prev2) prev2.next = node1;
            node1.next = node2;
            node1.prev = prev2;
            node2.prev = node1

            if (this.head === node1) this.head = next1;
            else if (this.head === node2) this.head = node1;

            if (this.tail === node1) this.tail = prev1;
            // else if (this.tail === node2) this.tail = node1;
        }
        this.updateDOM(container);

    }


    swap_reverse(node1, node2, container) {
        if (node1 === node2) return;

        const prev1 = node1.prev;
        const next1 = node1.next;
        const prev2 = node2.prev;
        const next2 = node2.next;

        if (node1.next === node2) {
            // Adjust node1's previous node to point to node2
            if (prev1) {
                prev1.next = node2;
            } else {
                // If node1 was the head, now node2 becomes the head
                this.head = node2;
            }

            // Adjust node2's next node to point to node1
            if (next2) {
                next2.prev = node1;
            } else {
                // If node2 was the tail, now node1 becomes the tail
                this.tail = node1;
            }

            // Now swap the pointers between node1 and node2
            node1.next = next2;
            node1.prev = node2;

            node2.next = node1;
            node2.prev = prev1;
        } else if (node2.next !== node1) {
            // Handle the general case where node1 and node2 are not adjacent

            if (prev1) prev1.next = next1;
            if (next1) next1.prev = prev1;

            if (next2) next2.prev = node1;
            node1.next = next2;
            node1.prev = node2;

            node2.next = node1;

            if (this.head === node1) this.head = next1;

            if (this.tail === node1) this.tail = prev1;
        }

        this.updateDOM(container);

    }
    toArray() {
        const array = [];
        let current = this.head;
        while (current) {
            array.push(current.element);
            current = current.next;
        }
        return array;
    }
    updateDOM(container) {
        const elements = this.toArray();
        container.innerHTML = '';
        elements.forEach(el => container.appendChild(el));
    }
    isBefore(element1, element2) {
        let current = this.head;
        while (current) {
            if (current.element == element1) {
                return 1; // element1 is before element2
            }
            if (current.element == element2) {
                return 0; // element2 is before element1
            }
            current = current.next;
        }
    
        return -1; // This case handles if neither element is found
    }
    
}