// Functions
console.log('Working with functions!');
console.log();

// Greet a person, given a first name as a string:
const greet = firstName => console.log(`Hello, ${firstName}!`);
console.log('Running the greet function: ')
greet('Will');
console.log();

// Tell whether a temperature is "hot", "correct", or "cold":
const hotOrCold = temp => {
  if (temp > 100) {
    return 'hot';
  }
  if (temp === 100) {
    return 'correct';
  }
  if (temp < 100) {
    return 'cold';
  }
}
console.log('Running the hotOrCold function: ');
let temp = 105;
console.log(`${temp} is a ${hotOrCold(temp)} temperature.`);
console.log();

// Add two numbers and return their sum
const add = (num1, num2) => num1 + num2;
console.log('Running the add function: ');
let num1 = 5;
let num2 = 6;
console.log(`${num1} plus ${num2} is ${add(num1, num2)}`);
console.log();

// Sum all of the numbers in an array
const sum = numArray => numArray.reduce((a, b) => a + b);
console.log('Running the sum function: ');
let numArray = [1,2,3,4];
console.log('The sum of the elements of ', numArray, ' is ', sum(numArray));
console.log();

// Function to return the larger of two numbers
function largerNum(num1, num2) {
  return [num1, num2].sort((a,b) => b - a)[0];
}
num1 = 8;
num2 = 20;
console.log('Running the largerNum function...');
console.log(`The larger number of ${num1} and ${num2} is ${largerNum(num1, num2)}.`);
console.log();

// Function to return largest number of an array
function largestNum(numArray) {
  return numArray.reduce((a, b) => {
    return (a > b ? a : b);
  }); // Reduce the array down to a single value
}
console.log('Running the largestNum function...');
numArray = [5,7,1,200,24];
console.log('Of the array ', numArray, `, ${largestNum(numArray)} is the largest number.`);
console.log();

// Function to return the longest of an array of strings
function longestString(arrayOfStrings) {
  return arrayOfStrings.reduce((a, b) => {
    return (a.length > b.length ? a : b);
  })
}
let arrayOfStrings = ['hello', 'my', 'name', 'is', 'will'];
console.log('Running longestString function...');
console.log('The longest string out of ', arrayOfStrings, `is '${longestString(arrayOfStrings)}'.`);
console.log();

// Function to reverse the elements of an array
function reverseArray(myArray) {
  let reversedArray = [];
  for (let element of myArray) {
    reversedArray.unshift(element);
  }
  return reversedArray;
}
let myArray = [4,3,2,1];
console.log('Running the reverseArray function...');
console.log('The array', myArray, 'in reverse is', reverseArray(myArray));
console.log();

// Function to determine if isChicagoPhoneNumber (area codes 773, 312, 872)
function isChicagoPhoneNumber(stringNumber) {
  let chicagoAreaCodes = ['773', '312', '872'];
  return chicagoAreaCodes.includes(stringNumber.slice(0,3));
}
console.log('Running the isChicagoPhoneNumber function...');
let exampleNumbers = ['773-798-9484', '312-398-0098', '586-958-4445'];
for (let example of exampleNumbers) {
  if (isChicagoPhoneNumber(example)) {
    console.log(example, ' IS a Chicago phone number.');
  } else {
    console.log(example, ' is NOT a chicago phone number.');
  }
}
console.log();

// Function to count how many of each letter occur in a string
function letterCounts(myString) {
  const counts = {};
  for (let letter of myString) {
    if (!counts.hasOwnProperty(letter)) {
      counts[letter] = 1;
    } else {
      counts[letter]++;
    }
  }
  return counts;
}
let testString = 'mississippi';
console.log('Running letter analysis on ', testString);
console.log(letterCounts(testString));
console.log();
