import test from 'node:test';
import assert from 'node:assert/strict';
import Queue from './Queue.js';

test('new: creates queue with one node', () => {
    const queue = new Queue(4);

    assert.equal(queue.size, 1);
    assert.equal(queue.first.value, 4);
    assert.equal(queue.first.next, null);
    assert.equal(queue.last.value, 4);
    assert.equal(queue.last.next, null);
});

test('enqueue: adds a node to a non-empty queue', () => {
    const queue = new Queue(4);

    const result = queue.enqueue(5);

    assert.equal(result, queue);
    assert.equal(queue.size, 2);
    assert.equal(queue.first.value, 4);
    assert.equal(queue.first.next.value, 5);
    assert.equal(queue.last.value, 5);
    assert.equal(queue.last.next, null);
});

test('enqueue: adds a node to an empty queue', () => {
    const queue = new Queue(4);
    queue.first = null;
    queue.last = null;
    queue.size = 0;

    const result = queue.enqueue(5);

    assert.equal(result, queue);
    assert.equal(queue.size, 1);
    assert.equal(queue.first.value, 5);
    assert.equal(queue.first.next, null);
    assert.equal(queue.last.value, 5);
    assert.equal(queue.last.next, null);
});

test('dequeue: removes the first node from a queue with several nodes', () => {
    const queue = new Queue(4);
    queue.enqueue(5);
    queue.enqueue(6);

    const removed = queue.dequeue();

    assert.equal(removed.value, 4);
    assert.equal(removed.next, null);
    assert.equal(queue.size, 2);
    assert.equal(queue.first.value, 5);
    assert.equal(queue.first.next.value, 6);
    assert.equal(queue.last.value, 6);
    assert.equal(queue.last.next, null);
});

test('dequeue: removes the only node from a single-node queue', () => {
    const queue = new Queue(4);

    const removed = queue.dequeue();

    assert.equal(removed.value, 4);
    assert.equal(removed.next, null);
    assert.equal(queue.size, 0);
    assert.equal(queue.first, null);
    assert.equal(queue.last, null);
});

test('dequeue: returns undefined for an empty queue', () => {
    const queue = new Queue(4);
    queue.first = null;
    queue.last = null;
    queue.size = 0;

    const removed = queue.dequeue();

    assert.equal(removed, undefined);
    assert.equal(queue.size, 0);
    assert.equal(queue.first, null);
    assert.equal(queue.last, null);
});
