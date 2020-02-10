// Declare a variable 'personData' containing an empty object

const personData = {};

// Modify personData to add properties/attributes
console.log('personData : ', personData);

console.log('Adding a first name...')
personData.firstName = 'Jean-Luc';
console.log('personData : ', personData);

console.log('Adding a last name...');
personData.lastName = 'Picard';
console.log('personData : ', personData);

console.log('Adding an age...');
personData.age = 79;
console.log('personData : ', personData);


/*
Create an object 'daysInMonth' with key-value pairs
showing the # of days in each month
*/

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
console.log();
console.log('Object with (month: # days) pairs :', daysInMonth);
