// LeetCode 19. Remove Nth Node From End of List
// Remove the nth node from the end of the list and return the head.

const removeNthFromEnd = function(head, n) {
    let slow = head;
    let fast = head;
    let preSlow = null;

    if (n <= 0) {
        return head;
    }

    for (let i = 0; i < n; i++) {
        if (fast === null) {
            return head;
        }
        fast = fast.next;
    }

    if (fast === null) {
        return head.next;
    }

    while (fast !== null) {
        fast = fast.next;
        preSlow = slow;
        slow = slow.next;
    }

    preSlow.next = slow.next;

    return head;
};

export default removeNthFromEnd;
