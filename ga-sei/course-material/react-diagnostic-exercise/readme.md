# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> MERN Stack Bog App

### Overview

Everyone does blog apps. Now, you're going to work on a **bog app**. Researchers are collecting data on a local bog and need an app to quickly record field data.

### Objectives

It's time to put all your React and Express knowledge into practice! In this project, you will:

- Review **CRUD** in the context of a MERN application.
- Build Forms and communicate with a back end using React
- Build memory for the steps required to create an Express app.


### Workflow

You'll work through this project as a "time trial." You will be building the app 4 times, each time gaining skills through repetition. Here's how we want you to work:

  1. Download the [mern-template-project](../mern-template-project) for your
starter code. Rename the directory to `bog-app-one`. Follow the instructions in that readme document for the
setup process.
  1. Move through the instructions below to build your bog app.  Commit your work along the way and at the conclusion.  Take notes on your workflow.
  1. When you've finished a run, download the mern-template-project again and rename the directory (e.g. `bog-app-two`, `bog-app-three`). Watch out that you're not in a nested MERN app folder!
  1. Go through the lab another time. This time, time yourself on how long it takes you. Push yourself to peek at the hints more sparingly and code as much as you can on your own. Try not reference the solution; you can look at your first MERN app if you're stuck.  Again, make sure to commit your work.
  1. Repeat the lab a third time. Try not to use the instructions to build your bog app and refer to them only when very stuck. Time yourself again and aim to build the app faster than you built it the second time around. Make sure you have roughly the same number of commits as you had on your second run. Version control isn't the place to cut corners!
  1. Repeat the lab a fourth time. Time yourself. Try to streamline your process. Squash bugs faster and try not to look at any resources. Commit often and build it as fast as you can!


<img src="https://camo.githubusercontent.com/d758d1c1a85e7829d11df73ea25820533db881e7/687474703a2f2f692e67697068792e636f6d2f545467647a75545766784d566439716a4262712e676966" width="40%">

## Submission

When you're finished with your timed runs, submit a GitHub repo link for each application you built.

## Background

> A bog is a mire that accumulates peat, a deposit of dead plant material — often mosses.

You may hear bog and think of Yoda and Luke...

![](https://cloud.githubusercontent.com/assets/7833470/11500466/211c115a-97e2-11e5-9b7f-9fc900023d8d.jpeg)

Or maybe Sir Didymus and The Bog of Eternal Stench...

![](https://cloud.githubusercontent.com/assets/7833470/11500467/212e3c7c-97e2-11e5-9256-ca7e28cf6941.gif)

## CRUD and REST Reference

REST stands for **REpresentational State Transfer**. We will strictly adhere to RESTful *routing*.

| Verb | Path | Action | Used for |
| :--- | :--- | :--- | :--- |
| GET | /api/creatures | index | displaying list of all creatures |
| POST | /api/creatures | create | creating a new creature in the database |
| GET | /api/creatures/:creatureId | show | displaying a specific creature |
| PUT | /api/creatures/:creatureId | update | updating a specific creature in the database |
| DELETE | /api/creatures/:creatureId | destroy | deleting a specific creature in the database |

## Part I: Set up

![](https://camo.githubusercontent.com/58b675eee577ccb1f4b57b14e58761b3fa56a3b8/687474703a2f2f692e67697068792e636f6d2f313149334f7346524c6b514951552e676966)

1. In you haven't already, download the [mern-template-project](../mern-template-project) for your
starter code. Follow the instructions in that readme document for the
setup process.

1. Follow the steps with `TODO` in `models/connection.js` to setup your
mongo db connection.  You will need to replace the placeholder of `<db-name>` with the name of your database (e.g. `bog-app-one`)

## Part 2. Build the model
### Creatures Model

1. Create a file: `models/creature.js`.  Feel free to use the
   `models/template.js` file to write your boiler plate code.

1. Define the CreatureSchema.  The schema should have the following properties:
      * name (String)
      * description (String)


1. Compile your model and assign to a variable called `CreatureCollection`

1. Create a set of functions defined by the table below

| function name | arguments                 | returns                             | goal                                        |
|---------------|---------------------------|-------------------------------------|---------------------------------------------|
| getAllCreatures  | `()`                      | list of all creatures                  | retrieve all creatures from the DB             |
| getCreature      | `(creatureId)`               | single creature with `creatureId` from DB | retrieve a single creature from the DB         |
| addNewCreature   | `(newCreature)`              | n/a                                 | add `newCreature` to DB                        |
| updateCreature   | `(creatureId, updatedCreature)` | n/a                                 | update creature with `creatureId` to updatedCreature |
| deleteCreature   | `(creatureId)`               | n/a                                 | deletes creature with `creatureId` from DB        |

## Part 3. Build the controller

1. Create a file: `controllers/creature.js`. Feel free to use the
   `controllers/template.js` file to write your boiler plate code.

### Creatures List Route

1. Create an HTTP request handler in `controllers/creature.js` for: `GET /creatures`. You will need to use
   the `getAllCreatures` model function to get the list of creatures and send the response back using the `res.json()` method.

### Single Creature Route

1. Create an HTTP request handler in `controllers/creature.js` for: `GET /creatures/:creatureId`. You will need to use the `getCreature` model
   function to get a single creature and send the response back using the `res.json()` method.

### Create Creature Route

1. Create an HTTP request handler in `controllers/creature.js` for `POST /creatures`. You will need to use the `addNewCreature` model
   function to create a creature and send the response back using the `res.json()` method.

### Update Creature Route

1. Create an HTTP request handler in `controllers/creature.js` for `PUT /creatures/:creatureId`. You will need to use the `updateCreature` model
   function to update a single creature and send the response back using the `res.json()` method.

### Delete Creature Route

1. Create an HTTP request handler in `controllers/creature.js` for `DELETE /creatures/:creatureId`. You will need to use the `deleteCreature` model
   function to delete a single creature and send the response back using the `res.json()` method.

## Part 4. Build out React components

Once you have a working API, it's now time to tie that to a React app.

You should now be able to run both your API and React app by using the command
```bash
  npm run dev
```

**ASIDE**: This is a great opportunity to deploy to Heroku!
Make sure you follow these commands.
```bash
  heroku create
  heroku addons:create mongolab:sandbox
  git push heroku master

```

### Create Creatures and SingleCreature components

1. Create a `components` directory in `client/src`
1. In `client/src/components` create a file called `Creatures.js`
1. In `client/src/components` create a file called `SingleCreature.js`

### Set up React Router and create Components for Routes

First we will get rid of the boilerplate code in `App.js` and replace it with some `react-router` code

```jsx
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Creatures from './components/Creatures'
import SingleCreature from './components/SingleCreature'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Creatures}/>
            <Route path="/:creatureId" component={SingleCreature}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
```

### Read All and Create New
Use the `Creatures` component to house components that allow you do the following:
 - Get All Creatures and display them as a list of `Link`s.
 - Click a button to toggle a form on and off.
 - Input data into a form to create a new creature.

### Read One, Update, and Delete
Use the `SingleCreature` component to house components that allow you to get one creature, toggle a form to update the creature, and delete a creature.

## Additional Development Ideas for after Version 4

* Add links to other pages to help users navigate your site. For instance, a creature show page might have a link to the creatures index page. Use `Link`.  Also link each creature on the `Creatures` component to its individual `show` page.
* If you'd like, add a `navbar` with links to the homepage (`/`).  Make a new route called `/new` which will open the Creatures component, but set the form toggle to true by default.  This navbar should show up on every page. Take advantage of whichever CSS library you chose to include!
* Read about [Mongoose Validations](http://mongoosejs.com/docs/validation.html), and add validations to the `Creature` model to make sure a new creature can't be created without a `name` and `description`.

## CONGRATULATIONS! You have created a Bog App! Take a break, you look *Swamped*!

![](https://cloud.githubusercontent.com/assets/7833470/11501240/83536030-97e7-11e5-8060-fa7666de7165.jpeg)
