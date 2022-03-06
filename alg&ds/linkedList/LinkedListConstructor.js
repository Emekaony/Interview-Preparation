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
    // if there's no Node, then return undefined
    if (!this.head) return undefined;

    // use the two pointer strategy to traverse the LinkedList
    let temp = this.head;
    let pre = this.head;

    // this will happen until we get to the last Node where temp.next === null
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    // we must have gotten to the last Node in the LinkedList, this is the Node we want to pop off of the List
    // we set the tail to pre, the one before temp
    this.tail = pre;
    // then we set the tail's next property to null, this is where we remove the linke between
    // the second to last and the last Node in the LL
    this.tail.next = null;
    // decrement the length of the LL because we just popped something off of it
    this.length--;

    // what if we had just 1 item in our LL??
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }
}

let myLinkedList = new LinkedList(4);
myLinkedList.push(6);
console.log(myLinkedList.pop());
console.log(myLinkedList);

console.log(myLinkedList.pop());
console.log(myLinkedList.pop());
