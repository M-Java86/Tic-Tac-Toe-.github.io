# Intro to Node

## Learning Objectives
- Describe 3 benefits of Node.js.
- Create a simple server using the HTTP module
- Send different responses to the client based on specific routes.

# Framing
For our introduction to programming servers, we are going to be using Node.js (a.k.a. Node). 

## What is Node?

Node was created in 2009 by Ryan Dahl. Dahl was critical of the limitations of the Apache HTTP Server when a lot of connections at once.  He created Node.js using the C++ language and Google's V8 engine to run JavaScript code in C++.

Visit the [Node.js homepage](https://nodejs.org/en) and take a look at Node's one-liner.

>Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

Let's break this down...
>Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

All of the JavaScript that we write when writing Node is actually interpreted through several C++ libraries when we run the `node` command.  This is done via the Chrome V8 Engine. V8 powers some of the most widely used tools related to software development including the Chrome and Opera Web Browser, the CouchBase and MongoDB databases, and Electron (the platform used to create apps like Visual Studio Code)

>Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

You'll commonly hear people mention that Node is asynchronous.  What they mean by this is that Node is able to take many requests at once and respond to each in it's own time.  The alternative to this is known as a blocking model.  In a language that uses blocking, the server can only handle one request at a time.  If any of these requests are taking a long time, the program will be blocked and not continue until it is resolved.

In layman's terms:

Imagine a paper delivery boy riding on his bike, delivering papers every morning. Imagine that he stops at each house, throws the paper onto your doorstep, and waits to make sure you come out and pick it up before moving on to the next house. That is what we would call _blocking_ – each line of code must finish before moving on to the next line of code.

Now, imagine the paperboy throwing the newspaper on your porch, but never stopping his bicycle.  He never stops.  He just keeps throwing papers on porches, so that by the time you pick it up he will be at least 3 to 4 houses down. That would be considered _non-blocking input/output (I/O)_, otherwise known as _asynchronous_. This is an extremely awesome feature of node since I/O tends to be very "expensive" as it takes many steps/time to retrieve data from memory.  And each step adds its own amount of delay time.

> Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

Finally, the package ecosystem is another killer feature for Node.  Through using a package manager like `npm` or `yarn`, we are able to easily import external libraries and frameworks like jQuery, React, and Express.

## What is Node great at? 
Node's Core Strengths are:
- **Familiarity**: We already know how to write JavaScript.
- **Full Stack JavaScript**: We can write JavaScript throughout the entire app. No need to switch back and forth between multiple languages. 
- **Fast**: Node outperforms similar options due to it's non-blocking nature.
- **NPM**: The package manager in Node is the largest package manager in the world.
- **Rapid Growth**: The number of monthly downloads of Node has increased 500% since 2014. That number is continuing to expand, and with that growth comes the demand for more jobs.

![](https://nodesource.com/assets/node-by-numbers/charts/downloads-per-month-2016.png)

## What are Node's weaknesses
- **Maturity**: Since Node is such a new language, there are still some coding standards that aren't completely clear.  This is becoming less of a problem as the development community continues to grow and tools like ESLint become available.  
- **Debugging**: Node doesn't have many robust debugging tools out of the box.  The developer is responsible for making error logs.

## Our first Node app
We installed `node` a few weeks ago, so we should be able to easily get up and going.  Let's create a file called `helloWorld.js` and log "Hello World" to the terminal.

```js
console.log("Hello World!")
```

Run the program in the command line by using `node helloWorld.js`. That's it! You've created your first Node app.  It's not very useful though.  Let's try and build out a web server to actually say Hello to the whole world.

Let's open up the [node_lab](https://git.generalassemb.ly/atl-wdi/wdi-curriculum/blob/master/labs/node/node-lab/node-lab.md) and create a web app using only node (we'll learn how to do the same thing with Express.js later today).
