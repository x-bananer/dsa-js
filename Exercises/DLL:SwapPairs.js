import ListNode from '../DoublyLinkedList/ListNode.js';

const swapPairs = (head) => {
	if (head === null || head.next === null) {
		return head;
	}

	let start = head;
	let beforeStart = null;

	while (start !== null && start.next !== null) {
		let end = start.next;
		let afterEnd = end.next;


		if (beforeStart !== null) {
			beforeStart.next = end;
		} else {
			head = end;
		}

		end.prev = beforeStart;
		end.next = start;

		start.prev = end;
		start.next = afterEnd;

		if (afterEnd !== null) {
			afterEnd.prev = start;
		}

		beforeStart = start;
		start = afterEnd;
	}

	return head;
};
