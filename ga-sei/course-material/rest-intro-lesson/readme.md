# REST Architecture

- Give 3 reasons why you would want to use a RESTful routing architecture
- Define what a resource is
- Define what "state" is
- Fill in a RESTful route table

# Background

- `/first-post`
- `/post/second`
- `/the-third-post-I-ever-wrote`


# Intro to REST

In addition to requesting files on the file system - routes used to take what
ever form the developer(s) pleased. You'd end up with some wacky URLs/paths:

- `/first-post`
- `/post/second`
- `/the-third-post-I-ever-wrote`

There was no pattern for designing routes! This is where REST comes in.

REST stands for **Representational State Transfer**. REST solves a number of
problems with routing, but the most important for our use cases is the problem
of the relationship between URLs and HTTP methods and how we should define our
Routes. When we're building web applications (in any framework) we want our
routes to be RESTful, meaning they follow the guidelines of REST. What does that
mean?

The first thing to consider is, what is our *resource*? A resource is any domain
of our application. Generally, if you have a model in your app, it can be
considered a resource (though not always). In a to do list application, the
resources are probably: to do items, to do lists, and users.

A table of our REST routes and their corresponding controller actions for to do
items would therefore look like this:

| URL | Path | Method  | Action | Description |
| --- | --- | --- | --- | --- |
| `/todo` | `/` | `GET` | #index | List all to dos |
| `/todo/new` | `/new` | `GET` | #new | Render form to create a new to do |
| `/todo` | `/` | `POST` | #create | Create new to do in the database |
| `/todo/1` | `/:id` | `GET` | #show | Show a single to do |
| `/todo/1/edit` | `/:id/edit` | `GET` | #edit | Render form to update a to do |
| `/todo/1` | `/:id` | `PATCH`/`PUT` | #update | Update to do in the database |
| `/todo/1` | `/:id` | `DELETE` | #delete | Delete a to do  |

For every resource in our application, we want to follow this structure. That
doesn't necessarily meant that every resource will have all of these routes and
actions - but that our routes and actions should follow this pattern.

#### Recap

A **route** is a **path** and a **verb**:

| URL | Path | Verb |
| --- | --- | --- |
| `http://www.facebook.com/users/stevejobs` | `/users/stevejobs` | `GET`

REST stands for **Representational State Transfer** and is a pattern that
determines how we should structure our routes.

#### Resource Table

Bookmark this table! It can be really helpful to think through your routes.
Believe it or not: almost every action you perform on the web can be described
by one of these.

| URL | Path | Method  | Action | Description |
| --- | --- | --- | --- | --- |
| `/resource` | `/` | `GET` | #index | List all items of `resource` |
| `/resource/new` | `/new` | `GET` | #new | Render form to create a new instance of `resource` |
| `/resource` | `/` | `POST` | #create | Create new `resource` in the database |
| `/resource/1` | `/:id` | `GET` | #show | Show a single `resource` |
| `/resource/1/edit` | `/:id/edit` | `GET` | #edit | Render form to update a single `resource` |
| `/resource/1` | `/:id` | `PATCH`/`PUT` | #update | Update `resource` in the database |
| `/resource/1` | `/:id` | `DELETE` | #delete | Delete a `resource`  |
our Express app):

## RESTful routing in Express

Notice in the examples above that we're passing in a callback function to the
route method? That is one way to design and implement your routes - but there's
a better way to do it: separate your routes and your controller actions.

In the example above, we're doing our routing and controlling in the same place.
We want to separate them by moving those callback functions. If we think back to
our file system from before: we're going to define our routes inside the
`routes/` directory and our controllers inside the `controllers/` directory.
A controller is just an object made up of methods (the actions in the Resource
Table above). We'll export that object from our `controllers/` directory and
import it into our router. Then, we'll define our routes and map them to the
corresponding controller action.

```js
// routers/todo.js
const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo.js')

router.get('/', todoController.index)
router.get('/new', todoController.new)
router.post('/', todoController.create)
router.get('/:id', todoController.show)
router.get('/:id/edit', todoController.edit)
router.put('/:id', todoController.update)
router.delete('/:id', todoController.delete)

module.exports = router
```
