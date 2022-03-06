// here is how you make one object point to the other

let obj1 = {
  value: 1,
};

let obj2 = obj1;

console.log("Before changing object 1:");

console.log(obj1.value, obj2.value);

console.log("After changing object 1:");
obj1.value = 99;
console.log(obj1.value, obj2.value);
