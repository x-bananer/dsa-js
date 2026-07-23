const isPalindrome = (head, tail, length) => {
    const counter = Math.floor(length / 2);

    let forwardNode = head;
    let backwardNode = tail;

    for (let i = 0; i < counter; i++) {
        if (forwardNode.value !== backwardNode.value) {
            return false;
        }

        forwardNode = forwardNode.next;
        backwardNode = backwardNode.prev;
    }

    return true;
};

export default isPalindrome;
