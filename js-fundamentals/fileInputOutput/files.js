// Working with files!
console.log('Working with files!');
console.log();

// Require the fs module
let fs = require('fs');

// Read the contents of 'data.txt' into a string
let textString = fs.readFileSync('data.txt', 'utf-8').trimEnd();
// I used trimEnd() to remove the final blank line from the file
console.log('Reading the text file into a string...');
console.log(textString);
console.log();

// Create an array containing one entry per line
// split string by \n (new line)
let arrayOfEntries = textString.split('\n');
console.log('Creating an array of these entries...');
console.log(arrayOfEntries);
console.log();

// Print the largest and shortest lines from the data
function printShortest(myArray) {
  let shortestEntry = myArray.reduce((a, b) => {
    return (a.length < b.length ? a : b);
  });
  console.log(shortestEntry);
}

function printLongest(myArray) {
  let longestEntry = myArray.reduce((a,b) => {
    return (a.length > b.length ? a : b);
  });
  console.log(longestEntry);
}
console.log('Longest entry of the data: ');
printLongest(arrayOfEntries);
console.log();
console.log('Shortest entry of the data:');
printShortest(arrayOfEntries);
console.log();
