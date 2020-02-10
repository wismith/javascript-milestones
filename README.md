# Milestones - Week 5

Below is a list of tasks. By the start of next week (Monday, February 17), everyone should...

1. Understand what the task is asking
1. Be able to do the task
1. Write code that makes it clear you understand what's happening

**FOR THE LOVE OF MONKEYS**, read the [Instructions](#instructions) first.

## Contents <!-- omit in toc -->

- [Instructions](#instructions)
  - [Demonstrations](#demonstrations)
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
    - [Looping With Numbers](#looping-with-numbers)
    - [Looping With Arrays](#looping-with-arrays)
      - [...Containing Numbers](#containing-numbers)
      - [...Containing Strings](#containing-strings)
  - [Looping With Objects](#looping-with-objects)
  - [Logical Operators](#logical-operators)
  - [Functions](#functions)
  - [File I/O](#file-io)
- [Understanding Code Like A Computer](#understanding-code-like-a-computer)

## Instructions

The snippets you write for each group of tasks can go in as many files as you'd like, but avoid putting everything in one giant file. It will make it hard for you to figure out what's going on.

There's no particular format or requirement. This isn't an assignment. It's a study guide. You need to make it work for you. If you're spending time thinking about how ***I*** want it formatted then you're missing the point!

We'll be sharing everyone's snippet after this is over, so write with that audience in mind. Be nice to your classmates. See the [Demonstrations](#demonstrations) section below for what helpful demonstrations look like.

You're free to use any built-in JavaScript function unless otherwise stated. For example, if you're asked to write a function that works like `Math.max`, don't use `Math.max`!

When you find a task you're not sure how to do, search for documentation, tutorials, guides, or anything else that might help you.

If you copy code from somewhere else, include the URL in a comment.

### Demonstrations

One of the tasks below is to use the `+` operator on two variables containing numbers and explain what that represents. Imagine you were writing something that served as a miniature tutorial for your other classmates. Both running the code and reading the code should reinforce how to use `+` and what it represents.

#### Helpful Demonstration <!-- omit in toc -->

When writing your demonstration, remember that people will be interacting with it in two ways:

1. Running the file and reading any output
1. Reading the code itself to make sense of the output

Here's a helpful demonstration:

```javascript
let num1 = 50;
let num2 = -76;

console.log('The value of num1 is:', num1);
console.log('The value of num2 is:', num2);
console.log('The sum of num1 and num2 is:', num1 + num2);
```

Someone who ran this code first would see a bunch of output. Once they opened the code, they'd be able to see which line of code produced the output they just saw. They'd be able to play with the values and see the output change in a useful way.

#### Unhelpful Demonstration <!-- omit in toc -->

This demonstration is much less helpful:

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

You will probably want to create more than one file to demonstrate everything below. Try to use one loop per task. Imagine your demonstrations being used in some online tutorial; a single loop that demonstrates 20 things will be confusing.

#### Looping With Numbers

You should be able to do the following using a loop:

- Print out every integer between `40` and `60` (including both `40` and `60`)
- Print out every even integer between `40` and `60` (including both `40` and `60`)
- Define variables `min` and `max` containing integers and...
  - Print out every integer between `min` and `max` (inclusive)
  - Print out every even integer between `min` and `max` (inclusive)
- Print the first `10` multiples of `7`
- Print the first `k` multiples of `7`, where `k` is a variable containing a positive integer
- Print the first `k` multiples of `n`, where `k` is a variable containing a positive integer and `n` is any number

#### Looping With Arrays

- Define an array called `coolArray` containing at least 4 elements of any type and...
  - Print every element of `coolArray`
  - Print every other element of `coolArray`, starting with the first element
  - Print the elements of `coolArray` in reverse order

##### ...Containing Numbers

- [ ] Declare an array containing at least 8 numbers called `listOfNumbers` and...
  - [ ] Print out the largest element
  - [ ] Print out the smallest element
  - [ ] Print out all the elements greater than `0`
  - [ ] Print out all the elements greater than `k`, where `k` is a variable containing a number
  - [ ] Print out all the even elements
- [ ] Using `sort()`...
  - [ ] Print out elements of `coolArray` sorted from largest to smallest
  - [ ] Print out the elements of `coolArray` sorted from smallest to largest

##### ...Containing Strings

- [ ] Define an array containing at least 8 strings called `listOfStrings` and...
  - [ ] Print out the longest string
  - [ ] Print out the shortest string
  - [ ] Print out all the strings longer than `3` characters
  - [ ] Print out all the strings longer than `minLength` characters, where `minLength` is a variable containing a number
  - [ ] Print out the first string that begins with the letter `A`
  - [ ] Print `'found it!'` if `listOfStrings` contains the string `'needle'`
- [ ] Using `sort()`...
  - [ ] Print out elements of `listOfStrings` sorted alphabetically (from A to Z)
  - [ ] Print out the elements of `listOfStrings` sorted reverse alphabetically (from Z to A)

### Looping With Objects

- [ ] Declare an object `coolObject` containing at least 5 key/value pairs and..
  - [ ] Print out every key and value in `coolObject`
  - [ ] Without changing `coolObject`, use `sort()` to...
    - [ ] Print every key and value in `coolObject` in alphabetical order (A to Z)
    - [ ] Print every key and value in `coolObject` in reverse alphabetical order (Z to A)
- [ ] Iterate over the `daysInMonth` object from the [Objects](#objects) section, printing out the name of every month that has `31` days.

### Logical Operators

In a file called `logic.js`, you should be able to do the following:

- [ ] Declare two numbers `num1` and `num2`. Print a one message if both are even, a different message if only one is even, and a third message if neither are even.
- [ ] Write code that makes use of the following logical operators:
  - [ ] `||`
  - [ ] `&&`
  - [ ] `!`

### Functions

In a file called `functions.js`, you should be able to define and call the following functions with some relevant example inputs. If they return a value but don't print anything, you should be able to print what they return.

- [ ] A function `greet` that takes in a string representing someone's first name and prints out a greeting. The greeting can be anything, but it should contain the given name.
- [ ] A function called `hotOrCold` that takes a number as input and returns:
    1. `'hot'` if the number is greater than `100`
    1. `'correct'` if the number is exactly `100`
    1. `'cold'` if the number is less than `100`
- [ ] A function `add` that takes two numbers as input and returns (not prints) their sum.
  - [ ] A function `sum` that takes an array of numbers as input and returns their sum (using the `add` function you defined above)
- [ ] A function `larger` that takes two numbers as input and returns the larger of the two (don't use the built-in `Math.max` function)
  - [ ] A function `largest` that takes an array of numbers as input an returns the largest in the array (using the function `larger` you defined above)
- [ ] A function `longer` that takes two strings as input and returns the longer of the two
  - [ ] A function `longest` that takes an array of strings as input and returns the longest string in the array (using the `longer` function you defined above)
- [ ] A function `reverse` that takes an array as input and returns a new array containing the same elements as the input array, but in reverse order (don't use the build-in `reverse()` function)
- [ ] A function `isChicagoPhoneNumber` that takes an array of US phone numbers as input and returns true if the area code is 773, 312, or 872. The phone numbers are strings that look like `'XXX-YYY-ZZZZ'`.
- [ ] A function `letterCounts` that takes a string as an input and returns an object whose keys are the letters in the string and whose values are the number of times a particular letter appears.

### File I/O

Create a file called `data.txt` that contains a few dozen random lines of varying length. Paste some song lyrics into the file, maybe.

In a file called `files.js`, you should be able to do the following:

- [ ] Read the contents of `data.txt` into a string
- [ ] Create an array containing one entry per line
- [ ] Print the longest and shortest lines in `data.txt`

## Understanding Code Like A Computer

Computers don't care what names we use to represent the work we want them to carry out. A function that adds two numbers could be called `mork`, `bananapeel`, or anything else. We only call it `add` because it helps *us*. The same goes for the code inside the function body.

Below are three functions whose names have nothing to do with the work they perform. You should be able to figure out what each function does.

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

console.log(papaya([10, -10, 40, 50, 108, 17]))
```

```javascript
function clowntown(octopus) {
  if (octopus < 0) {
    return -1 * octopus;
  } else {
    return octopus;
  }
}

console.log('clowntown(20) is:', clowntown(20));
console.log('clowntown(-20) is:', clowntown(-20));
console.log('clowntown(0) is:', clowntown(0));
console.log('clowntown(-108) is:', clowntown(-108));
```

```javascript
function chowhound(llama) {
  let razzleDazzle = [];

  for (let qq = 1; qq <= llama.length; qq++) {
    razzleDazzle.push(llama[llama.length - qq]);
  }

  return razzleDazzle;
}

console.log(chowhound(['A', 'B', 'C', 'D', 'E', 'F']));
```
