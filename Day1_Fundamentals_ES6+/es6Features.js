// let and const
let city = "New York";
const PI = 3.14;

// Template literals
let firstName = "John";
let lastName = "Doe";
let greeting = `Hello, my name is ${firstName} ${lastName}.`;
console.log(greeting);

// Destructuring
const person = {
  name: "Jane",
  age: 30,
  job: "Developer",
};

const { name, age, job } = person;
console.log(name, age, job);

// Default parameters
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5)); // Output: 5
console.log(multiply(5, 2)); // Output: 10

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]

// Rest operator
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
