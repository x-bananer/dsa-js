import StackNode from './StackNode.js';

class Stack {
    constructor(value) {
        const newNode = new StackNode(value);
        this.top = newNode;
        this.size = 1;
    }

    push(value) {
        const newNode = new StackNode(value);

        if (this.size === 0) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }

        this.size++;

        return this;
    }

    pop() {
        if (this.size === 0) {
            return undefined;
        }

        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;

        this.size--;

        return temp;
    }
}

export default Stack;