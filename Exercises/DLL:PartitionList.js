import ListNode from '../DoublyLinkedList/ListNode.js';

const partition = (head, x) => {
	// If the list is empty, there's nothing to partition
	if (!head) return;

	// Create two dummy nodes for two partitions
	const lessDummy = new ListNode(0); // for nodes < x
	const greaterOrEqualDummy = new ListNode(0); // for nodes >= x

	// Pointers to build each new list
	let lessTail = lessDummy;
	let greaterOrEqualTail = greaterOrEqualDummy;

	// Start from the head of the original list
	let current = head;

	// Traverse the original list
	while (current !== null) {
		// Save the next node before detaching
		const next = current.next;

		// Disconnect current node from original list
		current.next = null;
		current.prev = null;

		// If value is less than x, add to first list
		if (current.value < x) {
			lessTail.next = current;
			current.prev = lessTail;
			lessTail = current;
		} 
		// Otherwise, add to second list
		else {
			greaterOrEqualTail.next = current;
			current.prev = greaterOrEqualTail;
			greaterOrEqualTail = current;
		}

		// Move to the next node
		current = next;
	}

	// Combine both lists
	lessTail.next = greaterOrEqualDummy.next;
	if (greaterOrEqualDummy.next) {
		greaterOrEqualDummy.next.prev = lessTail;
	}

	// Ensure the result has no prev pointer
	if (lessDummy.next) {
		lessDummy.next.prev = null;
	}

	return lessDummy.next;
};

export default partition;
