// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// Function expression
const square = function (number) {
  return number * number;
};
console.log(square(4));

// Arrow function
const multiply = (x, y) => {
  return x * y;
};
console.log(multiply(3, 7));

// Arrow function with implicit return
const add = (x, y) => x + y;
console.log(add(5, 3));
