# Introduction to JavaScript: Data Types

## Learning Objectives

* Start using JavaScript and use developer tools.
* Introduce the syntax of the JavaScript language.
* Work with the primitive data types in JavaScript.
* Start working with arrays in JavaScript.

## Intro (5 minutes / 0:05)

Today we are going to get started with our first real programming language of
the course! We've learned about HTML + CSS in previous classes this week, so we
know how to make static webpages where there isn't much user interaction. Today
we are going to move towards making our pages interactive and dynamic.

But first, we must start with the basics.

## Linking a JavaScript file (10 minutes / 0:15)

We'll start by creating a new directory with HTML and JS files. From the command
line:

```sh
cd ~/wdi/sandbox
mkdir js-data-types
cd js-data-types
touch index.html script.js
code .
```

Go into the HTML file and enter HTML boilerplate code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

Next, we will link the JS file into the HTML file, by adding a script element
into the bottom of the `body`, as follows:

In index.html:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

    <script src="script.js"></script>
</body>
</html>
```

Once the file is linked, we can go into our JS file and begin coding. In
`script.js`:

```js
console.log("hello world")
```

Back at the command line run:

```sh
open index.html
```

Your default browser will open (we ask for this class you use Chrome but other
browsers will have similar tools you should definitely explore).

You can bring up the Development Tools (DevTools) with the command **Command +
Option + J** (`⌘ + ⌥ + J`) and should see something that looks like this:

![DevTools Console says 'Hello World!'](https://user-images.githubusercontent.com/7882341/27314092-830ea8ac-553f-11e7-954f-c8502b382d6d.png)

Again, back at the command line run:

```sh
touch script2.js
```

In script2.js add:

```js
console.log("hello world, from script2")
```

In index.html, in the head, add:

```html
  <script defer src="script2.js"></script>
```

Now let's do it a third time!

Create a `script3.js` and include it in head, this time without a `defer` attribute.

```html
  <script src="script3.js"></script>
```

Go back to the browser and refresh the page.

### Many ways to link a file

Placing the script at the bottom of the `body` allows your HTML to load first, then it downloads and executes your JS file.

Putting `defer` on your script tag in the head executes it after the entire page has loaded.

Placing a plain old script tag in the head, that doesn't have any attributes on it, runs the script before html loads. If you do this make sure that your script doesn't depend on HTML already being there.

**Bonus Reading:** [async and defer attributes in a script tag](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)

It is also possible to write JavaScript directly into your HTML file within the
`script` tags, but keeping all JS in a separate file makes it easier to edit and
more efficient when loading the page.

## Developer Tools (5 minutes / 0:20)

### `console.log`

We have seen `console.log` frequently in the pre-work and we will see it much
more. The most difficult aspect of programming is not having insight into the
exact value of things in a running program. `console.log` provides us this
insight.

![REPL 42](https://user-images.githubusercontent.com/7882341/27314489-4275c7b4-5542-11e7-8c16-6b6431f9cc42.png)

The console is also known as a REPL (Read-Eval-Print-Loop). When you hit
**Enter**, you tell the computer:

1. **R**ead the JavaScript I just wrote (`42`).
2. **E**valuate it (calculate its value, `42`).
3. **P**rint the value that was evaluated (`42`).
4. **L**oop, returning control to the user and wait to be asked to read the next
   line.

Let's try it out. In your script.js file:

```js
const number = 9

console.log(number)
```

Go back to the browser, and refresh the page. Type `number` into the console. It
will read, evaluate, and print `9`.

Another example of a REPL is: [https://repl.it/](https://repl.it/). This may be
a helpful tool to use throughout class to test code.


Keyboard shortcut: Highlight code and press **Command + /** (`⌘ + /`)

## Primitive Data Types in JavaScript

What do we mean when we say data types?

> Think of data types as ways of representing information.

A primitive data type is one that represents a single value (as opposed to multiple values). In JavaScript there are five primitive types:

1. Strings
2. Numbers
3. Booleans
4. Undefined
5. Null

## Strings (10 minutes / 0:30)

Strings are how JavaScript represents text. They are a series of characters in
single or double quotes. `'Hello World!'`, `"Hello World!"`, `'h'`, and `''` are
all examples of strings in JavaScript.

It doesn't matter whether you use double or single quotes, but if you need to include either a double or a single quote in your string, wrap it in the other type.

Example:

```js
`"What's the weather like today?"`
`'This dude is really into "air quotes"'`
```

In order to join multiple strings together, you can use **concatenation** or
**interpolation**.

Concatenation is when you add multiple strings together.

```js
let helloWorld = "Hello" + "world"
```

Interpolation is where you reference a variable within a string. Use back ticks
for the entire string, and put a dollar sign with curly brackets around the
variable.

```js
let hello = "Hello"

let helloWorld = `${hello} world`
```

> You can totally use backticks without using interpolation as well, if you prefer.

[Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
are a bunch more examples.

### String escape sequences

Sometimes you will need to use special characters or formatting in strings that
can't be entered the same way as you would in a word processor. In these cases,
you use "escape sequences".

* Syntax: backslash + letter (e.g., `"\n"`).

```js
// "\n" = new line
"Hello\nGoodbye"
// returns
// "Hello"
// "Goodbye"

// "\t" = tab
"Once upon\ta time..."
// returns "Once upon     a time..."

// You can also escape quotes
"What's with this dude's \"air quotes\"? He's insane"
// returns "What's with this dude's "air quotes"? He's insane"
```

> You can check out more escape sequence examples
> [here](http://www.javascriptkit.com/jsref/escapesequence.shtml).

### You Do: String exercise

* In your script.js file, console.log 5 strings
  - 1 that has double quotes
  - 1 with single quotes
  - 1 with double quotes and a single quote inside it
  - 1 with single quotes and a double quote inside it
  - 1 with escape characters

## Numbers (10 minutes / 0:40)

Numbers are simply represented by their digits. In JS, `4`, `345092318`, `-3`, `2.5`
and `10e7` all mean just what you would expect. To create a number in JS, just
write it.

> If you write `"645"` is that a number?

In your browser console, type `42` and hit **Enter**.

You can also do math in JavaScript. Type `42 + 3` into the console and see what
happens.

```js
// Addition
10 + 2
// => 12

// Subtraction
10 - 2
// => 8

// Multiplication
10 * 2
// => 20

// Division
10 / 2
// => 5

// Exponents
10 ** 2
```

* You can find a full list of arithmetic operators [in the expressions and operators MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators).

### % (Modulus)

The modulus operator - `%` - returns the remainder of a division operation.

```js
12 % 5
// => 2, which is the remainder of 12 / 5
```

Modulus has a pretty handy use case: to check if a number is even. We can do
this by running `NUMBER % 2`. If a number is even, the result should be 0 (i.e.
there should be no remainder).

```js
4 % 2
// => 0, so 4 is even

5 % 2
// => 1, so 5 is odd. When 5 is divided by 2, the remainder is 1.
```

## Booleans (5 minutes / 0:45)

This is the most simple JavaScript data type. They can have the values `true` or
`false`.

> What's the difference between `'true'` and `true` ?

### Comparison Operators (10 minutes / 0:55)

We encounter booleans most often when comparing two values using comparison
operators like...
* `==` - equal (in value)
* `===` - equal (in value and data type)
* `!=` - not equal (in value)
* `!==` - not equal (in value and data type)
* `<` - less than
* `>` - greater than
* `<=` - less than or equal to
* `>=` - greater than or equal to

<details>
  <summary>What is the difference between `==` and `===`?</summary>

* `===` checks for both the data type and value.
* `==` only checks for value.

</details>

Comparison operators return a boolean value.

```js
1 == 1
// Does 1 equal 1? Yes ==> true

1 == 2
// Does 1 equal 2? No ==> false

1 === 1
// Does 1 equal 1 AND are both values numbers? Yes ==> true

1 == "1"
// Does 1 equal 1? Yes ==> true
// In this scenario, "1" is converted to a number then the values are compared.

1 === "1"
// Does 1 equal 1 AND are both values numbers? No ==> false
// This time, Javascript does care about data types because we are using `===`. Because the left side is a Number and the right side is a String, this evaluates to false.
```

#### Logical Operators

Logical operators are used to determine the logic between values or variables.
There are three main logical operators:

* `!`
* `&&`
* `||`

`!` is an operator that means 'not'. For example, `!==` means 'not equal'.

<details>
<summary>Given a variable `a` equals `true`, what does `!a` evaluate to?</summary>
`false`
</details>

<details>
<summary>Given a variable `!a` equals `true`, what does `a` evaluate to?</summary>
`false`
</details>

`&&` operates as 'AND' and `||` operates as 'OR'


## Break (10 min / 1:05)

## Variables (10 min / 1:15)

**Variables** are containers for information -- we can store any value in them.
We can use them to help repeat, change, store, or edit our data.

In order to **declare** a variable in JavaScript we use the keywords `var`,
`const`, or `let`. The original declaration keyword was `var`, but in newer
versions of JavaScript `const` and `let` were implemented. `const` is used on
variables that will not be changed in your JavaScript code. `let` is used for
variables that do change.

Most of the time, we want our variables to immediately store a value. Therefore,
we **assign** values to our variables when we declare them. Here are three
examples of variable assignment and declaration at the same time.

```js
const myVar = 42
console.log(myVar)

const sum = myVar + 8
console.log(sum)

let doubleSum = 2 * sum
console.log(doubleSum)
```

Here is an example of variable declaration that doesn't immediately have a value
assigned:

```js
let unassigned
console.log(unassigned)
```

Once we have a declared variable, we can change its value. Here are some
examples:

```js
unassigned = 'assigned now'
console.log(unassigned)
// => 'assigned now'
```

JavaScript is a "dynamically-typed" language, meaning a variable can switch
between data types. The following change is valid.

```js
let myFavoriteNumber = 5

myFavoriteNumber
// => 5

myFavoriteNumber = "five"

myFavoriteNumber
// => "five"
```

## Null + Undefined + NaN (5 minutes / 1:20)

* If we declare a variable without assigning a value to it, it will, by default,
  have a value of `undefined`.

* Null is very similar to `undefined` but we have to explicitly assign it to a
  variable.

In summary, the difference is that `undefined` implies nothing because it never
was anything while `null` implies explicitly set to nothing.

### NaN ("Not a number")

A special number...that's not a number?

```js
typeof NaN
// => Number
```

`NaN` is the return value from operations which have an undefined numerical
result (e.g. dividing 0 by 0, multiplying strings together).

```js
0/0
// => NaN
```

You can test whether a value is a valid number using the `isNaN()` function. The
method will return false if the argument passed into it is a valid number.

```js
const myFavoriteNumber = 5
isNaN(myFavoriteNumber)
// => false, because 5 is valid

const myUnrealNumber = 0/0
isNaN(myUnrealNumber)
// => true, because 0 divided by 0 is NaN
```

## Variable Syntax (5 minutes / 1:25)

### Semicolons

* Semicolons can be put at the end of each line.
* We don't recommend using them, but if you do be consistent!
* The only catch with not using semicolons is that you can't start a line of
  code with `(`, `[`, or a backtick (`).
* References:
    * [JavaScript Semicolon Insertion](http://inimino.org/~inimino/blog/javascript_semicolons)
    * [Are Semicolons Necessary in JavaScript](https://www.youtube.com/watch?v=gsfbh17Ax9I)
    * [An Open Letter to JavaScript Leaders Regarding Semicolons](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding)
    * [Hacking Semicolons (by Evan You who wrote Vue.js)](http://slides.com/evanyou/semicolons#/)

### camelCase

JavaScript variables and function names are conventionally written using camel case syntax.

* First letter of first word lowercase
* First letter of remaining words uppercase
* No spaces or punctuation between words

#### Examples

```js
let pizzaTopping = "pepperoni"
let isThisVariableCamelCase = true
let hasURLChanged = false
```

> Note: Other types: kebab-case, which separates words with dashes, and snake case, which uses underscores.

> Use kebab case for CSS classes. CSS is essentially case-sensitive, so this-class-name is much easier to read than thisClassName.

> snake_case is used in programming languages like Python.

> You don't have to follow camelCase standards, you could just uppercase everything. But it's a good idea to have be consistent everywhere, especially when working with other developers.

### Comments

Comments are an extremely important part of writing code. They help us make
sense of our code, especially for other people reading our code, or when we have
walked away from some code and have completely forgotten what certain sections
of it do. This happens much more quickly than you may imagine.

If you are working on a team, your documentation and commenting practices often
translate to how easy you are to work with!

```js
// Single line comment

/*
  Multiple
  line
  comments
*/
```

## You Do: Type Conversion (5 minutes / 1:30)

With the person next to you, spend five minutes on the following activity.
First, predict what the line of code will do, next run the code in your REPL and
see what it actually does.

```js
typeof(15)
// Prediction:
// Actual:

typeof(5.5)
// Prediction:
// Actual:

typeof(NaN)
// Prediction:
// Actual:

typeof("hello")
// Prediction:
// Actual:

typeof(true)
// Prediction:
// Actual:

typeof(1 != 2)
// Prediction:
// Actual:


"hamburger" + "s"
// Prediction:
// Actual:

"hamburgers" - "s"
// Prediction:
// Actual:

"1" + "3"
// Prediction:
// Actual:

"1" - "3"
// Prediction:
// Actual:

"johnny" + 5
// Prediction:
// Actual:

"johnny" - 5
// Prediction:
// Actual:

99 * "luftbaloons"
// Prediction:
// Actual:
```

JavaScript will try to make sense of any strange operations you throw at it.

* Examples of "strange": subtracting a number from a string, multiplying `null`
  by 100.
* It does this by converting data types using a process called type coercion.

You might encounter this when dealing with numerical values in string form.

```js
// In some cases JavaScript is helpful and converts strings to numbers in the correct way.
"3" - "2"
// => 1

// ...but sometimes it doesn't. In this example, the + operator acts as if it's concatenating two strings.
"3" + "2"
// => 32

// And this?
"five" * 5
// => NaN
```

When in doubt, convert data types that should be numbers using `parseInt()`.

```js
parseInt("3")
// => 3
// parseInt converts a string to a number value, if available.

parseInt("burrito")
// => NaN, because "burrito" cannot be converted into a number
```

There are other examples of type coercion, but the point here isn't to remember
them all. Just be aware that sometimes JavaScript will yield weird results with
no explanation - and it may be due to type coercion.

## Arrays (15 minutes / 1:45)

Arrays are an ordered collection of related data and are organized by index.

* Indexing begins at 0 (e.g., first element in an array has an index of 0, the
  second has an index of 1, and so on).

We instantiate an array like this...

```js
const mountRushmore = [ "Washington", "Jefferson", "Roosevelt" ]
```

And access its values like so...

```js
mountRushmore[0]
// => "Washington"

mountRushmore[1]
// => "Jefferson"

mountRushmore[2]
// => "Roosevelt"

mountRushmore.push("Lincoln")
// mountRushmore = [ "Washington", "Jefferson", "Roosevelt", "Lincoln" ]

mountRushmore[3]
// returns "Lincoln"
```

You can also place arrays within arrays.

```js
const letters = [ ["a","b","c"], ["d","e","f"], ["g","h","i"] ]
```

<details>
<summary>How would we go about accessing the letter "f" in the above array?</summary>

```js
letters[1][2]
// => "f"
```

</details>

Arrays can also contain any type of data, not just primitives. Arrays can contain functions and objects!

```js
let mixed = [{ key: 'value' }, function() { console.log("I'm fun") }, 0, "a string",  ]
```

> The syntax can be hard to read, but how many items are in this array?

## Objects (15 min / 2:00)

Objects in javascript are fundamental to the language. Everything is an object. **Literally everything.** This will make more sense later.

To declare an object, just write `{}`

```js
let students = {}
```

Objects **MUST** contain key/value pairs to be valid syntax. The key and value are separated by a `:`

```js
let students = {
  name: "Jimmy"
}
```

The value can be any type, including arrays, strings, numbers, even other objects!

```js
let sei = {
  students: ["Jimmy", "Frank"],
  curriculum: {
    hard: true,
    valuable: "Absolutely"
  },
}
```

You can access properties of objects by their names.

```js
  console.log(sei.students)
  // ["Jimmy", "Frank"]
  console.log(sei.curriculum.hard)
  // true
  console.log(sei.curriculum.valuable)
  // "Absolutely"
```


We'll cover more about objects in a later lesson, but these are the basics.

### You do: Objects exercise

Build the biggest, baddest object that you can and console.log each of the properties in it.

## Data Type Methods (Rest of class / 2:30)

Each of the data types we've covered so far has their own "methods". These are functions that you can run to perform certain operations.

Pay attention to what type you're trying to use a method on. For example, you can't use string methods on numbers, and vice versa. Each type has its own methods.

### String Methods

**.substring()**: return and store a portion of a string. First argument is the
start position; second argument is the end position.

```js
let greetings = "Hi there friend!"
let buddy = greetings.substring(9, 15)
```

**.concat()**: combine two strings together.

```js
let greeting = "Hello"
let place = "Las Vegas"

greeting.concat(" ", place)
// "Hello Las Vegas"
```

**.indexOf()**: Find the position of a string inside of another string

```js
let nooo = "Luke, I am your father"
nooo.indexOf("father")
// 16
```

**.split()**: split a string into an array, determined by the separator you pass in

```js
let phrase = "Rubber baby buggy bumpers is a hard one"
let result = phrase.split(" ") // split on the space separator
console.log(result)
// ["Rubber", "baby", "buggy", "bumpers", "is", "a", "hard", "one"]
```

> There are way more methods than this. See the [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### You do: String Methods

Spend a few minutes experimenting with each of the methods.

### Number Methods

There aren't as many of these, but still two useful ones.

***.toString()**: Coverts a number to a string.

```js
let makeMeAString = 58320
let nowImAString = makeMeAString.toString()
console.log(nowImAString)
// "58320"
```

***.toFixed()**: Trim a decimal to the specified number of digits.

```js
let makeMeFixed = 58320.73242
let fixed = makeMeFixed.toFixed(2)
console.log(fixed)
// "58320.73"
```

### Array Methods

There are a lot of useful methods that come with JavaScript we can use to
inspect and modify arrays. To learn what some of them are...

* `.length`
* `.push()` / `.pop()`
* `.shift()` / `.unshift()`
* `.indexOf()`
* `.reverse()`
* `.concat()`
* `.join()`
* `.sort()`

> There are many more, but these are the most widely-used.

#### You Do: Array Practice

1. Write an array that contains the names of the people in your row.
2. Get the index of your name in that array (using an array method).
3. Add the person in front of you to the array (using an array method).
4. Combine two arrays

[Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) is more documentation on arrays.


## Bonus: The Spread Operator

The spread operator `...` allows an expression to be expanded into multiple
elements.

This is useful for separating an array into individual elements...

```js
let dimensions = [10, 5, 2]

// ES5
console.log(dimensions[0], dimensions[1], dimensions[2])

// ES6
console.log(...dimensions)
```

#### Bonus: Copying Arrays

Variables in JavaScript only store references to arrays rather than the array
itself. Therefore, if we do something like the following, both arrays will be
impacted.

```js
let arr = [1, 2, 3]
let arr2 = arr

arr2.pop()
arr
// => [1, 2]

arr2
// => [1, 2]
```

The ES6 spread operator makes it really easy to deep copy arrays in JavaScript,
or create a new array with the same values as the old one.

```js
let arr = [1, 2, 3]
let arr2 = [...arr]

arr2.pop()
arr
// => [1, 2, 3]

arr2
// => [1, 2]
```

We can also copy arrays using the `.slice()` array method.

```js
//ES5 Style
let arr = [1, 2, 3]
let arr2 = arr.slice()
```

## Closing

## Additional Practice + Resources

* [Khan Academy Intro to Programming JS](https://www.khanacademy.org/computing/computer-programming/programming#intro-to-programming)
* [You Don't Know JS: Up & Going](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/README.md#you-dont-know-js-up--going)
* [Eloquent JavaScript](http://eloquentjavascript.net/)

## Bonus: Linters

* Install [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (formatter)
* Install [Standard-JS](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs)
* Install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
