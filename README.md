# Milestones - Week 5

Here's a list of things everyone should be able to do with minimal effort by the start of next week (Monday, February 17). It should be clear what's being asked and how you'd demonstrate it.

## Contents <!-- omit in toc -->

- [Development Environment](#development-environment)
  - [Command Line](#command-line)
  - [Editing And Running Code](#editing-and-running-code)
  - [Node REPL](#node-repl)
- [JavaScript Fundamentals](#javascript-fundamentals)
  - [Output](#output)
  - [Numbers](#numbers)
  - [Strings](#strings)
  - [Arrays](#arrays)
  - [Conversions And Equivalents](#conversions-and-equivalents)

## Development Environment

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
- [ ] Write some JavaScript in in `sandbox.js`
- [ ] Use `node` in the terminal to run the file

(The name `sandbox.js` is just an example, you could name the file anything.)

### Node REPL

You should be able to...

- [ ] Use the `node` command to enter into the interactive JavaScript shell (REPL)
- [ ] Type small snippets of JavaScript in the REPL
- [ ] Exit the REPL

## JavaScript Fundamentals

### Output

- [ ] Use `console.log` to print to the console
- [ ] Use `typeof` to check what type of data a variable holds

### Numbers

You should be able to create a file called `numbers.js` and do the following, printing out relevant messages and results along the way:

- [ ] Assign different numbers to two variables named `num1` and `num2`
- [ ] Use the following operations on `num1` and `num2`:
  - [ ] `+`
  - [ ] `-`
  - [ ] `*`
  - [ ] `/`
  - [ ] `%`
  - [ ] `**`
  - [ ] `Math.floor(num1 / num2)`
- [ ] Predict how the output of your program will change when you change the values of `num1` and `num2`
- [ ] Assign a number to a variable named `blah` and...
  - [ ] Get the right-most digit in `blah` with the `%` operator
  - [ ] Determine whether `blah` is even or odd
  - [ ] Increment the value of `blah` by `1`
  - [ ] Increment the value of `blah` by `2`
  - [ ] Increment the value of `blah` by `10`
  - [ ] Assign a number to a variable named `k` and increment the value of `blah` by the value of `k`

### Strings

You should be able to create a file called `strings.js` and do the following, printing out relevant messages and results along the way:

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
  - [ ] Assign a number to a variable named `k` and get the character at index `k` in the string
  - [ ] Modify the value of `waffles` by appending the letter `'a'` to it
- [ ] Use template literals to print a formatted string containing dynamic information, e.g., if `firstName` is `'Jesse'`, use a template literal to print `'Hello, Jesse!'`.

### Arrays

You should be able to create a file called `arrays.js` and do the following, printing out relevant messages and results along the way:

- [ ] Assign an array (containing anything) to a variable named `coolArray`
- [ ] Print out every element of `coolArray`
- [ ] Print out every other element of `coolArray`

### Conversions And Equivalents

- Convert a number to a string, e.g., `1234` to `'1234'`
- Convert a string to a number, e.g., `'1234'` to `1234`
- Convert a string to an array containing its characters, e.g.,

  ```javascript
  'apples'
  ['a', 'p', 'p', 'l', 'e', 's']
  ```
