# Front End

The questions you'll answer here span across all parts of the front end. Some of
them are trivia, others are short-answer.

## Instructions

Each group member will take turns being the candidate (the one answering
questions) and the interviewers. When it is your turn to be the candidate, sit
on the opposite side of the table as the interviewers.

Interviewers should randomly pick questions from the list to ask the candidate.
The candidate should offer their best answer without looking at the answer! It's
really, really important to answer the question as best you can, even if you
have no idea what they're asking.

If you get a question that you don't know the answer to:

* Ask follow up questions
* Start explaining what you do know. 

If you get a question that you don't know the answer to, that's okay. First, try
asking follow up questions. Then say you don't know or you're not sure and
explain what you do know (literally, "I don't know the answer to that but I can
tell you ...").

## Questions

* What does a `doctype` do?
* How do you serve a page with content in multiple languages?
* What kind of things must you be wary of when design or developing for multilingual sites?
* What are `data-` attributes good for?
* Consider HTML5 as an open web platform. What are the building blocks of HTML5?
* Describe the difference between a `cookie`, `sessionStorage` and `localStorage`.
* Describe the difference between `<script>`, `<script async>` and `<script defer>`.
* Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?
* What is progressive rendering?
* Why you would use a `srcset` attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.
* Have you used different HTML templating languages before?
* What is CSS selector specificity and how does it work?
* What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
* Describe Floats and how they work.
* Describe z-index and how stacking context is formed.
* Describe BFC(Block Formatting Context) and how it works.
* What are the various clearing techniques and which is appropriate for what context?
* How would you approach fixing browser-specific styling issues?
* How do you serve your pages for feature-constrained browsers?
  * What techniques/processes do you use?
* What are the different ways to visually hide content (and make it available only for screen readers)?
* Have you ever used a grid system, and if so, what do you prefer?
* Have you used or implemented media queries or mobile specific layouts/CSS?
* Are you familiar with styling SVG?
* Can you give an example of an `@media` property other than `screen`?
* What are some of the "gotchas" for writing efficient CSS?
* What are the advantages/disadvantages of using CSS preprocessors?
  * Describe what you like and dislike about the CSS preprocessors you have used.
* How would you implement a web design comp that uses non-standard fonts?
* Explain how a browser determines what elements match a CSS selector.
* Describe pseudo-elements and discuss what they are used for.
* Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.
* What does `* { box-sizing: border-box; }` do? What are its advantages?
* What is the CSS `display` property and can you give a few examples of its use?
* What's the difference between inline and inline-block?
* What's the difference between a relative, fixed, absolute and statically positioned element?
* What existing CSS frameworks have you used locally, or in production? How would you change/improve them?
* Have you played around with the new CSS Flexbox or Grid specs?
* Can you explain the difference between coding a web site to be responsive versus using a mobile-first strategy?
* Have you ever worked with retina graphics? If so, when and what techniques did you use?
* Is there any reason you'd want to use `translate()` instead of *absolute positioning*, or vice-versa? And why?
* Explain event delegation
* Explain how `this` works in JavaScript
* Explain how prototypal inheritance works
* What do you think of AMD vs CommonJS?
* Explain why the following doesn't work as an IIFE: `function foo(){ }();`.
  * What needs to be changed to properly make it an IIFE?
* What's the difference between a variable that is: `null`, `undefined` or undeclared?
  * How would you go about checking for any of these states?
* What is a closure, and how/why would you use one?
* Can you describe the main difference between a `forEach` loop and a `.map()` loop and why you would pick one versus the other?
* What's a typical use case for anonymous functions?
* How do you organize your code? (module pattern, classical inheritance?)
* What's the difference between host objects and native objects?
* Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
* What's the difference between `.call` and `.apply`?
* Explain `Function.prototype.bind`.
* What's the difference between feature detection, feature inference, and using the UA string?
* Explain Ajax in as much detail as possible.
* What are the advantages and disadvantages of using Ajax?
* Explain how JSONP works (and how it's not really Ajax).
* Have you ever used JavaScript templating?
  * If so, what libraries have you used?
* Explain "hoisting".
* Describe event bubbling.
* What's the difference between an "attribute" and a "property"?
* Why is extending built-in JavaScript objects not a good idea?
* Difference between window load event and document DOMContentLoaded event?
* What is the difference between `==` and `===`?
* Explain the same-origin policy with regards to JavaScript.
* Make this work:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```
* Why is it called a Ternary operator, what does the word "Ternary" indicate?
* What is `"use strict";`? what are the advantages and disadvantages to using it?
* Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
* Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
* Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?
* Explain what a single page app is and how to make one SEO-friendly.
* What is the extent of your experience with Promises and/or their polyfills?
* What are the pros and cons of using Promises instead of callbacks?
* What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
* What tools and techniques do you use debugging JavaScript code?
* What language constructions do you use for iterating over object properties and array items?
* Explain the difference between mutable and immutable objects.
  * What is an example of an immutable object in JavaScript?
  * What are the pros and cons of immutability?
  * How can you achieve immutability in your own code?
* Explain the difference between synchronous and asynchronous functions.
* What is event loop?
  * What is the difference between call stack and task queue?
* Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`
* What are the differences between variables created using `let`, `var` or `const`?
* What are the differences between ES6 class and ES5 function constructors?
* Can you offer a use case for the new arrow `=>` function syntax? How does this new syntax differ from other functions?
* What advantage is there for using the arrow syntax for a method in a constructor?
* What is the definition of a higher-order function?
* Can you give an example for destructuring an object or an array?
* ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?
* Can you give an example of a curry function and why this syntax offers an advantage?
* What are the benefits of using `spread syntax` and how is it different from `rest syntax`?
* How can you share code between files?
* What are some advantages/disadvantages to testing your code?
* What tools would you use to test your code's functionality?
* What is the difference between a unit test and a functional/integration test?
* What is the purpose of a code style linting tool?
* Why you might want to create static class members?
* What tools would you use to find a performance bug in your code?
* What are some ways you may improve your website's scrolling performance?
* Explain the difference between layout, painting and compositing.
* Traditionally, why has it been better to serve site assets from multiple domains?
* Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.
* What are the differences between Long-Polling, Websockets and Server-Sent Events?
* Explain the following request and response headers:
  * Diff. between Expires, Date, Age and If-Modified-...
  * Do Not Track
  * Cache-Control
  * Transfer-Encoding
  * ETag
  * X-Frame-Options
* What are HTTP methods? List all HTTP methods that you know, and explain them.
* What is the "Box Model" in CSS? Which CSS properties are a part of it?
* What are Sass, Less, and Stylus? Why do people use them?
* Name some online resources that you reference when having CSS issues.
* Describe what a “reset” CSS file does and how it’s useful. Are you familiar with normalize.css? Do you understand how they differ?
* What does `box-sizing: border-box;` do?
* What are the various techniques for clearing floats?
* What are some accessibility concerns that come up in CSS?
* What is the difference between inline, inline-block, and block?
* What tools do you use for cross-browser testing?
* Say you found a rendering problem on one of your sites in Internet Explorer 8, which you have decided you are supporting. How would you approach fixing it?
* What is responsive design all about?
* Have you ever worked with a grid layout? What are your thoughts on that?
* What are the benefits of SVG?
* Have you ever created a print stylesheet for a website?
* Explain to me what's going on in this CSS selector:
```css
[role=navigation] > ul a:not([href^=mailto]) {

}
```
* What are the components of a CSS Style? (Hint: 3 parts)
* What is type selector? Can you give me an example?
* What is a universal selector? Can you give me an example?
* What is descendant selector? Can you give me an example?
* What is a class selector? Can you give me an example?
* What is an ID selector? What are the advantages and disadvantages of using IDs?
* What is a child selector? Can you give me an example?
* What is an attribute selector? Can you give me an example?
* What are the various ways of using CSS in an HTML page?
* How does CSS Style overriding work?
* What do the `vh` and `vw` units do?
* What are some formats for specifying colors in CSS?
* What properties is the `border` property short-hand for?
* How do you set the background image of an element? How do you size and
    position that background image?
* When will CSS4 come out?
* What is the difference between padding and margin?
* What are CSS pseudo elements and what are they used for?
* What are CSS pseudo classes and what are they used for?
* Should you use `!important`?
* How do margin, border and padding fit together in the box model?
* How would you use media queries in a mobile-first approach?
* Have you used Flexbox & CSS Grid before? What are the differences between
    them? When would you use one or the other?
* Do you use any CSS preprocessors, and which do you prefer?
* What are the key features of your favorite CSS preprocessor?
* What's the difference between `undefined` and `not defined` in JavaScript?
* What will be the output of the following code?

```javascript
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);
```
* What is “closure” in javascript? Can you provide an example?
* What are a couple of ways you can declare a function in JavaScript? Which do
    you tend to use and why?
* What is the difference between State and Props in React?
* What are some different ways you can define a component in React? What are the
    tradeoffs to them?
* What are the lifecycle methods? What are they used for?
* How does React fit in to MVC?
* What happens during the lifecycle of a React component?
* What can you tell me about JSX?
* What happens when you call setState?
* What’s the difference between an Element and a Component in React?
* When would you use a Class Component over a Functional Component?
* What are keys in React and why are they important?
* What is the difference between a controlled component and an uncontrolled component?
* In which lifecycle event do you make AJAX requests and why?
* What does shouldComponentUpdate do and why is it important?
* Describe how events are handled in React.
* What is the virtual DOM?
* What are the key advantages of using React?

