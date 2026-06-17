import ListNode from '../LinkedList/ListNode.js';

// LeetCode 92. Reverse Linked List II
// Reverse the nodes between positions left and right in-place.

var reverseBetween = function(head, left, right) {
    if (head === null || left === right) {
        return head;
    }

    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;

    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    let current = prev.next;

    for (let i = 0; i < right - left; i++) {
        let temp = current.next;
        current.next = temp.next;
        temp.next = prev.next;
        prev.next = temp;
    }

    return dummy.next;
};
