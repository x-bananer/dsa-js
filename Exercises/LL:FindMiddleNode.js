// LeetCode 876. Middle of the Linked List
// Return the middle node of a singly linked list.
// If there are two middle nodes, return the second one.

const middleNode = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

export default middleNode;
