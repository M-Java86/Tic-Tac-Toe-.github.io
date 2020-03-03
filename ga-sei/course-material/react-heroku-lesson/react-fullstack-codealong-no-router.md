---
title: React Full-Stack
type: lesson
duration: "6:00"
creator:
    name: Jamie King
    city: ATL
competencies: Full-Stack Applications
---
 
# Building a Full Stack Application with the MERN stack

### Objectives
*After this lesson, students will be able to:*
- Use MongoDB and Mongoose to persist data to be served to a React UI.
- Build an Express server that serves information in a JSON format.
- Connect API to React via `axios`
- Deploy the full stack application to Heroku

We've learned a lot about the modern tooling and practicing around the React ecosystem over the past couple of days.  A lot of modern JavaScript is focused on knowing the right tools for the job.  Today we will be pulling in everything we've learned about Node and React to build a full stack application using the MERN stack.

## MERN Stack
When you see MERN stack, this is typically just a shorthand way of saying that the application is a full-stack JavaScript app.  The tools that we use for MERN apps are: Mongo (Mongoose), Express, React, and Node.  While there are some boilerplate tools to build out a full MERN stack app, we are going to build our own using `create-react-app` and the Express and Mongo patterns we've used in the past. 
## Idea Board
Today we are going to be taking advantage of the data persistance of an API and the single page polish that React brings!  Our app is an idea tracker where a user can write out different ideas and save them to a database.  Kinda like leaving post-it notes in the browser!

Here's a GIF representation of the how this may look:
![idea board](https://slack-imgs.com/?c=1&url=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1600%2F1*SMKZC-Ej73wFOmqNT-JQ7Q.gif)

### You Do
Work with the students around you for the next 10 minutes.  Write out some user stories, sketch some wireframes, and think about out our data model may look like.

Additionally, think about the API routes that we will need. What components do you think we will need? What routes do we need to make available to the React app?

## Getting Started

Today we will start our project in Github instead of locally.

Go ahead and create a repo on github called `idea-board`. Make sure to include the `.gitignore` for Node apps and a `README`.

After creating the repo, go ahead and clone it locally into your class-exercises folder.

## Express Set Up

We're going to be building a lean Express app that will focus mainly on retrieving and serving API information. To start, we are only going to install `express`, `dotenv`, `body-parser`, and `mongoose`

```
npm init -y
npm install express dotenv body-parser mongoose
touch server.js
```

## Creating server.js

In our `server.js` file, we are going to create the most basic server possible.  As our needs grow, we will refactor and build onto the file.

```js
require("dotenv").config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, {
	useMongoClient: true
})

const connection = mongoose.connection
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')
})

// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err)	
}) 

app.use(bodyParser.json())
app.get('/', (req,res) => {
  res.send('Hello world!')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT)
})
```

And in `.env` we'll add our MongoDB url:

```
MONGODB_URI=mongodb://localhost/idea-board
```

...and finally, let's add the `.env` file and `/node_modules` folder to our `.gitignore`.

Let's start our app and test that it is working!

> COMMIT!

## Integrating create-react-app
Before we start working building out our models and controllers, let's first connect our Express app to React. Use `create-react-app` to get our UI up and running.

```bash
# Inside of /idea-board
create-react-app client
```

Your folder structure should now look something like this.

```
|- client
  |- node_modules
  |- public
  |- src
  |- package.json
  |- ...
|- node_modules
|- server.js
|- package.json
...
```

This will create a new React application for us to begin building our game.  Let's try to start our application.

**OH NO**

You may have gotten an error that looks something like this:

```bash
? Something is already running on port 3000. Probably:
  node server.js
  in /path_to_directory/Idea-Board
Would you like to run the app on another port instead? (Y/n)
```

Webpack uses the `port 3000` when ever we start our application.  This conflicts with our Express server that is also attached to `port 3000`.  In order to fix this, we will change our Express app to listen on `3001`.

Now we can run both servers at the same time. We can do that by starting our server in one window and our React app in another.  However, there is a tool we can use to run both of these servers within the same window.

## Concurrently

In order to run both our server and app at the same time, we are going to use an npm library called [`concurrently`](https://www.npmjs.com/package/concurrently). `concurrently` is going to allow us to run both our api server and webpack server at the same time.

```bash
# Inside idea-board directory
npm install concurrently
```
```json
// Inside package.json
...
"scripts": {
  "start": "node server.js",
  "dev": "concurrently \"nodemon server.js\" \"cd ./client  && npm start \" ",
  "test": "echo \"Error: no test specified\" && exit 1"
},
...
```

Now we can run `npm run dev` and our application will start on both port 3000 and 3001! Let's verify both are working by visiting both ports in the browser.

> COMMIT

## Deploying The App
Now that we have an extremely basic Express and React app, let's go ahead and deploy early.  This will be similar to the way we previously deployed server-rendered apps, but with a couple additional steps.

### Building a Production React App
When we develop React Apps, we use a bunch of extra tools that are unnecessary for a production environment (auto-reloading, error messaging, dev server, etc).  When we are ready to push our app into production, we can use a special script to get a prod ready version of our app.

Within our client folder, we can run a command called `npm run build`.  This will take all of the code that we've been running through webpack and bundle it all into a minified build ready for production deployment.  That will live inside a `build` directory.

After we build the app, we need to let Express know that it needs to be aware of the new static files. Finally, we need to make a get route at the index that will serve the `index.html` of the built production React app.

```js
// inside of server.js
...
  app.use(express.static(__dirname + '/client/build/'))
...
  app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })
...
```

We can test the production app now, by running `node server.js`.  If our app looks like what we intend, then we can proceed with deploying our app.

Let's update the `package.json` to help Heroku understand more about our app.  We will add a script called `postinstall` which will instruct Heroku to execute the same steps to prepare the app as we took manually.

```js
...
  //Set the Heroku version of Node to the most recent available.
  "engines": {
    "node": "8.9.4"
  },
...
//Postinstall will install the client packages and build the minified UI in Heroku.

  "scripts": {
    "start": "node server.js",
    "dev": "concurrently \"nodemon server.js\" \"cd ./client  && npm start \" ",
    "test": "echo \"Error: no test specified\" && exit 1",
    "postinstall": "cd client && npm install && npm run build"
  },
...
```

Now we can proceed with our Heroku deployment like normal:

```bash
heroku create inclass-idea-board
heroku addons:create mongolab:sandbox
git add -A
git commit -m "commit message"
git push heroku master
```

## Setting up a Database
Now that we've verified that we can run both apps at the same time and gotten the basic app up on Heroku, let's start building out the Schemas for our database.

Today's example app is going to have 1 model: `Idea`

### You Do
Create a new directory called `db` and create a `schema.js` within there. Then, create a Mongoose model for our `Idea` entity.

* Idea has title, description, and created and updated-at timestamps.
	* Make sure the default value for title and content is something similar to "New Title" and "New Content"

**Take a look at [Sample Project Two](https://github.com/dphurley/sample_project_two) if you need a refresher on how to do this**

> COMMIT

## Seed Data
Now that we have our model, let's go ahead and supply some seed data. Let's populate a seeds file with a few ideas.

```js
require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const Idea = require('./models/Idea')

const mars = new Idea({
  title: 'Fly to Mars',
  description: "Earth isn't Red enough. Let's move to a new planet"
})

const tesla = new Idea({
  title: 'Build a Car',
  description: "Gas is too expensive. I'm gonna build a car that doesn't need gas"
})

Idea.remove({})
  .then(() => mars.save())
  .then(() => tesla.save())
  .then(() => console.log('Successful Save!!!'))
  .then(() => mongoose.connection.close())
```

Next we run `node db/seeds.js` to populate our database.  Now we finally have enough info to build out our API.

> COMMIT

## Building an API
Now that we have data within our database, let's use Express to retrieve that info and serve it as JSON for our React app to consume.  In order to do that, we need to use Express Router to build routes for our API. This is going to look similar to the server side rendered controllers we built in the past, but with one major difference.

```js
// ./server.js
const ideasController = require('./controllers/ideasController')
app.use('/api/ideas', ideasController)
```

```js
// ./controllers/ideasController
const express = require('express')
const Idea = require('../db/models/Idea')
const router = express.Router()

router.get('/', (req, res) => {
  Idea.find({}).then(ideas => {
    res.json(ideas)
  })
  .catch((err) => console.log(err))
})

...

module.exports = router
```

Now if we check our route at `localhost:3001/api/ideas` we should see that we get a JSON object back.  We are able to get this JSON object by using `res.json` instead of `res.render` or `res.send`.

We can now retrieve the user that we created in our seeds.  This gives us enough to get started on building the UI for our `idea-board`.
We will need to build more routes later in the app, but this will work for the moment. _(YAGNI!)_

> COMMIT
> 
> DEPLOY

### Scaffolding out our Idea Page UI.

For the UI of our game, let's install our additional dependencies:

```bash
# inside of client directory
npm i axios styled-components
```
Our app will have a main `IdeaPage` component.

Within our `components` folder, we will go ahead and create a basic version of this component in `/components/IdeaPage.js`.  Once this is created, we can add the component to the `App.js` component.

```jsx
import React, { Component } from 'react'
import styled from 'styled-components'
import IdeaPage from './components/IdeaPage'

class App extends Component {
  render () {
    return (
		<div>
			<IdeaPage/>
		</div>
    )
  }
}

export default App
```

Unfortunately, when we load our UI we get an error!

```bash
XMLHttpRequest cannot load localhost:3001/api/ideas. Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.
```

This is an example of what's commonly referred to as a CORS error (Cross-Origin Resource Sharing)

### CORS
CORS is a mechanism that restricts API calls from domains that are outside of the domain from which the resource was initially served.  Basically this is a layer of protection for servers, because it prevents unwanted use of your API.

There are several ways that we can handle CORS requests, but for our app we are going to take advantage of the tooling provided by `create-react-app`.  We can add a "proxy" server to our React application, which will allow us to make requests that look they are coming from our current server but actually hit the server we define in the `package.json`

```json
...
"proxy": "http://localhost:3001",
...
```

**NOTE** When you add this proxy, you have to restart your server.  The auto-refresh will not pick up on the proxy addition.  

> COMMIT


## Building A Static Idea Board

Now that we are able to navigate to the `IdeaPage` component, we can focus on building out some static views.  Let's mock some data in the initial state and write some starter JSX.

```jsx
import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

class IdeaPage extends Component {
  state = {
    ideas: [
	    {
	      id: 1,
	      title: 'hello',
	      description: 'world'
	    }, {
	      id: 2,
	      title: 'hola',
	      description: 'mundo'
	    }, {
	      id: 3,
	      title: 'goodnight',
	      description: 'moon'
	    }, {
	      id: 4,
	      title: 'greetings',
	      description: 'earthlings'
	    }
    ]
  }

  render () {
    return (
      <div>
        <div>
          <h1>Idea Board</h1>
          <button>New Idea</button>
        </div>
        <div>
          {this.state.ideas.map((idea) 1 => {
            return (
              <div key={idea.title}>
                <input type="text" name="title"/>
                <textarea name="description"/>
                <button>Delete Idea</button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default IdeaPage
```

## You Do

Now that we have the static starter code, let's clean things up and add some styling. Next, use `styled-components` to add some styling to the page.  As a reminder, we ideally want our app to look something like this.

![idea board](https://slack-imgs.com/?c=1&url=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1600%2F1*SMKZC-Ej73wFOmqNT-JQ7Q.gif)

> COMMIT

## Displaying Ideas from the Database

Let's refactor this static page into something a little more dynamic.

Instead of displaying the static `ideas` from our `state`, we'll grab the current Ideas from the database and display those instead.

```javascript
// ideasController.js

router.get('/', async (req, res) => {
  try {
    const ideas = await Idea.find({})
    res.json(ideas)
  } catch (error) {
    console.log(error)
  }
})

```

```javascript
// IdeaPage.js

...
async componentWillMount() {
	const response = await axios.get('/api/ideas')
	this.setState({ideas: response.data})
}
...
```

## Adding a New Idea

Next up, let's add a click event to the `New Idea` button:

```js
// ideasController.js

router.post('/', async (req, res) => {
  try {
    const newIdea = await Idea.create({})
    res.json(newIdea)
  } catch (error) {
    console.log(error)
  }
})
```

```js
createIdea = async () => {
	const response = await axios.post(`/api/ideas`)
	const newIdea = response.data
	
	const newIdeas = [...this.state.ideas]
	newIdeas.unshift(newIdea) //This will add the new Idea to the beginning of the array
	this.setState({ideas: newIdeas})
}
...
<button onClick={this.createIdea}>New Idea</button>
```

## You Do
We will write similar code to delete an idea.  Work with the student's around you to write an Express route and create a custom method.

Hint: You will need one argument

```js
  deleteIdea = (idea) => {//Your code here}
```

> COMMIT

### Handling Form Changes
We can create empty ideas and delete those ideas, now we have the task of updating information and saving it to our server.  That means that we will need to work with forms!

Let's focus on creating a handleChange event to update our local state.

```js
...
  //We need to pass in multiple arguments here.  The first is the object of the specific idea that is being changed.
  //And the event object is the special event listener object that has information about the value and name 
  handleChange = (idea, event) => {
    const updatedIdeas = [...this.state.ideas] //Here we use the spread operator to clone the array

	const ideaToUpdate = updatedIdeas.find((newIdea) => {
		return newIdea._id === idea._id
	})
	
    //Here we are using bracket syntax instead of dot-notation to transform a specific property
    //More info on bracket syntax here
    //https://medium.com/@prufrock123/js-dot-notation-vs-bracket-notation-797c4e34f01d
	ideaToUpdate[event.target.name] = event.target.value
	
    this.setState({ideas: updatedIdeas})
  }
...
```

```js
<input onChange={(e) => handleChange(idea, e)}
  type="text" name="title" value={idea.title}/>
```

## Triggering an Update

The final step in our app is to create the ability to update an idea.

First, we'll add a route to the IdeasController

```js
// /api/ideas/:id
router.patch('/:ideaId', async (request, response) => {
  await Idea.findByIdAndUpdate(request.params.ideaId, request.body)
  response.json(updatedIdea)
})
```

Next, we will add a method that will trigger the patch:

```js
updateIdea = async (idea) => {
	try {
	  await axios.patch(`/api/ideas/${idea._id}`, {idea})
	} catch(error) {
	  console.log(error)
	}
}
```

Finally, let's tie this event to an individual idea.  We COULD attach that to a button and have a boring old onClick event, but let's try something new.

## You Do
Check out the [Synthetic Event docs](https://reactjs.org/docs/events.html) and find the event that allows us to trigger the update whenever a user leaves an input.

> COMMITrequest.params.id
> DEPLOY

We did it! We now have an app that updates our ideas in real time.  And through using React, we built it in a scalable and easy to read way.

## Further Reading:

* [Using `create-react-app` with a server](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/)
* [94 Examples of Fullstack React Apps](https://react.rocks/tag/FullStack)
