[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Express: Views

When we're building full stack applications, we're controlling the
`request-response` cycle that we discussed back in Intro to Node. As part of
that cycle, our server *has* to send some kind of response - even if it's to let
the client know there was an error. Our response is the meaningful data that our
user needs (based on their request) to continue interacting with our
application. For us, that means sending HTML.

Within the Model-View-Controller pattern, this part is called the View. The View
in MVC is the part of the application that the user interacts with using their
browser. By rendering a view, our users can continue to interact with our app.

## Prerequisites

* HTML
* Node and npm
* MVC
* Express routing, models and queries

## Objectives

By the end of this, developers should be able to:

* Describe views and how they relate to the rest of MVC
* Discuss the key features of templating
* Write views using Handlebars
* Define some view logic (i.e. `if` and `each`)
* Work with forms in views
* Send `PUT` and `DELETE` requests with `method-override`
* Work with partials to make our views more modular

## Introduction

As developers working on a large application, we want to use tools that will
make our lives easier. That's one reason why we're using Express! Rather than
build and maintain our server by hand, we're going to use a framework that makes
it a little easier. Same with Mongoose: rather than write "raw" MongoDB queries,
we're going to use an ODM that makes working with the data in our database
a little easier.

Handlebars is going to take that philosphy in making our lives easier to our views.

Templating lets us be modular and programmatic when building our views.
Templating languages (i.e. Handlebars) give us features that make generating
HTML easier. What if Facebook had to create a unique html page for every single user, and had to update it everytime we added a photo or a new status or sent a new chat message to a friend?

Templating languages allows us to dynamically build customized HTML files depending on the request our user sends, the data in our database, and the logic held in our controllers.

### Key Features of Handlebars

Handlebars is considered a server-side rendering language.  This means that we
can use our Express server to inject values into a special Handlebars file.
Handlebars will then write a regular ol' HTML file using our `template` and the `values` we send.  In the future, we will see the other way to build out dynamic views... client-side rendering.

#### Context

The first important feature that Handlebars gives us is context: data that we
can render in our views.

If we define a view for a User's profile, then we want to render the data about
a specific user in that profile. Handlebars lets us do that:

```js
app.get('/profile/:id', (req, res) => {
  User.findById(req.params.id)
  .then(user => {
    // Argument 1 is the hbs file located in the views folder
    // Argument 2 is the data we want to send to handlebars
    res.render('users/show', { user })
  })
})
```

Then inside of our template:

```html
<h2>{{ user.name }}</h1>
```

When we pass an object as the second object to `render` it sets the context of
the template. Essentially, it's a way for us to pass data into a template. By
passing in the `user` object we can access all the properties of that object,
like `user.name`.

#### Logic

Handlebars also gives us some tools for control flow within our views, like `if`
and `if/else` statements.

Here's how we define and `if` statement:

```html
{{#if user}}
  <p>The user is signed in!</p>
{{/if}}
```

Here is how we define an `if/else` statement:

```html
{{#if user}}
  <p>The user is signed in!</p>
{{else}}
  <p>The user is NOT signed in!</p>
{{/if}}
```

What we can do with conditionals is rather limited: we can only test if a value
is truthy or falsey. We can't, for instance, check to see if two values are
equal to each other. Any more complicated control flow should probably take
place in our JavaScript somewhere (rather than in our Handlebars template).

#### Looping

We can loop using Handlebars, which makes rendering lists of data really easy.
We can define a block of HTML and loop through an array of objects to render
each item with that block.

```html
<ul>
  {{#each items}}
    <li>{{ title }}</li>
  {{/each}}
</ul>
```

That would give us the following HTML:

```html
<ul>
  <li>Express</li>
  <li>Mongoose</li>
  <li>Handlebars</li>
</ul>
```

## RESTful Views

We're going to define our views as an extension of our routes and controller
actions, which will make knowing what views we need (and naming those views) a
lot easier.

For instance, if we have index, show, new, and create actions in our controller
then we know we'll need index, show and new views:

| URL | Path | Method  | Action | View |
| --- | --- | --- | --- | --- |
| `/resource` | `/` | `GET` | #index | `index.hbs` |
| `/resource/new` | `/new` | `GET` | #new | `new.hbs` |
| `/resource` | `/` | `POST` | #create | |
| `/resource/1` | `/:id` | `GET` | #show | `show.hbs` |
| `/resource/1/edit` | `/:id/edit` | `GET` | #edit | `edit.hbs` |
| `/resource/1` | `/:id` | `PATCH`/`PUT` | #update | | 
| `/resource/1` | `/:id` | `DELETE` | #delete | |

We don't need views for create, update and delete because those routes will
redirect to another action. When we create a new record of our resource, for
instance, we'll save it into the database and then redirect to the show action
for our newly created record.

### Our `views` Directory

Our `views/` directory is going to be pretty simple to set up then! We'll need
to create a new subdirectory for each resource and then each of the four views
that we need from `index.hbs`, `new.hbs`, `show.hbs`, `edit.hbs`:

```sh
views
├── layout.hbs
└── resource
    ├── index.hbs
    ├── new.hbs
    ├── show.hbs
    └── edit.hbs
```

> Note that you wont always need all of these views, just like you don't always
> need all 7 routes and actions.

### You Do: Set Up Handlebars (15 min)

In order to start working with Handlebars, we will need to install and set up this new library.  Take a look at the step-by-step instructions [here](./setting-up-handlebars.md) and complete each of them in order to start working with Handlebars.

#### Views

What views do we need for a specific resource?

The value of the RESTful routing table, is we can think about what it is we're
trying to achieve and review the table to see what we need. We're trying to
answer the question, "What views do I need?".

The first question is, "What actions are we performing?". You can answer that
question by looking at your controller - what action methods are in there?

Once you know what controller actions you have, look at the table: which of
those get views? Which ones don't?

### Start with the Layout

The best place to start when defining your views is with the `layout.hbs` file.
The layout file is going to contain all the HTML that will be on every page: the
`head` tag, the global header and footer, and the navigation.

#### Working with Forms

Working with forms can be a little tricky! When we define the form in our
template, there are 3 things we need to worry about:

1. We need to define the `action` attribute on the `form` element, this is the
   route the form will submit to
1. We need to define the `method` attribute on the `form` element as `POST` so
   that we send a `POST` request when submittin the form.
1. Every `input` in our form needs to have a `name` attribute.

Let's explain why we need that last one: every `input` in our form needs to have
a `name` attribute.

When we define a form, we submit it to a route inside of our app (that's what
the `action` and `method` attributes control). The input to the form then become
the `body` of that request. When we submit a form, the `body` will be an object
where the `name` attribute on the input fields act as the keys and the values
inside the input fields act as the values.

So this form:

```html
<form action="/todos" method="POST">
  <input type="text" name="description" placeholder="Enter todo description">
  <input type="submit" value="Add Todo" class="btn">
</form>
```

Will generate this `body` object:

```js
app.post('/todos', (req, res) => {
  console.log(req.body)
  /*
   * {
   *    description: 'Do the laundry',
   * }
   */
})
```

Our input with a `name` of `description` creates the `description: 'Do the laundry'`.

#### Body Parser (Now Built Into Express!)

By default, Express does not parse the body of a request - it ignores it
completely. When we're working with forms, that's not what we want! In order to
have the body of a request included in the request object (`req`), we need to
use a special piece of middleware.  For years, this was a separate library that we would have to download through `npm` called `body-parser`, but now it's methods are built into `express`!

```js
// Make sure this is above wherever you have written routes.
// For forms, we want to use the urlencoded feature of body parser:
app.use(express.urlencoded({ extended: true }));

// Later, when we're working with JSON, we'll want to use the JSON
// feature of body parser:
app.use(express.json());
```

### Using `PUT` and `DELETE`

When we introduced the HTTP methods, one of the side notes was that browsers have only implemented `GET` and `POST`. If you think about REST and our resource table, that means we don't have any way of updating or deleting items!

We don't have any native, browser implementation way of doing so. In a future lesson we'll talk about AJAX, which is a tool for making HTTP requests with JavaScript. For now, we're going to learn about some Express middleware called [Method Override](https://github.com/expressjs/method-override).

Method override lets us *override* the HTTP *method* of a request. We do so by adding a query parameter to the URL. So if we have a form that we want to make a `PUT` request with, we would add `?_method=PUT` to the end of the action:

```html
<form action="/todos?_method=PUT" method="POST">
  <input type="text" name="description" placeholder="Enter todo description">
  <input type="submit" value="Sign Up" class="btn">
</form>
```

## Additional Resources

* [Express Documentation on using Templating Engines](https://expressjs.com/en/guide/using-template-engines.html)
* [Handlebars Documentation](http://handlebarsjs.com/)
* [Body Parser](https://github.com/expressjs/body-parser)
* [Method Override](https://github.com/expressjs/method-override)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
