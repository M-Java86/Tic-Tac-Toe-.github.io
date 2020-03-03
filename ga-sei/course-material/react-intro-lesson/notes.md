# Learning Objectives

* Give 3 reasons why we might want to use a client side application
* Draw the black box diagram for using react components
* Start an application using react
* Create a component using the react library
* Pass data between react components using `props`


# SPA

* Chrome-books - why is it we can run an entire OS ....as a web browser?!
* SPA 
  * basically running a GUI application 
  * uses AJAX to act as an HTTP client
  * uses JS to manipulate the DOM to present information to user
* Main problems
  * efficiently manipulating the DOM
  * HTTP client
  * browser compatible routing

# Thinking in React

component
: a single UI element that has a single responsibility

example jeopordy

* score board
* question board
* category of questions
* question card

Break app up into components

_Squad whiteboard:_

1. take your project 2
1. figure out what your components might be and list them
1. draw a DAG relating the components to each other

# Creating a component

## Create React App and the dev server

Run the following code:

```sh
npm install -g create-react-app
create-react-app hello-world 
cd hello-world 
npm run start
```

* `src/components`
* App.js

## Todo Item

in `todoItem.js`

```
class TodoItem extends React.Component {
  render() {
    return (
      <div>
        Hello world
      </div>
    );
  }
}

export default TodoItem;
```

* what is `render()`?
* what is this thing HTML in JS? (JSX) _Jeff might be good for this_
* what is the 

## Todo List

```
import TodoItem from './todoItem.js'

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h1> My Todo List </h1>
        <TodoItem />
      </div>
    );
  }
}

export default TodoList;
```

* explain need for `<div>` wrapper

# Props

Why props

* DRY code
* re-usablility
* Helps organize our application

1. modify TodoItem to take in props

* `{}` is used to insert javascript code to be evaluated and then printed as
  string

1. modify TodoList to render a list of items

```
const todoItems = [{author: "bob", description: "...", ...];
return (
  <div>
    {todoItems.map((item, i) => {
      return <TodoItem key={i} TodoItem={item}>
    })}
  </div>;
```
