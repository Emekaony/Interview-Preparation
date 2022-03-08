// function pop() {
//   if (!this.head) return undefined;

//   let pre = this.head;
//   let temp = this.head;

//   while (temp.next) {
//     // we are traversing the linkedList now
//     pre = temp;
//     temp = temp.next;
//   }

//   // at this point, we are at the last node in the linkedList
//   this.tail = pre;
//   this.tail.next = null;
//   this.length--;

//   if (this.length === 0) {
//     // make sure to set both head and tail to null as we have popped the last thing out of the lL
//     this.head = null;
//     this.tail = null;
//   }

//   // we always return temp because this is the thing that we pop from the LL
//   return temp;
// }

// function push(value) {
//   const newNode = new Node(value);

//   if (!this.head) {
//     this.head = newNode;
//     this.tail = newNode;
//   } else {
//     this.tail.next = newNode;
//     this.tail = newNode;
//   }

//   this.length++;
//   return this;
// }
