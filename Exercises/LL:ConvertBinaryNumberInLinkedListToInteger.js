// LeetCode 1290. Convert Binary Number in a Linked List to Integer
// Convert a linked list of binary digits into its decimal value.

const getDecimalValue = function(head) {
    let current = head;
    let num = 0;

    while (current !== null) {
        num = num * 2 + current.val;
        current = current.next;
    }

    return num;
};

export default getDecimalValue;
