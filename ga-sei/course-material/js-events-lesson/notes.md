
# Recap
So far -- data through display languages: HTML & and CSS
JavaScript -- tool for problem solving
Now we will learn how we can use JS to manipulate our static webpage through DOM manipulations by via CSS selectors


### Learning Objectives
* Event driven development
* The different types of JS events
* Query Selectors
* Event listners and handlers



### How would we do this?
```js
const button = document.getElementByClass(‘.btn’)
```
-what does this line of code do? 

 OR

 using Query Selectors:
```js
 const button = document.querySelector(‘.btn’)

```


### Query Selectors
-if you noticed on the example above, we were able to select a class by .getElementbyClass.  We can also use query selectors to select an element by its class or id.  When we use document.getElementsByClass or document.getElementById - a HTML collection is returned.  Let's console.log an example and view this in the console.log in the browser.  When we select a class or and id by using document.querySelector or document.querySelectorAll a nodelist is returned. This is unique because we are able to use higher order functions such as forEach over the returned nodelist, when we would otherwise not be able to do.  Also QS and QS All is *relatively* new and came out after jQuery had already been established as a JS library.




### Events:

Document/window events, such as resize, 
Mouse events, such a click
Key events, such as keypress
Form events such as submit, change


### EVENT LISTENER
What is an event listener? If we want to listen for an event, we need to define the event listener, 

For example, if we want to add a click event to a button 
```js
button.addEventListener(‘click’, handleClickEvent)
```

### EVENT HANDLER

Now, we need to create an event handler by defining the function handleClickEvent

How?
```js
function handleClickEvent(){
  console.log('I was clicked!')
}
 ```
Or you can create and anonymous functions:

```js
const button = document.getElementsByClassName('.btn')[0]

button.addEventListener('click', function() {
  console.log('I was clicked!')
})
```

Query Selector:

```js
const button = document.querySelector('.btn')
button.addEventListner('click', function(){
    console.log('I was clicked!')
}


)
```
### Callback functions: what are they?

A function that is passed into another function as an argument, so they can be called/invoked at another time

For example,

We created, handleClickevents -- if we want to reuse: 

const run = document.getElementbyId('#two')
run.addEventListener('click', handleClickEvent)

### JS runs asynchronously….

Meaning, instead of one completing and then the next one starting right after.

A function gets called and and runs, and then the next one get called and runs, while the first one will finish its process.  For one to start running the other one doesn’t have to be complete.
