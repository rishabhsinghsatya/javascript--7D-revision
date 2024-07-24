const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  },
};

console.log(person.firstName); // Output: John
console.log(person["lastName"]); // Output: Doe
person.greet(); // Output: Hello, my name is John Doe.

// Adding properties
person.job = "Developer";
console.log(person.job); // Output: Developer

// Deleting properties
delete person.age;
console.log(person.age); // Output: undefined
