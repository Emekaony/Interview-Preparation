"use strict";

const Node = require("./Node");

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.size = 1;
  }

  push(value) {
    // add an item to the end of the linkedList
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // this also sets the value of the heads next to the new object
      this.tail.next = newNode;
      // now the tail points to a new Node, so setting its next value again will not affect the head
      this.tail = newNode;
    }

    this.size++;
    return this;
  }

  pop() {
    // remove the last node from the LL
    if (this.size === 0) return undefined;

    let temp;
    if (this.size === 1) {
      temp = this.head;
      this.head = null;
      this.tail = null;
    } else if (this.size > 1) {
      let temp = this.head;
      let pre = this.head;

      while (temp.next) {
        pre = temp;
        temp = temp.next;
      }
      // we would have traversed the LL till the end by now
      this.tail = pre;
      this.tail.next = null;
    }

    this.size--;
    return temp;
  }

  unShift(value) {
    // add a new node to the beginning of the LL
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.size >= 1) {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
    return this;
  }

  shift() {
    // remove an item from the beginning of the LL
    if (this.size === 0) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.size--;

    // if after decrementing the size, the size is now zero
    // then we had just one item in there. Make sure to set the tail to null as well
    if (this.size === 0) {
      this.tail = null;
    }
  }
  get(index) {
    // get the Node at a particular index
    // this is udeful when asked to retrieve the Nth item in a linkedList
    if (index < 0 || index > this.size - 1) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    // index must be zero based. For example, the first position is 0 not 1
    if (index === 0) return this.unShift(value);
    if (index === this.size - 1) return this.push(value);
    if (index < 0 || index > this.size - 1) return undefined;

    const newNode = new Node(value);
    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.size++;
    return this;
  }
  remove(index) {
    // index must be zero based. For example, the first position is 0 not 1
    if (index === 0) return this.shift();
    if (index === this.size - 1) return this.pop();
    if (index < 0 || index > this.size - 1) return undefined;

    let before = this.get(index - 1);
    let toRemove = before.next;

    before.next = toRemove.next;
    toRemove.next = null;

    this.size--;
    return toRemove;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next;
    let prev = null;

    for (let i = 0; i < this.size; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);

console.log(myLinkedList);

myLinkedList.reverse();

console.log(myLinkedList);
