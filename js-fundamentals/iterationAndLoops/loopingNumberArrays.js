// Looping with arrays of numbers
console.log('Looping with arrays of numbers!');
console.log();

// Declare an array of at least 8 numbers
let listOfNumbers = [
  64,
  23,
  45,
  20,
  48,
  1,
  6,
  10,
  100
];
console.log('My list of numbers is ', listOfNumbers);

// Print out the largest element of the array
console.log('Printing out the largest number of my array...');

// Use a for...of loop to maintain a runningLargest variable
let runningLargest = listOfNumbers[0];
for (let num of listOfNumbers) { // For each number of the list...
  if (num > runningLargest) {  // If num is greater than runningLargest...
    runningLargest = num; // Replace runningLargest with num
  }
}
console.log('The largest number is ',runningLargest); // Print out the final runningLargest value
console.log();

// Print out the smallest number of the array
console.log('Printing out the smallest number of my array...');

// Like last time, use a for...of loop to maintain a runningSmallest
let runningSmallest = listOfNumbers[0];
for (let num of listOfNumbers) {
  if (num < runningSmallest) {
    runningSmallest = num;
  }
}
console.log('The smallest number is ', runningSmallest);
console.log();


// Print out all elements greater than 'k', where k is a number variable
let k = 21;
console.log(`Printing out all numbers in the list greater than k (${k})...`);
// Use a for...of loop and an if statement to print numbers that fit the condition

for (let num of listOfNumbers) {
  if (num > k) {
    console.log(num);
  }
}
console.log();


// Print out all the even elements of the array
console.log('Printing out all of the even numbers of my list...');

// Use the same for...of and if structure, but with a modulus operator
for (let num of listOfNumbers) {
  if (num % 2 === 0) {
    console.log(num);
  }
}
console.log();


// Using sort(), print out elements from largest to smallest
console.log('Printing out numbers in my list from greatest to least...');


/*
 Sort() with numbers requires a function to sort by!
 ** Actually, sort() converts the elements into strings by default
 See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

 To sort from least to greatest, we will use the lambda expression below:
 (a,b) => b - a
*/
// Using a for...of loop for the sorted array...

for (let num of listOfNumbers.sort((a, b) => b - a)) {
  console.log(num);
}
console.log();

// Using sort to print out elements from smallest to largest
console.log('Printing out the numbers in my list from least to greatest...');

// Now we do the same thing, but with the below lambda expression:
// (a, b) => a - b

for (let num of listOfNumbers.sort((a, b) => a - b)) {
  console.log(num);
}
console.log();
