[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Events

So far, we have needed to use the REPL in the browser console to interact with
our programs. This is asking a bit much of our users! Instead, we would like
build applications that respond to user interactions.

## Prerequisites

* HTML, CSS, and JavaScript
* Working with the DOM

## Objectives

By the end of this, developers should be able to:

* Explain event-driven development
* Understand the different types of events we can work with in JavaScript
* Setup an event listener and an event handler
* Use the event object

## Introduction

So far, the only way we've been able to interact with the applications we've
built so far is through the REPL in the browser. It's too much for us to ask our
users to do the same! So, instead, we want to build applications that respond to
our user's input: a user clicks a button, triggering an action in our
application.

We've learned HTML and CSS, the tools we need to built out the interface; we've
also learned JavaScript, the programming language we can use to built programs;
now, we need to bring the two together and build interfaces (using HTML and CSS)
with functionality our users can leverage (using JavaScript).

The **DOM** not only lets us manipulate the document (or webpage) using
JavaScript, but also gives us the ability to write JavaScript that responds to
interactions with the page. These interactions are communicated as **events**.

We can **listen** for certain kinds of user-driven events, such as clicking a
button, entering data into a form, keypresses and many, many more.

## Events

**Discussion Questions:**

* In plain English, what is an event?
* What might an event in the context of a web page be?
* What are some specific examples of common DOM events? (What DOM events did you
    learn in the pre-work?)

> You can find information on events and examples at the [Mozilla
> Developer Network](https://developer.mozilla.org/en-US/docs/Web/Events).

"DOM Events are sent to notify code of interesting things that have taken
place." _- MDN_

For the time being, when we talk about "interesting things that have taken
place" we are talking about user interactions with the page. In the context of
JavaScript and building web pages, we are talking about getting listening for
events on DOM elements and triggering some action in response to those events.

In code, it looks like this:

```js
const button = document.querySelector('.js-button')

button.addEventListener('click', function () {
  alert("You clicked a button!")
})
```

### Turn & Talk (5 min)

Turn to your neighbor or the people in your row and discuss what is happening in
the code snippet abote.

> We'll work through each part of the above snippet in detail as we work through
> the rest of the lesson. In a few minutes, you'll be working with events on your
> own!

## Types of Events

Let's start by answering the question, "What kinds of events can we respond to?"
There are many events that we can listen for and respond to in JavaScript.
Broadly speaking, we can divide these events in to four categories:

### 1. Document / Window Events

* load
* resize
* scroll
* unload

### 2. Mouse Events

* click
* dblclick
* mouseenter
* mouseleave

### 3. Key Events

* keypress
* keydown
* keyup

### 4. Form Events

* submit
* change
* focus

## Event Listeners in JavaScript

When we want to respond to events in JavaScript, we do so in two parts:

1. We set up an event listener with `.addEventListener`
1. We define an event handler, a callback function that get's passed to
   `.addEventListener`

### Step 1: Event Listener

In order to listen for an event, we need to define an **event listener**. Below
you'll find a simple event listener associated with a `'click'` event on a
`button` element.

First we target the button:

<details>
  <summary>If a button element has a class of <code>.js-button</code>, how would we capture this from the DOM?</summary>

```js
const button = document.querySelector('.js-button')
```

</details>

Once we have the element from the DOM, we can tell JS to listen for an event: 

```js
// This is the event listener

button.addEventListener('click', handleClickEvent)

// first argument: event, as a string
// second argument: callback function for our event handler
```

That completes step 1 of working with events - we're now listening for a click
event on our button!

### Step 2: Event Handler

For step two, we need to define the function that will be called whenever this
event is emitted. This is just a function, but it has a special name due to how
it's being used: a **callback** function:

```js
function handleClickEvent(){
  console.log('I was clicked!')
}
```

All together, our code looks like this:

```js
const button = document.querySelector('.js-button')

button.addEventListener('click', handleClickEvent)

function handleClickEvent(){
  console.log('I was clicked!')
}
```

You will most often see (and probably use) an anonymous callback function for
your event handler. That looks like this:

```js
const button = document.querySelector('.js-button')

button.addEventListener('click', function() {
  console.log('I was clicked!')
})
```

<details>
  <summary>What is this code doing?</summary>

The code above first gets an element from the DOM. It then attaches an event
listener to that <code>button</code> element with the
<code>addEventListener()</code> method. The <code>addEventListener()</code>
method takes two arguments:

<ol>
  <li>the event we want to listen for, and</li>
  <li>the function that should be called whenever that event is invoked.</li>
</ol>

In the case of the code above, we're saying we want to listen for
<code>click</code> events on our <code>button</code>, and whenever someone does
click on our button, call the <code>handleClickEvent()</code> function.

</details>

## Aside: Callbacks

As a quick aside, let's answer the question, "What is a callback function?"

A callback function is a function that is passed in to another function as an
argument, so that it can be called (invoked) at a later point. This is one of
the many ways that JavaScript handles **asynchronous** code.

Let's see an example.

_Scenario_: Let's say we have a function called `doWork()` that takes a long
time to execute (maybe it has to communicate with some external service). We
want to perform some task when it is finished, which we wrap into a function
called `getPaid()`. How can we ensure that `getPaid()` will only be called after
`doWork()` is finished?

You might think that it is as simple as putting the two functions after each
other:

```js
doWork()
getPaid()
```

In some languages this will work, and the process will hang until `doWork`
finishes - but not in JavaScript. JavaScript is an asynchronous programming
language, which simply means things won't necessarily happen one after the
other. Instead, what would likely happen is `doWork` would get called and start
it's process, then `getPaid` would get called and then sometime later, `doWork`
would finish running.

This is where callbacks come in!

We can imagine the implementation of `doWork` as looking something like this:

```js
function doWork( callback ) {

  // code for whatever it is that takes so long ...

  callback()
}

```

Making sure `getPaid` is called after `doWork` is finished is now as simple as
passing it in to `doWork` as an argument:

```js
doWork( getPaid )
```

Note that we're passing a *reference* to `getPaid` in to `doWork`. 

<details>
  <summary>What is the difference between referencing and invoking a function?</summary>

Invoking will actually run the function; referencing is just passing it around
inside our program as a value.

</details>

<details>
  <summary>Where does <code>getPaid</code> actually get invoked?</summary>

It will be invoked inside of <code>doWork</code>, at the very end of that
functions' process or work.

</details>

## We Do: Practice

> 5 minutes exercise. 5 minutes review.

Go to this [repository](https://git.generalassemb.ly/dc-wdi-fundamentals/event-listener-practice) and follow the instructions.

## Break

## You Do: Color Scheme Switcher

> 10 min practice / 5 min review

We will build on the Color Scheme Switcher as we work through the following sections of the lesson.

Visit this [repository](https://git.generalassemb.ly/dc-wdi-fundamentals/color-scheme-switcher) and follow along!

## The Event Object

Comment out the code you wrote in the Color Scheme Switcher exercise and paste
in the following:

```js
let buttons = document.querySelector('li a')

buttons.addEventListener('click', handleClickEvent)

function handleClickEvent (evt) {
	console.log('I was clicked!')
	console.log(evt)
}
```

> The `evt` stands for `event`. The reason we're not actually using `event` is
> that it's a "reserved word" in Javascript, like "if" and "return".

**What do you see in the console when you click the link?**

### Turn & Talk: Explore The Event Object (5 min)

With your partner, spend three minutes clicking the button and exploring what
properties the event (or `evt`) object contains. Look for:

* A way to figure out what element was clicked on.
* A way to tell the position of the mouse when it was clicked.
* One other piece of useful or interesting information.

### Preventing Default Behavior

The event object is useful to us as programmers for many reasons - one of those
reasons is preventing the default browser behavior for a certain event.

A very common use case for this is when the user clicks on an anchor element
(`<a>`), but we want to control what happens in our code, rather than rely on
what the browser tries to do in response to this event by default (navigate to
another location).

To prevent the default behavior, we have a special method inside the event
object: `preventDefault()`.

* How do we call methods in objects?
* How might we then invoke `preventDefault()` to prevent the default browser
  behavior?

<details>
  <summary> Answer </summary>

```js
let button = document.querySelector('.js-button');

button.addEventListener("click", handleClickEvent);

function handleClickEvent ( evt ){
  evt.preventDefault();
  console.log("I was clicked!")
  console.log(evt)
}
```

</details>
<details>
## Event Propagation

Clone down [this
repository](https://git.generalassemb.ly/dc-wdi-fundamentals/js-event-propagation-practice) for a short exercise.

The site in the exercise above has 100 buttons. Your task is to make it so an
alert pops up when the user clicks on any of the buttons.

Your first thought might be to do this with a `for` loop - it's certainly one
way to accomplish the task at hand! Doing it this way looks like this:

```js
const buttons = document.querySelectorAll('.js-button')

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    alert("You clicked a button!")
  })
}
```

Another way to go about this is to take advantage of **event propagation**. There
are three phases of event propagation:

1. Capture phase,
1. Target phase, and
1. Bubbling phase.

When an event (e.g. click) occurs, all nodes up the DOM tree are notified,
beginning at the window level and working its way down the DOM branch to the
event target. This is the capture phase.

Once the propagation reaches the event target, all event listeners on the target
will be triggered. This is the target phase.

Then, event propagation returns back up the DOM tree in the event bubbling
phase.

All three of these phases are very nearly instantaneous.

For a visual, consider the event propagation flow phase illustration below:

![Event Propagation Flow Chart (from World Wide Web
Consortium)](./assets/event-propagation-flow.png)

What does this mean, in plain English? It means that the event will bubble to
and from the event target, through it's parent elements. So, you can treat
a click on an element as a click on it's parent, grandparent, great-grandparent,
etc.

This is usefull for us when working with adding events to a lot of elements
(like in our exercise). Rather than apply an event listener to every element,
and have a lot of duplicate event listeners, we can apply 1 event to the parent
element:

```js
const controlPanel = document.querySelectorAll('.js-control-panel')

controlPanel.addEventListener('click', function(evt) {
  evt.preventDefault();

  if (evt.target.tagName === "A") {
    alert("You clicked a button!")
  }
})
```

<details>
  <summary>What is this code doing?</summary>

  The code above first gets the <code>.js-control-panel</code> element from the
  DOM and adds a 'click' event listener to it.

  The event handler first prevents the default browser behavior, which we
  typically want to do when working with links. Next, the event handler checks
  the event target to see if it is a link (i.e. is an <code>a</code> tag). If it
  is, an alert is created with the text "You clicked a button".

</details>

**Let's refactor the [`js-event-propagation`](https://git.generalassemb.ly/dc-wdi-fundamentals/js-event-propagation-practice) exercise from above to use event
propagation.**

This technique is really helpful when working with a list of links or buttons
that all perform the same task but with different data. For example,
[tabs](https://codepen.io/collection/Ctihv/), a common UI element in web pages.

## You do: Refactor Color Switcher

Let's revisit the color switcher example together and find a way to put have
just one event listener.

</details>

## Break

## We Do: DOTS: The Game

Visit this [repository](https://git.generalassemb.ly/dc-wdi-fundamentals/event-listener-demo) and follow the instructions.

## Additional Resources

* [Build a Drum Kit in Vanilla JS](https://www.youtube.com/watch?v=VuN8qwZoego)
* [Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)
* [Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
* [Eloquent JavaScript: Handling Events](http://eloquentjavascript.net/14_event.html)
* [Philip Roberts: What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
