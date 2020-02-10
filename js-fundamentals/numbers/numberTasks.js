// Operations on "blah"
let blah = 48;
console.log(`The value of "blah" is ${blah}`);

// Get the right-most digit of 'blah' using the % operator:

function getRightmost(num) {

  /* We want this function to apply to any number,
  so we will use num % 10 to find the last digit.
  */
  return num % 10;
}

console.log('Finding the rightmost digit of blah:');
console.log(`Rightmost digit of ${blah} is ${getRightmost(blah)}`);

for (let num of [68959,33,4039, 2984]) {
  console.log(`Rightmost digit of ${num} is ${getRightmost(num)}`);
}
console.log();

// Determine whether blah is even or odd;

function evenOrOdd(blah) {
  /* Here, we use the structure num % 2 === 0 that returns
  a boolean "true" if num is even, and 'false' if odd */

  if (blah % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

// Show results in terminal
console.log(`Determining whether blah (${blah}) is even or odd:`);
console.log(`Blah: ${blah} is ${evenOrOdd(blah)}`);
console.log();
console.log('Likewise:');
for (let blah of [34525432, 54315,43,543,454]) {
  console.log(`Blah: ${blah} is ${evenOrOdd(blah)}`);
}
console.log();


// Increment blah by various numbers:

console.log(`The value of blah is still ${blah}.`);
console.log('Now, we will increment its value in a few different ways');

// Increment blah by 1: use the special ++ operator
blah++;
console.log(`Incremented by 1 : ${blah}`);

// Increment blah by 2: use the normal syntax +=
blah += 2;
console.log(`Incremented by 2 : ${blah}`);


// Increment blah by 10: same as above
blah += 10;
console.log(`Incremented by 10 : ${blah}`);

// Increment blah by 'k':

for (let k of [100,1000,10000]) {
  blah += k;
  console.log(`Incremented by k (${k}) : ${blah}`);
}

// Decrementing blah by various numbers:
console.log();
console.log(`The value of blah is ${blah}.`);
console.log('Now, we will decrement blah in a few different ways.');

// Decrement blah by k: use syntax: blah -= k
for (let k of [10000, 1000, 100]) {
  blah -= k;
  console.log(`Decremented by k (${k}) : ${blah}`);
}

// Decrement blah by 10: same syntax as above
blah -= 10;
console.log(`Decremented by 10 : ${blah}`);

// Decrement blah by 2: same
blah -= 2;
console.log(`Decremented by 2 : ${blah}`);

// Decrement blah by 1: use syntax: blah--
blah--;
console.log(`Decremented by 1 : ${blah}`);
console.log(`Now the value of blah is back to the original value ${blah}.`);
