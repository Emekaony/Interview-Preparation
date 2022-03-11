let obj1 = {
  name: "Nnaemeka",
};

let obj2 = obj1;

console.log(obj1, obj2);

// Now, if we change object 1's value, we will also change ibject 2's value because they both
// point to the same location in memory

obj1.name = "Obi";

console.log(obj1, obj2);
