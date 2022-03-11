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
    let newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.size >= 1) {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }
}

let myLinkedList = new LinkedList(22);
myLinkedList.push(44);
myLinkedList.pop();
myLinkedList.unShift(899);
myLinkedList.unShift(433);
console.log(myLinkedList);
