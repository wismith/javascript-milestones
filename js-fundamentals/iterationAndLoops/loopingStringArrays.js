// Looping with Arrays of Strings
console.log('Looping with arrays of strings!');
console.log();

// Define an array of 8 or more strings:

let arrayOfStrings = [
  'hi',
  'hello',
  'will',
  'this',
  'is',
  'a',
  'string',
  'oh fooey',
];

console.log('My array of strings is ', arrayOfStrings);


// Print out the longest string
console.log('Printing out the longest string of the array');

// Similar to what we do with numbers, establish a runningLongest
let runningLongest = arrayOfStrings[0];
// Use a for loop to maintain this variable for the array
for (let string of arrayOfStrings) {
  if (string.length > runningLongest.length) {
    runningLongest = string;
  }
}
console.log('The longest string is ', runningLongest);
console.log();


// Print out the shortest string
console.log('Printing out the shortest string of the array');

// Same as above, but shortest rather than longest
let runningShortest = arrayOfStrings[0];

for (let string of arrayOfStrings) {
  if (string.length < runningShortest.length) {
    runningShortest = string;
  }
}
console.log('The shortest string is ', runningShortest);
console.log();


// Print all strings longer than minLength characters
let minLength = 3;
console.log(`Printing out all strings longer than minLength (${minLength}) characters...`);

// Use a for...of loop with an if statement to print the appropriate strings
for (let string of arrayOfStrings) {
  if (string.length > 3) {
    console.log(string);
  }
}
console.log();

// Print out the first string that begins with the letter 'a'
console.log('Printing out the first string starting with \'a\'...');
let startsWithA;
while (!startsWithA) { // While this variable is undefined...
  for (let string of arrayOfStrings) { // for each string of array
    if (string[0] === 'a' || string[0] === 'A') { // if it starts with 'a'
      startsWithA = string; // replace this variable with the string
    }
  }
}
console.log('The first string that starts with "a" is ',startsWithA);
console.log();


// Print "found it!" if array of strings contains "needle".  Else, print 'nope!'
console.log('Does the array include "needle" ?');
if (arrayOfStrings.includes('needle')) {
  console.log('Found it!');
} else {
  console.log('Nope!');
}
console.log();

// Using sort(), print out strings sorted A-Z
console.log('Printing out all strings sorted A-Z...')
// Use for...of loop with array.sort()
for (let string of arrayOfStrings.sort()) {
  console.log(string);
}
console.log();

// Using sort(), print out strings sorted Z-A
console.log('Printing out all strings sorted Z-A...')
// Do same thing, but add .reverse() on end
for (let string of arrayOfStrings.sort().reverse()) {
  console.log(string);
}
console.log();
