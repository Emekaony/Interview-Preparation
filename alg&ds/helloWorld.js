// Big O is used to measure time and space complexity

// here is an example of a funciton that runs in O(n) time complexity
// remember that the time complexity is measured based on the amount
// of operations a code has to perform

const logItems = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
};

// now here is the same idea, but with O(n^2) time

function logItems2(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

logItems2(10);
