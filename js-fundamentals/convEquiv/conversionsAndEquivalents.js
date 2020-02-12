// Converting number into String

console.log('Converting numbers into strings:');
console.log();

let num = 1234;
console.log('My number is ', num);

// Number.toString() method works here
let stringNum = num.toString();
console.log('My number as a string is ', stringNum);
console.log();


// Converting string to a number
console.log('Converting strings to numbers: ');
console.log();
let string = '1917';
console.log('My string number is ', string);

// Number(string) method works here
let numString = Number(string);
console.log('My string number as a number is ', numString);
console.log();


// Convert a string into an array of its characters
console.log('Converting string to array of characters');
console.log();

let myString = 'helloworld';
console.log('My string is ', myString);

// Use String.split('') for this - note the blank string as a parameter
let arrayOfChars = myString.split('');
console.log(`Characters of '${myString}' :`, arrayOfChars);
console.log();

// Given array of strings, join them into one string
console.log('Join array of strings into one string');
console.log();

let arrayOfStrings = ['hello', 'my', 'name', 'is', 'will'];
console.log('My array of strings is ', arrayOfStrings);

// Use array.join('') to join without spaces
let withoutSpaces = arrayOfStrings.join('');
// Or array.join(' ') to join with spaces
// Really, you could do this with any character
let withSpaces = arrayOfStrings.join(' ');

console.log('Joined without spaces : ', withoutSpaces);
console.log('Joined with spaces : ', withSpaces);
console.log();
