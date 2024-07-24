function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

//another
let a = 20;
function outer() {
  let name = "javascript";
  function inner() {
    let game = "game from inner function";
    name = `${name} access from outer function in inner function() `;

    console.log(game); // game from inner function
    console.log(name); // javascript access from outer function in inner function()
    console.log(`${a} access from the global variable`); // 20
  }
  inner();
}
outer();
