import ListNode from '../LinkedList/ListNode.js';

// LeetCode 86. Partition List
// Rearrange the list so all nodes less than x come before nodes greater than or equal to x.

var partition = function(head, x) {
    let d1 = new ListNode(0);
    let d1Ptr = d1;

    let d2 = new ListNode(0);
    let d2Ptr = d2;

    let current = head;

    while (current !== null) {
        let next = current.next;

        if (current.val < x) {
            d1Ptr.next = current;
            d1Ptr = d1Ptr.next;
            d1Ptr.next = null;
        } else {
            d2Ptr.next = current;
            d2Ptr = d2Ptr.next;
            d2Ptr.next = null;
        }

        current = next;
    }

    d1Ptr.next = d2.next;
    return d1.next;
};
