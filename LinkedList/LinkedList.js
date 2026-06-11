import LinkedListNode from './LinkedListNode.js';

class LinkedList {
    constructor(value) {
        const newNode = new LinkedListNode(value);

        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new LinkedListNode(value);

        if (this.head) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    pop() {
        if (!this.head) {
            return undefined
        };

        let prev = this.head;
        let temp = this.head;

        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }

        this.tail = prev;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return temp;
    }

    unshift(value) {
        const newNode = new LinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this;
    }

    shift() {
        if (!this.head) {
            return undefined
        };

        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return temp;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined
        };

        let temp = this.head;

        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }

        return temp;
    }

    set(index, value) {
        let temp = this.get(index);

        if (temp) {
            temp.value = value;
            return true;
        }

        return false;
    }

    insert(index, value) {
        if (index === 0) {
            return this.unshift(value);
        }

        if (index === this.length) {
            return this.push(value);
        }

        if (index < 0 || index > this.length) {
            return undefined;
        }

        const newNode = new LinkedListNode(value);
        let temp = this.get(index - 1);

        newNode.next = temp.next;
        temp.next = newNode;

        this.length++;

        return this;
    }

    remove(index) {
        if (index === 0) {
            return this.shift();
        }

        if (index === this.length - 1) {
            return this.pop();
        }

        if (index >= this.length || index < 0) {
            return undefined;
        }

        let prev = this.get(index - 1);
        let temp = prev.next;

        prev.next = temp.next;
        temp.next = null;

        this.length--;

        return temp;
    }

    reverse() {
        if (!this.head) {
            return this;
        }

        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let next = temp.next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return this;
    }
}

export default LinkedList;
