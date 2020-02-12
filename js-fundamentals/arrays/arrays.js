// Make an variable 'coolArray' containing an array of at least 5 elements

let coolArray = ['a', 4, true, 'will', {'a':1, 'b':2}];
console.log(`coolArray :`, coolArray);
// Get length of coolArray:
console.log(`The length of coolArray is ${coolArray.length}`);

// Get values of coolArray at indices:
let firstElement = coolArray[0];
console.log(`The first element of coolArray is ${firstElement}`);

let secondElement = coolArray[1];
console.log(`The second element of coolArray is ${secondElement}`);

let lastElement = coolArray[coolArray.length - 1];
console.log(`The last element of coolArray is ${lastElement}`);

let k = 3;
let elementAtK = coolArray[k];
console.log(`The element of coolArray at index k (${k}) is ${elementAtK}`);

// Changing the value of different elements
console.log();
console.log(`coolArray :`, coolArray);

console.log(`Changing the value of index 0...`);
coolArray[0] = 'b';
console.log(`coolArray :`, coolArray);

console.log('Changing the value of index 1...');
coolArray[1] = 10;
console.log(`coolArray :`, coolArray);

console.log('Changing the last element...');
coolArray[coolArray.length - 1] = 'hey';
console.log(`coolArray :`, coolArray);

console.log('Changing the element at index k (4)...');
k = 4;
coolArray[k] = 'myName';
console.log(`coolArray :`, coolArray);
console.log();


// Adding/removing elements

console.log('Adding an element to the end of coolArray...');
coolArray.push('sunshine');
console.log('coolArray: ', coolArray);

console.log('Removing the last element of coolArray...');
coolArray.pop();
console.log('coolArray: ', coolArray);

console.log('Adding element to the start of coolArray...');
coolArray.unshift(24);
console.log('coolArray: ', coolArray);

console.log('Removing the first element of coolArray...');
coolArray.shift();
console.log('coolArray: ', coolArray);
