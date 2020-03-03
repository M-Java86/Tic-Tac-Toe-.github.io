[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Control Flow

Control flow is a very important, foundational concept in programming. At it's
core, control flow is about responding to data.

## Prerequisites

* JavaScript syntax
* Basic data types (Numbers, Booleans, Strings)
* Operators (arithmatic, logic, and comparison)
* Arrays and Objects

## Objectives

By the end of this, developers should be able to:

* Describe the role of control flow in programming
* Utilize `while` loops, `for` loops, and `for`/`in` loops
* Write conditional statements using `if` and `else if`
* Identify problem types and match to the appropriate control flow statements
* Iterate over arrays using loops

## Introduction (5 min / 0:10)

Control flow is simply applying conditional logic to how your code is run. 
You may want to run certain blocks of code but not others, or you might want to run certain code blocks over and over again. 
We probably wouldn't want to show a user account page to a user who isn't logged in, since there would be no data to display!

## Types of Control Flow (15 min / 0:25)

We're going to learn about two new forms of control flow; you already know one!

The first form of control flow is: **linear**.

![linear control flow](https://eloquentjavascript.net/img/controlflow-straight.svg)

> Source: [Eloquent JavaScript, Ch. 02 Program Structure](https://eloquentjavascript.net/02_program_structure.html)

Linear control flow simply means that our data flows through our code, one line
after the next. Execution starts at the first line of code, moves on to the
second, then the third, and so on until the end of the file, when execution
stops.

The second form of control flow is: **conditional**.

![Conditional control
flow](https://eloquentjavascript.net/img/controlflow-if.svg)

> Source: [Eloquent JavaScript, Ch. 02 Program Structure](https://eloquentjavascript.net/02_program_structure.html)

We will often run in to scenarios where we want one block of code to run if, and
only if, a particular condition is met. Perhaps we're asking a user for their
age and we want to ensure that the value they give us is a number greater than
0. Conditional execution in JavaScript is achieved with the `if` statement:

```js
if (age >= 16) {
  console.log('You can drive!')
}
```

In the above snippet of code, we will only see the message `'you can drive!'`
***if*** the `age` variable is `16` or greater. Later, we'll explore `else` and
`else if` - ways for us to test other conditions or run code specifically when
our condition *is not* met. *We'll dive into this pattern more in a few minutes!*

The third form of control flow is: **looping**.

![Looping control floow](https://eloquentjavascript.net/img/controlflow-loop.svg)

Looping is extremely powerful and there are two ways to think about it:

1. Loop *until* some condition is false
1. Continue to loop *while* some condition is true

The distinction may seem minor, but the implications are anything but. In
programming (and in JavaScript), we express these with `for` loops or `while`
loops, respectively.

`for` loops are great for iterating or counting. Here is an example of a `for`
loop that performs an action 5 times (in this case, prints the string `'hello
world'`):

```js
for (let i = 0; i < 5; i++) {
  console.log("hello world")
}
```

In this snippet of code, the message will continue to print until the condition
(`i < 5`) is not true. *We'll dive into this pattern more in a few minutes!*

Contrast the above snippet with the following, demonstrating a `while` loop:

```js
num = 0
while (num < 5) {
  console.log("hello world")
  num += 1 // short-hand for num = num + 1
}
```

This snippet is actually doing the same thing: printing `"hello world"` 5 times. The
message will continue to print ***while*** the `num` variable is less than 5. `while` loops are great for when you *do not know* how many times you want the code to run. *We'll dive into this pattern more in a few minutes!*

## Conditionals (10 min / 0:35)

Conditionals are a common feature of programming languages because it's handy to
execute different blocks of code depending on whether a condition(s) is met.

Conditionals follow this pattern:

```js
if (condition) {
  // code here will run if the condition evaluates to true
}
```

> **Review Question:** What do 'Truthy' and 'Falsey' mean?

The above is a simple conditional statement, with only a single condition. We
can add a negative condition (code that will run if the condition is `false`)
and we can add additional conditions.

If we have code we want to run if our condition is false, we use `else`:

```js
if (condition) {
  // code here will run if the condition evaluates to true
} else {
  // code here will run if the condition evaluates to false
}
```

If we want to test multiple conditions, we can do so by combining `else` and
`if`:

```js
if (condition) {
  // code here will run if the condition evaluates to true
} else if (anotherCondition) {
  // code here will run if the second condition evaluates to true
} else {
  // code here will run if none of the conditions evaluate to true
}
```

We can add as many `else`/`if` statements as we want, one for each condition we
want to check, but after a while our code becomes hard to read:

```js
let assignmentCompletion = 0

if (assignmentCompletion === 0) {
  console.log("Work on your homework!")
} else if (assignmentCompletion === 1) {
  console.log("Good work, still more to go")
} else if (assignmentCompletion === 2) {
  console.log("Almost there!")
} else {
  console.log("You are done!")
}
```

One of the things your instructors will say often is that JavaScript is
flexible. We can see an example of that here when discussing conditionls. For
instance, if you want to test two conditions without using and `else`/`if` you
can do so by using the logical operators (`&&` and `||`):

```js
if (condition && condition) {
  // this code will run if both conditions are true
}

if (condition || condition) {
  // this code will run if one of the conditions is true
}
```

This can make your code a little cleaner and easier to read, it can also let you
express more complex conditionals. But, use it sparingly! Your logic can quickly
become difficult to follow!

### Practice Conditionals (15 min / 0:50)

Let's spend some time practicing writing conditionals. Open up [this exercise](https://git.generalassemb.ly/dc-wdi-fundamentals/js-conditionals-practice)
and work through the prompts. Get as far as you can in the time alotted and feel
free to come back and review these!

## Break (10 min / 1:00)

## Loops

### `for` Loops (10 min / 1:10)

`for` loops are extremely powerful, but there are a couple of parts to them that
we have to learn before we can see their full power. Let's start with a simple
example:

```js
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```

The first thing to notice here is the overall structure. We need the `for`
keyword, followed by the parenthesis and everything inside of them (`(let i = 0;
i < 10; i++)`), and then the block of code (inside the `{}` braces).

Let's break down what's happening between the parenthesis (`()`), because there
are three parts to this expression:

1. `let i = 0` sets up an iteratee, a variable that we will iterate (increase or
   decrease by some number) with each iteration of the loop.
2. `i < 5` is the comparison expression - it's actually a conditional! The loop
   will continue to execute until this expression evaluates to false.
3. `i++` controls how the iteratee should change after each iteration.

These three pieces of the `for` loop are what make them powerful - we can alter
these to iterate in hundreds of different ways. Before we get to that, let's walk through how this loop works, as if we were the JavaScript compiler:

1. We arrive at the for loop. Create a variable, `i`, and set it equal to 0.
2. Check our condition (`i < 5`). Is it true? Is `i` less than 5? Yes!
3. Run the block of code - in this case, print the value of `i` to the console.
3. Increment the value of `i`. In this case, increase it by 1.
4. Return to step 2 and repeat until our condition is no longer true.

We have a lot of flexibility in how we iterate our loop just based on the three
expressions inside our `for` loop. We can count up or down by changing the third
expression, we can also change the iteration by more than just one:

**This loop counts up to 100 in increments of 5:**

```js
for (let i = 0; i < 100; i += 5) {
  // code goes here...
}
```

**This loop counts down from 100:**

```js
for (let i = 100; i >= 0; i--) {
  // code goes here...
}
```

#### Practice `for` Loops (15 min / 1:25)

Let's spend some time practicing writing loops. Open up [this
exercise](https://git.generalassemb.ly/dc-wdi-fundamentals/js-loops-practice)
and work through the prompts. Get as far as you can in the time alotted and feel
free to come back and review these!

### Iterating over Arrays (10 min / 1:35)

One of the areas where `for` loops really shine is when working with arrays.
We can set the value of `i` to `0` and use the array's length in the condition
to perform some action on every item in the array. That looks like this:

```js
let instructors = ["Don", "Hector", "Jimmy", "Zakk", "Eva"]

for (let i = 0; i < instructors.length; i++) {
  console.log(instructors[i])
}
```

Let's unpack what's happening here:

* We're setting our incrementer to be 0 and our condition is set up to continue
    looping while i is less than the length of the array (`i
    < instructors.length`)
* Inside our loop, we're using `i` to retrieve values from the array by their
    index.

For the first iteration of the loop, `i` is set to 0 (`let i = 0`). Since `i` is
0, we can use it to retrieve the first item in the array, at an index of
0 (`instructors[i]`). That will continue while `i` is less than
`instructors.length` (in this case, 5). With each iteration, the value of `i`
will increase by 1, so we'll retrieve the next item in the array!

#### Practice Iterating over Arrays (15 min / 1:50)

Return to [the previous
exercise](https://git.generalassemb.ly/dc-wdi-fundamentals/js-loops-practice)
and work through the prompts in Part 2. These prompts will give you a chance to
practice iterating over arrays.

## Break (10 min / 2:00)

### `while` Loops (10 min / 2:10)

A `while` loop is like an `if` statement but it will execute the content of its
block repeatedly until the condition becomes false. (i.e. the `while` loop
continues *while* the condition is true).

```js
num = 0
while (num <= 10) {
  console.log(num)
  num += 1 // short-hand for num = num + 1
}
```

There's a potential gotcha with working with `while` loops: because the loop
continues for as long as the condition is true, you **have to break the loop
manually**. In a `for` loop, the conditions to break the loop are all
encapsulated in the definition of the loops. In a `while` loop, that logic has
to be inside the code block. This makes `while` loops powerful, a lot of games
are built with `while` loops, for instance; but it also means you have to be
careful as you can run into an *infinite loop*.

Because of this, they're perfect for cases when you need a block of code to run
(loop) an unknown number of times:

```js
let passwordGuess = ''
while (passwordGuess !== 'password') {
  passwordGuess = prompt('You have been imprisoned in the code-block of a while loop! What is the magic word to exit?')
}
alert('Argh! You have escaped! I am so lonely, no one ever wants to stay.')
```

#### Practice `while` Loops (15 min / 2:25)

Return to [the previous
exercise](https://git.generalassemb.ly/dc-wdi-fundamentals/js-loops-practice)
and work through the prompts in part 3.  These prompts will give you the chance
to practice writing `for` loops.

## Closing (5 min / 2:30)

You can get really far in programming with the knowledge you have right now:
data types, arrays, conditionals, and loops! The biggest challenge beginners
have with control flow is expressing their thinking in code and combining the
patterns together (like putting a `for` loop in a `while` loop or
a `conditional` in a `for` loop, etc), but don't worry - you'll get lots of
practice!

## Additional Resources

The best way to really learn control flow is to practice solving problems!
Luckily, [codewars](https://codewars.com) has a ton of practice problems! Look at their collections
on
[loops](https://www.codewars.com/kata/search/javascript?beta=false&q=&r=-8&r=-7&tags=Loops)
and [control
flow](https://www.codewars.com/kata/search/javascript?beta=false&q=&r=-7&tags=Loops%2CControl%20Flow)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
