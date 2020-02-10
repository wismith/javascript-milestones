# Milestones - Week 5

## Contents <!-- omit in toc -->

- [Instructions](#instructions)
  - [Examples](#examples)
- [Tasks - Development Environment](#tasks---development-environment)
  - [Command Line](#command-line)
  - [Editing And Running Code](#editing-and-running-code)
  - [Node REPL](#node-repl)
- [Tasks - JavaScript Fundamentals](#tasks---javascript-fundamentals)
  - [Console Output And Debugging](#console-output-and-debugging)
  - [Numbers](#numbers)
  - [Strings](#strings)
  - [Arrays](#arrays)
  - [Objects](#objects)
  - [Conversions And Equivalents](#conversions-and-equivalents)
  - [Iteration / Looping](#iteration--looping)
  - [Logical Operators](#logical-operators)
  - [Functions](#functions)
  - [File I/O](#file-io)
- [Rename Code](#rename-code)

## Instructions

Below is a list of tasks. By the start of next week (Monday, February 17), everyone should...

1. Understand what the task is asking
1. Be able to do the task
1. Write code that makes it clear you understand what's happening

### Examples

One of the tasks below is to use the `+` operator on two variables containing numbers and explain what that represents. Imagine you were writing something that served as a miniature tutorial for your other classmates. Both running the code and reading the code should reinforce how to use `+` and what it represents.

#### Helpful Example <!-- omit in toc -->

Write examples that share the same spirit as the following example:

```javascript
let num1 = 50;
let num2 = -76;

console.log('The value of num1 is:', num1);
console.log('The value of num2 is:', num2);
console.log('The sum of num1 and num2 is:', num1 + num2);
```

Someone who ran this code first would see a bunch of output. Once they opened the code, they'd be able to see which line of code produced the output they just saw. They'd be able to play with the values and see the output change in a useful way.

#### Unhelpful Example <!-- omit in toc -->

This example is not helpful to you or anyone else:

```javascript
let num1 = 50;
let num2 = -76;

console.log(num1);
console.log(num2);
console.log(num1 + num2);
```

While this code uses `+`, the output will be nothing but a column of numbers. What do those numbers mean? How do we know which line of output corresponds to which line of code? How can someone unfamiliar with `+` make predictions about how the output would change if they changed the values of `num1` and `num2`?

## Tasks - Development Environment

### Command Line

You should be able to...

- [ ] Open the terminal outside of VS code
- [ ] Use `cd` to navigate between directories
- [ ] Use `ls` to list the contents of a directory
- [ ] Use `mkdir` to create an empty directory
- [ ] Use `code` to open VS Code
- [ ] Use `git clone` to download a git repository onto your computer

### Editing And Running Code

You should be able to...

- [ ] Create a new (empty) JavaScript file named `sandbox.js` and edit it in VS code
- [ ] Write some JavaScript in `sandbox.js`
- [ ] Use `node` in the terminal to run the file

The name `sandbox.js` is meant as an example. You could name the file anything.

### Node REPL

You should be able to...

- [ ] Use the `node` command to enter into the interactive JavaScript shell (REPL)
- [ ] Type small snippets of JavaScript in the REPL and observe how they're evaluated
- [ ] Exit the REPL

## Tasks - JavaScript Fundamentals

### Console Output And Debugging

- [ ] Use `console.log` to print to the console
- [ ] Use `typeof` to check what type of data a variable holds

### Numbers

In a file named `numbers.js`, you should be able to do the following:

- [ ] Assign different numbers to two variables named `num1` and `num2`
- [ ] Use the following operations on `num1` and `num2` and explain what they represent:
  - [ ] `+`
  - [ ] `-`
  - [ ] `*`
  - [ ] `/`
  - [ ] `%`
  - [ ] `**`
  - [ ] `Math.floor(num1 / num2)`
- [ ] Predict how the output of your program will change when you change the values of `num1` and `num2`
- [ ] Assign a number to a variable named `blah` and...
  - [ ] Get the right-most digit in `blah` using the `%` operator
  - [ ] Determine whether `blah` is even or odd
  - [ ] Increment the value of `blah`...
    - [ ] By `1`
    - [ ] By `2`
    - [ ] By `10`
    - [ ] By `k`, where `k` is a variable containing a number
  - [ ] Decrement the value of `blah`...
    - [ ] By `1`
    - [ ] By `2`
    - [ ] By `10`
    - [ ] By `k`, where `k` is a variable containing a number

### Strings

In a file called `strings.js`, you should be able to do the following:

- [ ] Assign different strings to two variables named `str1` and `str2` and...
  - [ ] Print the values of `str1` and `str2`
  - [ ] Concatenate `str1` and `str2`
  - [ ] Determine whether `str1` appears in `str2` using `String.prototype.includes`
- [ ] Assign a string to a variable named `waffles` and...
  - [ ] Get the number of characters in the string (its length)
  - [ ] Convert it to uppercase
  - [ ] Convert it to lowercase
  - [ ] Get the 1st character in `waffles` (at index `0`)
  - [ ] Get the 2nd character in `waffles` (at index `1`)
  - [ ] Get the last character in `waffles`
  - [ ] Define a variable `k` containing a number and get the character at index `k` in `waffles`
  - [ ] Modify the value of `waffles` by appending the letter `'a'` to it
- [ ] Use template literals to print a formatted string containing dynamic information, e.g., if `firstName` is `'Jesse'`, use a template literal to print `'Hello, Jesse!'`.

### Arrays

In a file called `arrays.js`, you should be able to do the following:

- [ ] Declare a variable named `coolArray` containing an array of at least 5 elements (of any type)
- [ ] Get the length of `coolArray`
- [ ] Get the value of...
  - [ ] The 1st element in `coolArray` (at index `0`)
  - [ ] The 2nd element in `coolArray` (at index `1`)
  - [ ] The last element in `coolArray`
  - [ ] The element at index `k` in `coolArray`, where `k` is a variable containing a number
- [ ] Change the value of...
  - [ ] The 1st element in `coolArray` (at index `0`)
  - [ ] The 2nd element in `coolArray` (at index `1`)
  - [ ] The last element in `coolArray`
  - [ ] The element at index `k` in `coolArray`, where `k` is a variable containing a number
- [ ] Append an element to `coolArray`
- [ ] Remove the last element of `coolArray`
- [ ] Prepend an element to `coolArray`
- [ ] Remove the first element of `coolArray`

### Objects

In a file called `objects.js`, you should be able to do the following:

- [ ] Declare a variable named `personData` containing an empty object `{}`
- [ ] Modify `personData` so that...
  - [ ] The value for the key `firstName` is `'Jean-Luc'`
  - [ ] The value for the key `lastName` is `'Picard'`
  - [ ] The value for the key `age` is `79`
- [ ] Create an object named `daysInMonth` whose keys are strings of the month names `'January'`, `'February'`, etc. and the keys are the number of days in that month.

### Conversions And Equivalents

In a file called `conversions.js`, you should be able to do the following:

- [ ] Convert a number to a string, e.g., `1234` to `'1234'`
- [ ] Convert a string to a number, e.g., `'1234'` to `1234`
- [ ] Convert a string to an array containing its characters, e.g.,

  ```javascript
  'apples'
  ['a', 'p', 'p', 'l', 'e', 's']
  ```

- [ ] Given an array containing strings, join the strings together into a single string

  ```javascript
  ['one', '--two--', 'three']
  'one--two--three'
  ```

- [ ] Given an array containing strings, join the strings together into a string separated by a `|` character

  ```javascript
  ['one', 'two', 'three']
  'one|two|three'
  ```

### Iteration / Looping

In a file called `looping.js`, you should be able to do the following using a loop:

- Print out every integer between `40` and `60` (including both `40` and `60`)
- Print out every even integer between `40` and `60` (including both `40` and `60`)
- Define variables `min` and `max` containing integers and...
  - Print out every integer between `min` and `max` (inclusive)
  - Print out every even integer between `min` and `max` (inclusive)
- Print the first `10` multiples of `7`
- Print the first `k` multiples of `7`, where `k` is a variable containing a positive integer
- Print the first `k` multiples of `n`, where `k` is a variable containing a positive integer and `n` is any number
- Define an array called `coolArray` containing at least 4 elements of any type and...
  - Print every element of `coolArray`
  - Print every other element of `coolArray`, starting with the first element
  - Print the elements of `coolArray` in reverse order (without using `.reverse()`)
- [ ] Declare an array containing at least 8 numbers called `listOfNumbers` and...
  - [ ] Print out the largest element
  - [ ] Print out the smallest element
  - [ ] Print out all the elements greater than `0`
  - [ ] Print out all the elements greater than `k`, where `k` is a variable containing a number
  - [ ] Print out all the even elements
- [ ] Define an array containing at least 8 strings called `listOfStrings` and...
  - [ ] Print out the longest string
  - [ ] Print out the shortest string
  - [ ] Print out all the strings longer than `3` characters
  - [ ] Print out all the strings longer than `minLength` characters, where `minLength` is a variable containing a number
  - [ ] Print out the first string that begins with the letter `A`
  - [ ] Print `'found it!'` if `listOfStrings` contains the string `'needle'`
- [ ] Declare an object `coolObject` containing at least 5 key/value pairs and print out every key and value in `coolObject`

### Logical Operators

- [ ] Declare two numbers `num1` and `num2`. Print a one message if both are even, a different message if only one is even, and a third message if neither are even.

### Functions

In a file called `functions.js`, you should be able to define and call the following functions with some relevant example inputs. If they return a value but don't print anything, you should be able to print what they return.

- [ ] A function `greet` that takes in a string representing someone's first name and prints out a greeting.
- [ ] A function `add` that takes two numbers as input and returns (not prints) their sum.
- [ ] A function `larger` that takes two numbers as input and returns the larger of the two
- [ ] A function `longer` that takes two strings as input and returns the longer of the two
- [ ] A function `sum` that takes an array of numbers as input and returns their sum
- [ ] A function `reverse` that takes an array as input and returns a new array containing the same elements as the input array, but in reverse order

### File I/O

Create a file called `data.txt` that contains a few dozen random lines of varying length. Paste some song lyrics into the file, maybe.

In a file called `files.js`, you should be able to do the following:

- [ ] Read the contents of `data.txt` into a string
- [ ] Create an array containing one entry per line
- [ ] Print the longest and shortest lines in `data.txt`

## Rename Code

Each of the following functions does something straightforward, but the names used in the code are terrible. Figure out what the code does and give the parts better names.

Definitely read the code and try to make sense of it that way, but also copy the poorly-named code into an environment where you can experiment with it. Call the functions with different inputs to figure out what it's doing.

```javascript
function papaya(meow) {
  let x = meow[0];

  for (let zork = 0; zork < meow.length; zork++) {
    let potato = meow[zork];

    if (potato > x) {
      x = potato;
    }
  }

  return x;
}

console.log(papaya[10, -10, 40, 50, 108, 17]);
```

```javascript
function chowhound(llama) {
  let x = [];

  for (let qq = 1; qq <= llama.length; qq++) {
    x.push(llama[llama.length - qq]);
  }

  return x;
}

console.log(chowhound(['A', 'B', 'C', 'D', 'E', 'F']));
```

```javascript

```
