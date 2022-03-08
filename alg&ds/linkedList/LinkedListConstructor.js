const Node = require("./Node");

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = new Node(value);
    this.length = 1;
  }

  push(value) {
    /*
        Check if at least one Node exists, else set the new one to the head
    */
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    // if there's nothing in the LinkedList, return undefined. Can't pop what doesn't exist
    if (!this.head) return undefined;

    // use the two pointer strategy to traverse the LL till you arrive at the last one
    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    // One more Node left, so just set head and tail to null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unShift(value) {
    let newNode = new Node(value);
    // add a Node to the beginning of the LL
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;

    let temp;

    if (this.length === 1) {
      temp = this.head;
      this.head = null;
      this.tail = null;
    } else if (this.head.next) {
      temp = this.head;
      this.head = this.head.next;
      this.tail = this.tail.next;
    }

    this.length--;
    return temp;
  }

  logAll() {
    let dummy = this.head;
    while (dummy) {
      console.log(dummy.value);
      dummy = dummy.next;
    }
  }

  search(value) {
    let dummy = this.head;
    let found = false;
    while (dummy) {
      if (dummy.value === value) {
        found = true;
        break;
      }
      // don't forget this or you will end up in an infinite loop
      dummy = dummy.next;
    }
    return found;
  }
}

let myLinkedList = new LinkedList(4);
myLinkedList.unShift(99);
myLinkedList.unShift(32);
myLinkedList.unShift(12);
//console.log(myLinkedList);

//console.log(myLinkedList.shift());
//console.log(myLinkedList);

//console.log(myLinkedList.search(4));
myLinkedList.logAll();
console.log(myLinkedList);
