// LeetCode 141. Linked List Cycle
// Return true if the linked list has a cycle, otherwise false.

const hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
};

export default hasCycle;
