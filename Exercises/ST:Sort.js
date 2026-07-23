import StackArray from "../Stack/StackArray.js";

const sortStack = (stack) => {
	const tempStack = new StackArray();

	while (!stack.isEmpty()) {
		const current = stack.pop();

		while (!tempStack.isEmpty() && tempStack.peek() > current) {
			stack.push(tempStack.pop());
		}

		tempStack.push(current);
	}

	while (!tempStack.isEmpty()) {
		stack.push(tempStack.pop());
	}
};

export default sortStack;
