# Lesson Objectives

- Write a simple API in a NodeJS module
- Export an API in a NodeJS module
- Import and use an API using a NodeJS module

# Modules 

## Why need them

* Code reuse
* Single Responsibility (solve one problem at a time)

## How to create them

__Write re-usable pieces of code that solves a single problem__

* variables
* function
  
  * standard
  * arrow

# Exporting

* you are exporting an object

```
module.exports = {
};
```

## Sample Calculator

* Addition
* Subtraction
* Multiplication
* Division


# Importing

* you are importing an object
* destructuring syntax

```
const X = require('./path/relative/to/this/file.js');
const {a, b} = require('./path/relative/to/this/file.js');
```

# Write your own API

Take the ATM Lab and write some functionality in a module and consume it in
another.

# Key Terms

* `module.exports`
* `require()`

