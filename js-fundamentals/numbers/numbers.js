// This file is to demonstrate skills manipulating numbers in JavaScript.

// Assign different numbers to variables 'num1' and 'num2'
let num1 = 6;
let num2 = 4;

let operationList = [
  exampleAdd,
  exampleSubtract,
  exampleMultiply,
  exampleDivide,
  exampleModulus,
  exampleToPowerOf,
  exampleMathFloor,
]

// Add
function exampleAdd(num1, num2) {
  console.log('"Add" as an operation (using + operator): ');
  console.log(`Adding num1: ${num1} and num2: ${num2}`);
  // Assign the sum of the two numbers to a new variable
  let sum = num1 + num2; // Using the (+) operator
  console.log(`The sum of ${num1} and ${num2} is ${sum}`);
}

// Subtract
function exampleSubtract(num1, num2) {
  console.log('Subtract, as an operation using - operator:');
  console.log(`Subtracting num2: ${num2} from num1: ${num1}:`);
  // Assign the difference of the two numbers to a new variable
  let difference = num1 - num2; // This uses the (-) operator
  console.log(`The difference of ${num1} and ${num2} is ${difference}`);
}

// Multiply
function exampleMultiply(num1, num2) {
  console.log('Multiply, as an operation using * operator:');
  console.log(`Finding the product of num1: ${num1} and num2: ${num2}:`);
  // Assign the product of the two numbers to a new variable
  let product = num1 * num2; // Uses the (*) operator
  console.log(`The product of ${num1} and ${num2} is ${product}`);
}

// Divide
function exampleDivide(num1, num2) {
  console.log('Divide, as an operation using / operator:');
  console.log(`Finding the quotient of num1: ${num1} and num2: ${num2}:`);
  // Assign the quotient of the two numbers to a new variable:
  let quotient = num1 / num2; // Using the (/) operator
  console.log(`The quotient of ${num1} and ${num2} is ${quotient}`);
}

// Remainder / Modulus
function exampleModulus(num1, num2) {
  console.log('Here, finding the remainder after dividing one number from another, using the modulus operator %');
  console.log(`Finding the remainder from dividing ${num1} by ${num2}:`);
  // Assign the remainder to a new variable:
  let remainder = num1 % num2; // Using the (%) operator
  console.log(`The remainder is ${remainder}`);
}

// Powers / exponents
function exampleToPowerOf(num1, num2) {
  console.log(`Here finding num1: ${num1} raised to the power of num2: ${num2}:`);
  // Assign the power to a new variable:
  let power = num1 ** num2; // Using ** operator
  console.log(`${num1} raised to the ${num2} power is ${power}`);
}

// Math.floor
function exampleMathFloor(num1, num2) {
  console.log(`Here, finding the greatest multiple of ${num2} less than or equal to ${num1}`);
  // Use Math.floor to find greatest integer of the quotient of num1 and num2
  let greatestMultiple = Math.floor(num1 / num2);
  console.log(`The result is: ${greatestMultiple}`);
}


// Call Operation functions to log output to terminal
for (let operation of operationList) {
  operation(num1, num2);
  console.log();
}
