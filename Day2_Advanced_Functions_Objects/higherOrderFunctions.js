const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// filter
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15
