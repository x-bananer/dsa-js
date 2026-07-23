import StackArray from "../Stack/StackArray.js";

const isValid = (string) => {
	const pairs = {
		')': '(',
		'}': '{',
		']': '['
	};

	const stack = new StackArray();

	for (let i = 0; i < string.length; i++) {
		const char = string[i];

		if (!pairs[char]) {
			stack.push(string[i]);
		} else {
			const last = stack.pop();

			if (last !== pairs[char]) {
                return false;
            }
		}
	}

	return stack.isEmpty();
};

export default isValid;
