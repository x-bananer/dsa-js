import test from 'node:test';
import assert from 'node:assert/strict';
import DoublyLinkedList from './DoublyLinkedList.js';
import ListNode from './ListNode.js';

test('new: creates list with one node', () => {
    const list = new DoublyLinkedList(4);

    assert.equal(list.length, 1);
    assert.equal(list.head.value, 4);
    assert.equal(list.head.next, null);
    assert.equal(list.head.prev, null);
    assert.equal(list.tail.value, 4);
    assert.equal(list.tail.next, null);
    assert.equal(list.head.prev, null);
});

test('unshift: adds a node to the beginning of a doubly linked list', () => {
    const list = new DoublyLinkedList(2);
    list.unshift(1);

    assert.equal(list.length, 2);
    assert.equal(list.head.value, 1);
    assert.equal(list.head.prev, null);
    assert.equal(list.head.next.prev, list.head);
    assert.equal(list.tail.value, 2);
});

test('unshift: adds a node to an empty doubly linked list', () => {
    const list = new DoublyLinkedList(2);
    list.head = null;
    list.tail = null;
    list.prev = null;
    list.length = 0;

    list.unshift(1);

    assert.equal(list.length, 1);
    assert.equal(list.head.value, 1);
    assert.equal(list.head.prev, null);
    assert.equal(list.head.next, null);
    assert.equal(list.tail.value, 1);
    assert.equal(list.tail.prev, null);
    assert.equal(list.tail.next, null);
});

test('shift: removes a node from an empty doubly linked list', () => {
    const list = new DoublyLinkedList(2);

    list.head = null;
    list.tail = null;
    list.length = 0;

    const removedNode = list.shift();

    assert.equal(removedNode, undefined);
});

test('shift: removes the only from a single-node doubly linked list', () => {
    const list = new DoublyLinkedList(2);

    const oldHead = list.head;
    const removedNode = list.shift();

    assert.equal(removedNode.value, oldHead.value);
    assert.equal(removedNode.next, null);
    assert.equal(removedNode.prev, null);

    assert.equal(list.head, null);
    assert.equal(list.tail, null);
    assert.equal(list.length, 0);
});

test('shift: removes a node from a doubly linked list', () => {
    const list = new DoublyLinkedList(4);
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);

    list.tail.next = node1;
    node1.prev = list.tail;
    node1.next = node2;
    node2.prev = node1;
    list.tail = node2;
    list.length = 3;

    const oldHead = list.head;
    const expectedHead = list.head.next;
    const removedNode = list.shift();

    assert.equal(removedNode.value, oldHead.value);
    assert.equal(removedNode.next, null);
    assert.equal(removedNode.prev, null);

    assert.equal(list.head, expectedHead);
    assert.equal(list.head.prev, null);

    assert.equal(list.length, 2);
});

test('get: returns undefined when trying to get the node at the specified index from an empty doubly linked list', () => {
    const list = new DoublyLinkedList(4);

    list.head = null;
    list.tail = null;
    list.length = 0;

    const node = list.get();
    assert.equal(node, undefined);
});

test('get: returns undefined when the index exceeds the bounds of the doubly linked list', () => {
    const list = new DoublyLinkedList(4);

    const node1 = list.get(-1);
    const node2 = list.get(1);

    assert.equal(node1, undefined);
    assert.equal(node2, undefined);
});

test('get: returns the node at the specified index from a doubly linked list', () => {
    const list = new DoublyLinkedList(4);
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);

    list.head.next = node1;
    node1.prev = list.head;
    node1.next = node2;
    node2.prev = node1;
    node2.next = node3;
    node3.prev = node2;
    list.tail = node3;
    list.length = 4;

    assert.equal(list.get(0).value, 4);
    assert.equal(list.get(1).value, 1);
    assert.equal(list.get(2).value, 2);
    assert.equal(list.get(3).value, 3);
});

test('set: updates a node at the specified index', () => {
    const list = new DoublyLinkedList(4);
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);

    list.head.next = node1;
    node1.prev = list.head;
    node1.next = node2;
    node2.prev = node1;
    list.tail = node2;
    list.length = 3;

    const result = list.set(1, 42);

    assert.equal(result, true);
    assert.equal(list.get(1).value, 42);
});

test('set: returns false when the index is out of bounds', () => {
    const list = new DoublyLinkedList(4);
    const result1 = list.set(-1, 42);
    const result2 = list.set(1, 42);

    assert.equal(result1, false);
    assert.equal(result2, false);
});


test('insert: adds a node at the beginning of the doubly linked list', () => {
    const list = new DoublyLinkedList(4);

    const result = list.insert(0, 1);

    assert.equal(result, list);
    assert.equal(list.head.value, 1);
    assert.equal(list.head.next.value, 4);
    assert.equal(list.head.next.prev, list.head);
    assert.equal(list.tail.value, 4);
    assert.equal(list.length, 2);
});

test('insert: adds a node at the end of the doubly linked list', () => {
    const list = new DoublyLinkedList(4);

    const result = list.insert(1, 1);

    assert.equal(result, list);
    assert.equal(list.head.value, 4);
    assert.equal(list.tail.value, 1);
    assert.equal(list.tail.prev.value, 4);
    assert.equal(list.tail.prev.next, list.tail);
    assert.equal(list.length, 2);
});

test('insert: adds a node at the specified index to a doubly linked list', () => {
    const list = new DoublyLinkedList(4);

    const node1 = new ListNode(1);

    list.head.next = node1;
    node1.prev = list.head;

    list.tail = node1;
    list.length = 2;

    const result = list.insert(1, 2);

    assert.equal(result, list);

    assert.equal(list.get(0).value, 4);
    assert.equal(list.get(1).value, 2);
    assert.equal(list.get(2).value, 1);

    assert.equal(list.get(1).prev.value, 4);
    assert.equal(list.get(1).next.value, 1);

    assert.equal(list.get(0).next, list.get(1));
    assert.equal(list.get(1).prev, list.get(0));

    assert.equal(list.get(1).next, list.get(2));
    assert.equal(list.get(2).prev, list.get(1));

    assert.equal(list.head.value, 4);
    assert.equal(list.tail.value, 1);

    assert.equal(list.length, 3);
});

test('insert: returns undefined when the index is out of bounds', () => {
    const list = new DoublyLinkedList(4);

    assert.equal(list.insert(-1, 1), undefined);
    assert.equal(list.length, 1);
    assert.equal(list.insert(2, 1), undefined);
    assert.equal(list.length, 1);
    assert.equal(list.head.value, 4);
    assert.equal(list.tail.value, 4);
});

test('remove: removes the first node from a doubly linked list', () => {
    const list = new DoublyLinkedList(4);
    list.push(1);
    list.push(2);

    const removedNode = list.remove(0);

    assert.equal(removedNode.value, 4);
    assert.equal(removedNode.prev, null);
    assert.equal(removedNode.next, null);
    assert.equal(list.head.value, 1);
    assert.equal(list.head.prev, null);
    assert.equal(list.tail.value, 2);
    assert.equal(list.length, 2);
});

test('remove: removes the last node from a doubly linked list', () => {
    const list = new DoublyLinkedList(4);
    list.push(1);
    list.push(2);

    const removedNode = list.remove(2);

    assert.equal(removedNode.value, 2);
    assert.equal(removedNode.prev, null);
    assert.equal(removedNode.next, null);
    assert.equal(list.head.value, 4);
    assert.equal(list.tail.value, 1);
    assert.equal(list.tail.next, null);
    assert.equal(list.length, 2);
});

test('remove: removes a node from a doubly linked list', () => {
    const list = new DoublyLinkedList(4);
    list.push(1);
    list.push(2);

    const removedNode = list.remove(1);

    assert.equal(removedNode.value, 1);
    assert.equal(removedNode.prev, null);
    assert.equal(removedNode.next, null);
    assert.equal(list.get(0).value, 4);
    assert.equal(list.get(1).value, 2);
    assert.equal(list.head.next, list.tail);
    assert.equal(list.tail.prev, list.head);
    assert.equal(list.length, 2);
});

test('remove: returns undefined when the index is out of bounds', () => {
    const list = new DoublyLinkedList(4);
    list.push(1);

    assert.equal(list.remove(-1), undefined);
    assert.equal(list.remove(3), undefined);
    assert.equal(list.length, 2);
    assert.equal(list.head.value, 4);
    assert.equal(list.tail.value, 1);
});
