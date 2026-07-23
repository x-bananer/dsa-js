class StackArray {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
        return this;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }

        return this.items[this.items.length - 1];
    }

    pop() {
        return this.items.pop();
    }

    size() {
        return this.items.length;
    }
}

export default StackArray;
