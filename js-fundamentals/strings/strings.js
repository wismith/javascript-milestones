// Assign different strings to two variables:

let str1 = 'sanfrancisco';
let str2 = 'sushi';

// Print the values of these two variables
// Using console.log():
console.log('Printing the values of the two strings:');
console.log(`str1 : ${str1}`);
console.log(`str2 : ${str2}`);

// Concatenate the two strings
console.log();
let joined = String.prototype.concat(str1, str2);
let joined2 = str1 + str2; // This method also works
console.log(`These two strings concatenated together : ${joined}`);
console.log(`Same thing, done a different way : ${joined2}`);
console.log();

// Determine whether str2 appears in str1 :
console.log(`Does ${str2} appear in ${str1}?`);
if (String.prototype.includes(str1, str2)) {
  console.log('Yes, it does!');
} else {
  console.log('No, it doesn\'t!');
}
console.log();

// String operations on 'waffles'
let waffles = 'WaffleHouse';
console.log('Now we are going to do some operations on the string ', waffles, '.');


// Get length of string 'waffles'
let length = waffles.length;
console.log(`The string '${waffles}' has ${length} characters.`);

// Convert string to uppercase:
let inUpperCase = waffles.toUpperCase();
console.log(`${waffles} in all uppercase looks like : ${inUpperCase}`);

// Convert string to lowercase :
let inLowerCase = waffles.toLowerCase();
console.log(`${waffles} in all lowercase looks like : ${inLowerCase}`);

// Get the first character of the string:
console.log(`The character at index 0 of '${waffles}' is '${waffles[0]}'.`);

// Get the 2nd character of the string:
console.log(`The character at index 1 of '${waffles}' is '${waffles[1]}'.`);

// Get the last character of the string:
console.log(`The last character of '${waffles}' is '${waffles[waffles.length - 1]}'`);

// Get the character at index k of the string:
let k = 5;
let charK = waffles[k];
console.log(`The character at index k (${k}) of '${waffles}' is '${charK}'.`);

// Add 'a' to the end of waffles
waffles += 'a';
console.log(`Appending the letter 'a' to the end : '${waffles}'`);

// Note: almost all of these log statements have used template literals for formatting.
