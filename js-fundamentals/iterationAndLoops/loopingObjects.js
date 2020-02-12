// Looping with Objects
console.log('Looping with Objects is fun!');

let coolObject = {
  name : 'Larry',
  occupation : 'cable guy',
  region : 'south',
  food : 'fried pickles',
  age : 56,
}

console.log('My cool Object is ', coolObject);
console.log();

// Print out every key and value in coolObject
// Use for...in loop for object
console.log('Printing all key/value pairs in coolObject...')
for (let property in coolObject) {
  if (coolObject.hasOwnProperty(property)) { // We need to confirm if this property exists in the object
    console.log(property,' : ', coolObject[property]);
  }
}
console.log();

// Use sort() to print every key/value in A-Z order

console.log('Printing all key/value pairs, sorted A-Z by key');

// Use Object.keys(object) to get an iterable list of keys
for (let key of Object.keys(coolObject).sort()) {
  console.log(`${key} : ${coolObject[key]}`); // template literal to print it out all nice
}
console.log();

// Use sort() to print every key/value in Z-A order

console.log('Printing all key/value pairs, sorted Z-A by key');
for (let key of Object.keys(coolObject).sort().reverse()) {
  console.log(`${key} : ${coolObject[key]}`);
}
console.log();


// Iterate over daysInMonth object from other exercise, printing out name
// of every month that has 31 days

const daysInMonth = {
  'January' : 31,
  'February' : 28,
  'March' : 31,
  'April' : 30,
  'May' : 31,
  'June' : 30,
  'July' : 31,
  'August' : 31,
  'September' : 30,
  'October' : 31,
  'November' : 30,
  'December' : 31,
}
console.log('My daysInMonth object: ', daysInMonth);
console.log();

console.log('The months that have 31 days are: ');
for (let key of Object.keys(daysInMonth)) {
  if (daysInMonth[key] === 31) {
    console.log(key);
  }
}
console.log();
