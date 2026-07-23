import ListNode from '../DoublyLinkedList/ListNode.js';

var reverseBetween = function(head, startIndex, endIndex) {
    if (head === null || startIndex === endIndex) {
        return head;
    }

    let start = head;
	for (let i = 0; i < startIndex; i++) {
		start = start.next;
	}
	const beforeStart = start.prev;

	let end = start;
	for (let i = 0; i < endIndex - startIndex; i++) {
		end = end.next;
	}
	const afterEnd = end.next;

	let current = start;
	while (current !== afterEnd) {
		const oldNext = current.next;
		current.next = current.prev;
		current.prev = oldNext;
		current = oldNext;
	}

	if (beforeStart !== null) {
		beforeStart.next = end;
		end.prev = beforeStart;
	} else {
		head = end;
		head.prev = null;
	}

	if (afterEnd !== null) {
		start.next = afterEnd;
		afterEnd.prev = start;
	} else {
		start.next = null;
	}

	return head;
};
