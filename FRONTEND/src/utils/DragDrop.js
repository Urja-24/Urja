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

        const node1Rect = node1.element.getBoundingClientRect();
        const node2Rect = node2.element.getBoundingClientRect();
        const deltaX = node2Rect.left - node1Rect.left;
        const deltaY = node2Rect.top - node1Rect.top;

        node1.element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        node2.element.style.transform = `translate(${-deltaX}px, ${-deltaY}px)`;


        node1.element.style.transform = '';
        node2.element.style.transform = '';

        if (prev1) prev1.next = node2;
        if (next1) next1.prev = node2;
        if (prev2) prev2.next = node1;
        if (next2) next2.prev = node1;

        [node1.prev, node2.prev] = [node2.prev, node1.prev];
        [node1.next, node2.next] = [node2.next, node1.next];
        if (this.head === node1) this.head = node2;
        else if (this.head === node2) this.head = node1;

        if (this.tail === node1) this.tail = node2;
        else if (this.tail === node2) this.tail = node1;

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
}