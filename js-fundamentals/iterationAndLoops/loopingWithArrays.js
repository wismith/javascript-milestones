// Looping with Arrays
console.log('Looping with Arrays!')
console.log();

let coolArray = [1, 'hello', true, ['a','b','c']];

console.log('My array is ', coolArray);
console.log();

// Print out every element of coolArray
console.log('Printing out each element of my array...');
for (let element of coolArray) {
  console.log(element);
}
console.log();

// Print out every other element of coolArray, starting with the first
console.log('Printing out every other element, starting with first...');

// Still use for loop, but with iterator incremented by 2 each time
for (let i = 0; i < coolArray.length; i += 2) {
  console.log(coolArray[i]);
}
console.log();


// Print out the elements of coolArray in reverse order
console.log('Printing out the elements of my array in reverse order...');

// Use for loop with a decrementing iterator
for (let i = coolArray.length - 1; i >= 0; i--) {
  console.log(coolArray[i]);
}
console.log();
