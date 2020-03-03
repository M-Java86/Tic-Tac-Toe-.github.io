# DB Queries with Mongoose

## Learning Objectives

- Understand the concepts behind CRUD
- Write queries using mongoose to get and put data from mongoDB
- Understand controllers and how they help us trigger queries
- Understand seed files and seeding the database.

## Using Models to Perform Queries (5 min / 0:10)

In the last lesson you built out your schemas and models, but you didn't get a chance to use them. So what's the point?!

Today we're going to use the heck out of some models.

But...what do we do with them? We perform queries on the database!

Alas, lets consult the documentation to see.

https://mongoosejs.com/docs/queries.html

These are all the `methods` that are attached to our model. They allow us to perform queries using the models we already built, which represent the data we've described in a schema.

Just like we created `classes` with `class methods` in our OOP lesson (remember the Gladiator Lab?), our models have methods on them that we can call to perform operations.

## CRUD (15 min / 0:25)

CRUD is just an acronym. It doesn't mean "junk". It stands for:

- **C**reate
- **R**ead
- **U**pdate
- **D**elete

These 4 operations are the foundation of how you will interact with your data and database.

Any read/write operations can be put into one of these 4 categories.

- **CREATE** means we create new data, for the first time. It didn't exist previously.
- **READ** means we search for data that already exists in the database. This could mean one specific thing or many general things.
- **UPDATE** means we search for data that already exists in the database, and make changes to it.
- **DELETE** means....well, you know what delete means.

### You do: Identifying CRUD

> 5 minute exercise, 5 minute review

Let's look at the [query methods](https://mongoosejs.com/docs/queries.html) we have available and see if we can map them to each of the CRUD actions.

Pair up with a partner on the other side of the room and spend 5 minutes looking at the methods from the documentation.

Additionally, some of these methods are designed to operate on a single record, and others on multiple records. Include that in your sorting.

Here are the methods available. Copy paste this list into your favorite text editor. Next to each one, write the action that it describes and whether it deletes "one" or "multiple". 

```js
Model.deleteMany() // example: delete multiple
Model.deleteOne()
Model.find()
Model.findById()
Model.findByIdAndDelete()
Model.findByIdAndRemove()
Model.findByIdAndUpdate()
Model.findOne()
Model.findOneAndDelete()
Model.findOneAndRemove()
Model.findOneAndUpdate()
Model.replaceOne()
Model.updateMany()
Model.updateOne()
```

## Anatomy of a query (15 min / 0:30)

Now we'll take a look at how we actually write and use these queries in our javascript code.

Each model represents a collection of documents in our database. So we always have to start with the model we want to work on.

```js
// assume Author is imported for the rest of these
const Author = require("./models/author")

Author
```

Then we add the method we want to run

```js
Author.find()
```

Each method takes `parameters` which is what we can pass in to narrow down our search.

```js
Author.find({ firstName: "Robert" })
```

In this case, we are looking for **all** authors with a firstName of "Robert"

So, that's great. What do we do with the result of our query? How do we get the value out?

### Aside: Promises

Promises are a much bigger concept in JavaScript programming that we don't spend a lot of time on. But it's worth covering here in Mongoose territory.

Many operations in JavaScript are what's called `asynchronous`. Things like database calls, AJAX requests, and file/disk operations are all asychronous. This basically means that they don't execute immediately, so we need to structure our code to handle what gets returned to us when the code finishes running.

> Side side note: [You Don't know JS](https://github.com/getify/You-Dont-Know-JS/tree/master/async%20%26%20performance) is a fantastic FREE online book and has some really in-depth explanations about async things.

One of the ways we can handle asynchronous operations is by using Promises. Promises give us a nice syntax to deal with the results of a function that takes an unknown amount of time to complete.

So for example, we can't do something like this when dealing with mongoose queries:

```js
let robs = Author.find({ firstName: "Robert" })
console.log(robs) // => undefined or Promise(<pending>)
```

`robs` is undefined in the console.log because javascript immediately jumps to run the next line of code before our `.find()` operation is finished.

Additionally, what gets returned from the `.find()` operation is called a `promise`. It's not the value of the find operation. What gets returned is a `promise` to give you the value once it's done executing.

In order to make the promise return something, we use `.then()`

```js
Author.find({ firstName: "Robert" }).then(authorResult => {
  console.log(authorResult)
})
```

`.then()` is a higher order function (like `.map`, `.filter`, etc...), so it takes a function as an argument, and the function gets passed the results of the `.find()` operation. Therefore, we can give it whatever name we want.

One more thing. We can't deal with promises by doing this either.

```js
let result = Author.find({ firstName: "Robert" }).then()
console.log(result)
```

We'll get something like this back:

```js
Promise { <pending> }
```

Super unhelpful.

Anyway, now that we know all this, let's go back to working with our queries.

## Anatomy of a query part II (5 min / 0:35)

We can search by any property that we have already declared in our schema definition. If we look at the `User` model from our previous lesson we can see what we've got to work with.

```js
const User = new Schema({
  email: String,
  password: String,
  chirps: [
    {
      type: Schema.Types.ObjectId,
      ref: "Chirp"
    }
  ]
})
```

We'll cover how to query references like `chirps` in a bit. For now let's just use `email` and `password` as parameters.

Now that we know how what methods we have available, and what stuff we can search by, let's write some sample queries!

### You do: 2 samples

For each of these, use a promise and console log the result of the query.

Search for a user with the email address of `test@example.com`

<details>
  <summary>
  Solution
  </summary>

```js
User.findOne({ email: "test@example.com" }).then(result => {
  console.log(result)
})
```

</details>


Search for a user with the password of `password1234`

<details>
  <summary>
  Solution
  </summary>

```js
User.findOne({ password: "password1234" }).then(result => {
  console.log(result)
})
```

</details>

## You do: Live query exercises (20 min / 0:55)

> 10 min exercise, 10 min review

Clone down the exercise repository here:
https://git.generalassemb.ly/atl-wdi/mongoose-queries-exercise

**Follow the setup instructions!!!**

Work through the prompts in `index.js` and write code for each one to make the query magic happen!

## Break (10 min / 1:05)

## Anatomy of a query part III (15 min / 1:20)

Now we know how to query some basic properties, lets talk about querying relations.

Let's look at our Chirp and Comment schemas this time.

```js
const Comment = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
})

const Chirp = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  comments: [Comment]
})
```

Both of these have a `ref` back to the User model. Which means we should be able to start with a chirp and look up the user, or start with a user and look up a chirp or comment.

A regular query will return something like this:

```js
// assuming a query of:
User.findOne({email: "elmerfudd@gmail.com"}).then(user => {
  console.log(user)
})

// we get the result:

{
  "_id" : ObjectId("5b9ae172fdf84f1823fc7412"),
  "email" : "elmerfudd@gmail.com",
  "password" : "elmerfudd",
  "chirps" : [ 
    ObjectId("5b9ae172fdf84f1823fc7418"),
    ObjectId("5b9ae172fdf84f1823fc7417")
  ],
  "__v" : 1
}
```

Note the `chirps` array. It contains a list of IDs, but no actual content. That's fine! That's what we told mongoose to do in our schema.
Instead of storing the value inside of the User, it stores the chirp in its own collection and just inserts an ID (as a reference) so that we can look it up.

So, in order to get the actual value, we have to use a method called `.populate()`. We tell `.populate()` what model it should look up, and it pulls in the contents for us.

```js
User.findOne({email: "elmerfudd@gmail.com"}).populate('chirps').then(user => {
  console.log(user)
})

// we get the full chirp instead of it just being an ID!
{
  chirps: [
    {
      createdAt: "2018-09-13T22:15:14.503Z",
      comments: [],
      _id: "5b9ae172fdf84f1823fc7418",
      content: "Kiww da wabbit!",
      author: "5b9ae172fdf84f1823fc7412",
      __v: 0
    },
    {
      createdAt: "2018-09-13T22:15:14.503Z",
      comments: [],
      _id: "5b9ae172fdf84f1823fc7417",
      content:
        "Shh. Be vewy vewy quiet. I'm hunting wabbits! Huh-huh-huh-huh!",
      author: "5b9ae172fdf84f1823fc7412",
      __v: 0
    }
  ],
  _id: "5b9ae172fdf84f1823fc7412",
  email: "elmerfudd@gmail.com",
  password: "elmerfudd",
  __v: 1
}
```

> Note: Populate is specific to mongoose, it's a little different than how we do it in the command line. See [$lookup](https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/) for that method.

Super cool right! Populate is an easy way to do what's called a "join". It grabs data from two different places, joins it together, and returns it all to us.

Time for more practice!

## You do: More query practice (20 min / 1:40)

> 10 min exercise, 10 min review

Work through the second part of the query practice in the `mongoose-queries-exercise` repo.

## Break (10 min / 1:50)

## Linking models to controllers (10 min / 2:00)

Let's make our models work for us now.

If we think about the desired presentation for the Chirp homepage, it makes sense for us to show a list of all of our Chirps.

In the last lesson we set up our controllers to just render a simple response. For example, our `application.js` controller looks something like this:

```js
module.exports = {
  index: (req, res) => {
    res.send("hello world")
  }
}
```

Let's start by requiring our Chirp model at the top of the file.

```js
const { Chirp } = require("../models/Chirp")
```

> Why do we have to use { Chirp } instead of just Chirp?

Now we'll use the model to get data from the database, and pass it into the render function.

```js
const applicationController = {
  index: (req, res) => {
    Chirp.find({})
      .populate("author")
      .then(chirps => {
        res.send({ chirps })
      })
  }
}

module.exports = applicationController
```

> Why did we just put `{ chirps }` here?

> What if we have 1000 records in the database? How can we limit the number of records we retrieve at once?

> How can we change the order in which things are displayed? Like show the newest chirps first?

Verify that this works by visiting the route for the application controller. Where are the routes defined? What URL do we visit to trigger this controller action?

Our responses are now starting to provide some value! We don't have all the fancy HTML yet, but our endpoints are starting to look pretty nice.

## Working with JSON Data: Postman

It's easy for us to test our JSON data when we make GET requests, but it's not possible to test POST, PUT, and DELETE routes without extra tools.

When we build APIs, we will need an extra tool to help us test the Create, Update, and Delete actions. One of the most common tools for us to use here is called Postman.

Let's go ahead and install it with `brew`

```
  brew cask install postman
```

Once we finish the installation, open the app and let's explore it's UI

<!-- TODO: Update this with more details later -->

## You do: Add Models to User controller (20 min / 2:20)

> 10 min exercise, 10 min review

For each of the methods in our user controller, we want to peform some kind of action. Let's take a look at the methods we have now:

```
  index
  new
  create
  show
  delete
```

(We can ignore `new` for now because it'll require input from a form, which we'll cover in the views lesson)

Think about which CRUD method each one should map to. Then, (using the [mongoose docs](http://mongoosejs.com/docs/queries.html) for reference!) write your queries to perform the actions you want.

<details>
  <summary>
  Solution
  </summary>

```js
const User = require('../models/User')

const userController = {
    index: (req, res) => {
        User.find({})
          .populate('chirps')
          .then((user) => {
              res.send(user)
          })
    },
    new: (req, res) => {
        res.send('Here is a blank form for a new user')
    },
    create: (req, res) => {
        User.create({
            email: req.body.email,
            password: req.body.password
        })
          .then((user) => {
              user.save()
              res.send(user)
          })
    },
    show: (req, res) => {
        User.findById(req.params.userId)
          .populate('chirps')
          .then((user) => {
              res.send(user)
          })
    },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId)
          .then(() => {
              res.send('deleted')
          })

    }
}

module.exports = userController
```

</details>

If you get done early, go ahead and do the same for the Chirps controller.

## We do: Add models to Chirp controller (10 min / 2:30)

Let's now do the same for our chirps.

```js

const User = require('../models/User')
const {Chirp} = require('../models/Chirp')

const chirpController = {
    index: (req, res) => {
        User.findById(req.params.userId)
          .populate('chirps')
          .then((user) => {
              res.send(user.chirps)
          })
    },
    new: (req, res) => {
        res.send('Showing form to create a new chirp')
    },
    create: (req, res) => {
        User.findById(req.params.userId)
            .then((user) => {
                Chirp.create({
                    content: req.body.content,
                    comments: [{ content: "first" }]
                })
                    .then((newChirp) => {
                        user.chirps.push(newChirp)
                        user.save()
                        res.send(newChirp)
                    })
            })
    },
    show: (req, res) => {
        Chirp.findById(req.params.chirpId)
          .then((chirp) => {
              res.send(chirp)
          })
    },
    edit: (req, res) => {
        res.send('Showing form to edit a chirp')
    },
    update: (req, res) => {
        Chirp.findByIdAndUpdate(req.params.chirpId, req.body, {new: true})
          .then((chirp) => {
              chirp.save()
              res.send(chirp)
          })
    },
    delete: (req, res) => {
        Chirp.findByIdAndDelete(req.params.chirpId)
          .then(() => {
              res.send('deleted')
          })
    }
}

module.exports = chirpController
```

Let's verify that this stuff works!

