// Using loops with numbers
console.log('Using loops with numbers!');
console.log();

// Print out every integer between min and max (inclusive)

// Using for loop (pay attention to =, <= in conditions)
let min = 40;
let max = 60;

console.log('Printing out integers from min (40) to max (60) using for loop:')
for (let i = min; i <= max; i++) {
  console.log(i);
}
console.log();

// Using while loop
console.log('Printing out integers from min (40) to max (60) using while loop:')
let counter = 40; // must establish a counter beforehand
while (counter <= max) {
  console.log(counter);
  counter++; // make sure to increment your counter within loop
}
console.log();

// Printing out every even integer between min and max (inclusive)

console.log('Printing out even integers from min (40) to max (60) using while loop:')
counter = min;
while (counter <= max) {
  if (counter % 2 === 0) { // "if" conditional to check if even
    console.log(counter);
  }
  counter++; // again, make sure to increment the counter
}
console.log();


// Print the first 'k' multiples of 'n'
let k = 7
let n = 4;

console.log(`Printing the first k (${k}) multiples of n (${n})...`);
for (let i = 1; i <= k; i++) {
  console.log(n * i);
}
console.log();
