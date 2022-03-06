/*
This is how you can leak memory in your code
*/

let o1 = {
  a: 1,
};

let o2 = {
  b: 3,
};

let o3 = {
  a: 4,
};

// as soon as we do this, the object we initially created
// in o2 does not have a reference anymore. This is known as memory leak
// Luckily, javaScript has something called a garbage collector
// that helps us get rid of these leaks in our code
o2 = o3;
