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
}

let myLinkedList = new LinkedList(4);
myLinkedList.push(6);
console.log(myLinkedList);

myLinkedList.pop();
console.log(myLinkedList);

myLinkedList.pop();
console.log(myLinkedList);

console.log(myLinkedList.pop());
console.log(myLinkedList);
