import StackArray from "../Stack/StackArray.js";

class MyQueue {
    constructor() {
        this.stack1 = new StackArray();
        this.stack2 = new StackArray();
    }
    
    peek() {
        return this.stack1.peek();
    }

    isEmpty() {
        return this.stack1.isEmpty();
    }

    enqueue(value) {
        while (!this.stack1.isEmpty()) {
            this.stack2.push(this.stack1.pop());
        }

        this.stack1.push(value);

        while (!this.stack2.isEmpty()) {
            this.stack1.push(this.stack2.pop());
        }
    }

    dequeue() {
        return this.stack1.pop();
    }
}

export default MyQueue;
