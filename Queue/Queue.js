import QueueNode from './QueueNode.js';

class Queue {
    constructor(value) {
        const newNode = new QueueNode(value);

        this.first = newNode;
        this.last = newNode;
        this.size = 1;
    }

    enqueue(value) {
        const newNode = new QueueNode(value);

        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++;

        return this;
    }

    dequeue() {
        if (this.size === 0) {
            return undefined;
        }

        let temp = this.first;

        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            temp.next = null;
        }

        this.size--;

        return temp;
    }
}

export default Queue;