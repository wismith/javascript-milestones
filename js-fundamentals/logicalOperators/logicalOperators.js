// Logical Operators
console.log('Working with logical operators');
console.log();
// Do actions depending on whether two numbers are both even,
// only one, or neither

let num1 = 5;
let num2 = 6;

// Function literal for isEven
let isEven = num => num % 2 === 0;

// Use if...else if ... else framework with logical operators
if (isEven(num1) && isEven(num2)) {  // "AND"
  console.log(`Both ${num1} and ${num2} are even.`);
} else if (isEven(num1) || isEven(num2)) { // "OR"
  console.log(`Either ${num1} or ${num2} is even.`);
} else {
  console.log(`Neither ${num1} nor ${num2} are even.`);
}
console.log();

// Using logical operators || , && , and !

// Using "or" ||
console.log('using "or" operator:');
let num = 5;
if (isEven(num) || !isEven(num)) {
  console.log('This string prints either way!');
}
console.log();

// Using "and" &&
console.log('Using "and" operator:');
num = -10;
if (num < 0 && isEven(num)) {
  console.log(`${num} is an even AND negative number.`)
} else {
  console.log('Both conditions were NOT met.');
}
console.log();

// Using "not" operator !
console.log('Using "not" operator:');
if (!(num > 0)) {
  console.log(`${num} is NOT a positive number!`);
}
