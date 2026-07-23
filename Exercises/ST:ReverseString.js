import Stack from '../Stack/StackArray.js';

const reverseString = (string) => {
    const stack = new Stack();
    for (let i = 0; i < string.length; i++) {
        stack.push(string[i]);
    }
    
    let reversed = '';
    for (let i = 0; i < string.length; i++) {
        reversed = reversed + stack.pop(string[i]);
    }
    
    return reversed;
};

export default reverseString;
