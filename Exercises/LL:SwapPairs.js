import ListNode from '../LinkedList/ListNode.js';

// LeetCode 24. Swap Nodes in Pairs
// Given a linked list, swap every two adjacent nodes and return its head.

var swapPairs = (head) => {
	// Create a dummy node pointing to head
	// This helps simplify edge cases like swapping the head
	const dummy = new ListNode(0);
	dummy.next = head;

	// Set pointers to start of list
	let prev = dummy;
	let first = head;

	while (first !== null && first.next !== null) {
		// Store the second node
    	let second = first.next;

		// Point previous to second, beginning the swap
		prev.next = second;
    	
    	// Link first to node after second
        first.next = second.next;

		// Complete the swap: second now points to first
    	second.next = first;
    	
		// Move previous forward to first
		prev = first;

		// Move first forward to the next pair
        first = first.next;
    }

	return dummy.next;
};
