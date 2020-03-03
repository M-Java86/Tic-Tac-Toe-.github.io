# Array Iteration Methods & Higher-Order Functions

## Learning Objectives

- Define higher-order functions
- Use higher-order functions to iterate over arrays
- Describe the uses of `forEach`, `map`, `filter`, and `reduce`
- Define `every` and `some`
- Describe a closure

## Framing & Review

Today we will cover some array methods which are used to transform arrays.
This could be as simple as multiplying each number in an array of numbers by a certain factor, or adding them all together to obtain their sum.

### JavaScript Collections

Numbers, Strings, and Booleans are our basic building blocks of data but on their own, they don't express much. We use collections, most commonly Objects and Arrays to build up data to describe more complex entities.

**Arrays** hold their elements in sequence and are generally used to store collections of related things.

**Objects** hold their elements in key-value pairs and are generally used either to store & look up values (like word definitions in a dictionary), or to describe some thing or entity with various attributes.

## Higher-Order Functions

Functions that take other functions as arguments or return them as output are called **higher-order functions**. JavaScript provides a number of useful array methods that fit this definition that provide a level of abstraction to simplify array iteration (going through each element in an array and performing some operation).

### Passing Functions to Functions

In order to explore some of the higher-order functions JavaScript provides, let's set up a simple development environment.  Open up Repl.it and start a new JS environment.

We'll use the following array for the next few examples...

```js
const wdiInstructors = [
  {
    name: {
      first: 'Jamie',
      last: 'King'
    },
    cohort: 14
  },
  {
    name: {
      first: 'Daniel',
      last: 'Pino'
    },
    cohort: 18
  },
  {
    name: {
      first: 'Danny',
      last: 'Hurley'
    },
    cohort: 10
  },
  {
    name: {
      first: 'Maron',
      last: 'Woodruff'
    },
    cohort: 20
  },
  {
    name: {
      first: 'Marc',
      last: 'Wright'
    },
    cohort: 4
  },
  {
    name: {
      first: 'Shawn',
      last: 'Johnson'
    },
    cohort: 7
  },
  {
    name: {
      first: 'Mike',
      last: 'Hopper'
    },
    cohort: 20
  }
]
```

#### .forEach()

Very frequently, we will want to go through an array and do something for every element in the array.

As an example, we'll loop through the above array printing the line `'<Instructor name> is an instructor for WDI<cohort number>'` to the console for each instructor.

In languages without higher-order functions, we would need to use a loop to perform this task (and we can do so in JS)...

```js
for (let i = 0; i < wdiInstructors.length; i++) {
  let instructor = wdiInstructors[i]
  let instructorName = instructor.name.first + ' ' + instructor.name.last
  let instructorGreeting = `Hi, I'm ${instructorName}! I'm an instructor for WDI${instructor.cohort}`
  console.log(instructorGreeting)
}
```

If we want, we can write a function that encapsulates the operation taken on each instructor object...

```js
function printInstructorGreeting (instructor) {
  let instructorName = instructor.name.first + ' ' + instructor.name.last
  let instructorGreeting = `Hi, I'm ${instructorName}! I'm an instructor for WDI${instructor.cohort}`
  console.log(instructorGreeting)
}
```

And then rewrite the loop to call this function and pass in each instructor object as an argument...

```js
for (let i = 0; i < wdiInstructors.length; i++) {
  printInstructorGreeting(wdiInstructors[i])
}
```

This process of iterating through an array is so common that JavaScript provides an array method for it called `forEach`. Methods are functions attached to an object (in this case, attached to the Array). Let's update our code to `forEach` in place of a `for` loop.

```js
wdiInstructors.forEach(printInstructorGreeting)
```
> Note that here we are *referencing* the `printInstructorGreeting` function, not invoking it

This will go through each object in the `wdiInstructors` array and execute the `printInstructorGreeting` function for each object in it, passing each object into the function as an argument.

Commonly, we might write this using an *anonymous function* (unnamed) instead of a *named function* (as we did above). If we changed the above code to use an anonymous function, it would look like this:

```js
wdiInstructors.forEach(function (instructor) {
  let instructorName = instructor.name.first + ' ' + instructor.name.last
  let instructorGreeting = `Hi, I'm ${instructorName}! I'm an instructor for WDI${instructor.cohort}`
  console.log(instructorGreeting)
})
```

> Note that this is functionally no different than the above code snippet, only here we are defining an anonymous function and passing it in instead of defining one externally and referencing it as an argument.

We could rewrite this to use ES6 arrow functions as well...

```js
wdiInstructors.forEach((instructor) => {
  let instructorName = instructor.name.first + ' ' + instructor.name.last
  let instructorGreeting = `Hi, I'm ${instructorName}! I'm an instructor for WDI${instructor.cohort}`
  console.log(instructorGreeting)
})
```

##### Return Value

When using any function or method, it is important to keep in mind the return value that it will output. With `forEach`, the return value is `undefined`. As such, we should use `forEach` when we want to *use* each item in an array to produce some *side effect*, but **not** to produce a new version of the array. For example, this would be a misuse of `forEach`...

```js
let letters = ['a', 'b', 'c']
let capLetters = letters.forEach((letter) => {
  return letter.toUpperCase() //this return is pointless
})
console.log(capLetters)
// => undefined
```

If we wanted to create a new, modified version of an array, we would use `map`...

#### .map()

We've discussed functions that were called for their **side effect** versus functions that are called for their **return value** or **output**. In the previous example, we used `forEach` to produce some *side effect*.

Frequently, however, rather than do something **with** each item in an array, we want to do something **to** each item, applying some transformation and producing a new, modified version of the array.

`forEach` has a closely related sibling `map` that instead of calling a passed function for its effect, it calls a passed function for its return value and creates a new array of the return values.

Let's write a loop to create an array called `instructorNames` that will be an array of 6 strings, the instructor names.

```js
const instructorNames = []
for (let i = 0; i < wdiInstructors.length; i++) {
  let instructor = wdiInstructors[i]
  let instructorName = instructor.name.first + ' ' + instructor.name.last
  instructorNames.push(instructorName)
}
```

Similar to the process before, let's abstract the block of code in the `for` loop into a function, and call it `getFullName`...

```js
function getFullName (instructor) {
  return instructor.name.first + ' ' + instructor.name.last
}
```

Next, we'll write a loop that calls this function on each instructor in the array and stores the results in the `instructorNames` array....

```js
const instructorNames = []
for (let i = 0; i < wdiInstructors.length; i++) {
  let fullName = getFullName(wdiInstructors[i])
  instructorNames.push(fullName)
}
```

Now, instead of using a `for` loop to populate an external array (side effect), let's use the `map` array method to create a new array using `map`'s **return value**:

```js
const instructorNames = wdiInstructors.map(getFullName)
```

We can also use an anonymous function instead of a named one...

```js
const instructorNames = wdiInstructors.map((instructor) => {
  return instructor.name.first + ' ' + instructor.name.last
})
```

#### Return Value

`map` will return an array that is composed of the **return values** of the function given when called with each item of the array passed in as an argument.

#### Practicing with Map 

[CodeWars](https://www.codewars.com/kata/coding-meetup-number-2-higher-order-functions-series-greet-developers)


## END SESSION 1

## Higher Order Functions Part 2

### Filter

Another common procedure is to filter elements from an array based on some custom condition.

The condition will take the form of a function that will return `true` or `false` when given an element from the collection.

First we'll write the filter function (the custom condition)...

```js
function teachesWDI20(instructor) {
  return instructor.cohort === 20
}
```

We can write a loop that uses this function...

```js
const wdi20 = []
for (let i = 0;  i < wdiInstructors.length; i++) {
  if (teachesWDI20(wdiInstructors[i])) {
    wdi20.push(wdiInstructors[i])
  }
}
```

Like `.map()` and `.forEach()`, `filter` is available directly on arrays...

```js
const wdi20two = wdiInstructors.filter(teachesWDI20)
```

Or using an anonymous function...

```js
const wdi20three = wdiInstructors.filter((instructor) => {
  return instructor.cohort === 20
})
```

#### Return Value

`filter` will return a new, modified array composed of items for which the passed in function **returns true** when called on each item.

#### Code Challenge 

[Codewars](http://www.codewars.com/kata/coding-meetup-number-1-higher-order-functions-series-count-the-number-of-javascript-developers-coming-from-europe)

#### Sort 

The `sort` method is another higher-order function which gets a test function but the sort test is slightly more complicated.

The test function for `sort` is called with two arguments `a` and `b` which represent any two elements being sorted.

Rather than returning `true` or `false` as in the case of the other test functions we've looked at, the compare function should...
- return a negative number if `a` should come before `b`
- return 0 if `a` and `b` are equal
- return a positive number if `a` should come after `b`

By default, `sort` uses a compare function that converts `a` and `b` to strings and sorts based on **unicode** values (alphabetized but with all uppercase characters before all lower case characters).

This leads to the odd behavior of `10` being sorted in front of `2`.

```js
[111, 2, 10, 20, 3, -1, 12].sort()
// => [-1, 10, 111, 12, 2, 20, 3]
```

To write a compare function that works as expected...

```js
function compareNumbers(a,b) {
  return a - b
}

// with a named function
[111, 2, 10, 20, 3, -1, 12].sort(compareNumbers)
// => [-1, 1, 2, 3, 10, 12, 20]

// with an anonymous function
[111, 2, 10, 20, 3, -1, 12].sort((a, b) => a - b)
// => [-1, 1, 2, 3, 10, 12, 20]
```

How would we write a compare function to sort our capitals from most northern to most southern?

### [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) (15 minutes / 02:10)

The most flexible array method function is called `reduce`. Reduce, as the name implies, can take an array and reduce to it to fewer things.However, since it is the most flexible of the array iteration methods, it can implement the functionality of `map`, `filter`, `forEach`, etc.

Reduce is usually difficult to grasp at first; don't stress about this. It is definitely not something you need to have mastered, it is just good to have an early awareness. It takes a fair amount of practice to intuitively use `.reduce()` when solving problems.

#### Example

We can take the sum of an array of numbers (i.e. reduce the set of numbers to a sum)...

```js
const total = [1, 3, 5, 7].reduce((sum, num) => sum + num, 0)
```

Mapping with reduce...

```js
const instructorNames5 = wdiInstructors.reduce((names, instructor) => {
  names.push(instructor.name.first + ' ' + instructor.name.last)
  return names
}, [])
```

Filtering even numbers...

```js
const odds = [1, 2, 3, 4, 5, 6, 7].reduce((odds, num) => {
  if (num % 2) { // false if num % 2 === 0
    odds.push(num)
  }
  return odds
}, [])
```

Or count even numbers...

```js
const numEvens = [1, 2, 3, 4, 5, 6, 7].reduce((count, num) => {
  if (!(num % 2)) { // false if num % 2 !== 0
    count++
  }
  return count
}, 0)
```

#### Histogram

For a step by step of how the mechanics work, check out [this section on the MDN page for reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#How_reduce_works).

```js
const names = ['Tabitha', 'Jimothy', 'Toad', 'Tabitha', 'Bertha']

const histogramObject = names.reduce((histogram, name) => {
  if (histogram[name]) {
    histogram[name]++
  } else {
    histogram[name] = 1
  }
  return histogram
}, {})
// histogramObject is:
// { 'Tabitha': 2, 'Jimothy': 1, 'Toad': 1, 'Bertha': 1 }
```

### Review and Questions 

- Check out the [Coding Meetup Kata's](http://www.codewars.com/kata/coding-meetup-number-1-higher-order-functions-series-count-the-number-of-javascript-developers-coming-from-europe) for lots more practice
- [Fun Fun Functions: Higher Order Functions](https://www.youtube.com/watch?v=BMUiFMZr7vk)
- [Higher Order Functions Visualized](https://atendesigngroup.com/blog/array-map-filter-and-reduce-js)
- [Node School Workshoppers](https://nodeschool.io/#workshoppers)
- [Eloquent JS Higher-Order Functions](http://eloquentjavascript.net/05_higher_order.html)

#### Review
- What is the difference between output and a side effect?
- What is the difference between an argument and a parameter?
- What is the difference between referencing and invoking a function?
