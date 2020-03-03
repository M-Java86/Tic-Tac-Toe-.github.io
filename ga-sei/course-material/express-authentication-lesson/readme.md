# Local Authentication with Express and Passport

## Learning Objectives

- Explain the difference between Encryption and Hashing
- Explain what an authentication strategy is
- Use passport-local to implement user authentication in an Express application
- Explain the difference between sessions and flashes
- Explain the role cookies play in user authentication

## Intro to Passport.js (10 min / 0:10)

From the [passport website](http://passportjs.org/docs):

"_Passport is authentication Middleware for Node. It is designed to serve a singular purpose: authenticate requests. When writing modules, encapsulation is a virtue, so Passport delegates all other functionality to the application. This separation of concerns keeps code clean and maintainable, and makes Passport extremely easy to integrate into an application._

_In modern web applications, authentication can take a variety of forms. Traditionally, users log in by providing a username and password. With the rise of social networking, single sign-on using an OAuth provider such as Facebook or Twitter has become a popular authentication method. Services that expose an API often require token-based credentials to protect access._"

### Strategies

The main concept when using passport is to register _Strategies_.  A strategy is a passport Middleware that will create some action in the background and execute a callback; the callback should be called with different arguments depending on whether the action that has been performed in the strategy was successful or not. Based on this and on some config params, passport will redirect the request to different paths.

Because strategies are packaged as individual modules, we can pick and choose which ones we need for our application. This logic allows the developer to keep the code simple - without unnecessary dependencies - in the controller and delegate the proper authentication job to some specific passport code.

There are currently more than [300 Passport.js strategies](https://www.passportjs.org/packages/).

### Why Passport.js?

[Passport.js](http://www.passportjs.org/) is a middleware that simplifies implementing user authentication in JS applications.

Building your own authentication is hard - really hard. It's easy to not do it well. Doing it the wrong way can have major consquences, so it's almost always better to rely on something popular and prebuilt. 

Passport is a good solution for javascript applications. It's popular, well-tested, and secure.

When we use Passport and bcrypt together, it takes care of making sure that passwords are properly stored in our database (i.e. not in plain text).

> Note: We will talk about bcrypt shortly

<details>
  <summary><strong>Why might storing passwords in the database be a bad idea?</strong></summary>

  - Because of password reuse, if an attacker were to get access to our database, other accounts of our users may be threatened.
  - [Plain Text Offenders](http://plaintextoffenders.com/faq/devs)

</details>

<details>
  <summary><strong>What are the alternatives to storing passwords in plaintext?</strong></summary>

  - Hashing
  - Encryption

</details>

### You Do: Hashing vs. Encryption (10 min / 0:20)

Pair up, then read through [this blog post](http://www.securityinnovationeurope.com/blog/whats-the-difference-between-hashing-and-encrypting) together.

In pairs, post the answers to these questions in your own words as an issue on this repo.

<details>
  <summary><strong>What is the difference between encryption and hashing?</strong></summary>

  > **Encryption** takes a string and, using a key/algorithm, converts it to another string of variable length. The key/algorithm can be used to revert -- or "decrypt" -- the new string back to the original. In other words, it is a two-way process.
  >
  > **Hashing** is similar to encryption in that it converts a string to a different one using an algorithm. It cannot, however, be reverted back to the original, making it a one-way process.

</details>

<details>
  <summary><strong>When would you choose one over the other?</strong></summary>

  > Encryption should only be used if somebody or something needs to see the original string.

</details>

<details>
  <summary><strong>Which one should be used for passwords?</strong></summary>

  > **Hashing**. For security reasons, there is no need to store or gain access to the original password. All an application needs to do is to take in a password attempt, pass it through the hashing algorithm and see if it matches with the hash generated when the particular user signed for an account with an app.

</details>

> Some more resources...
>
> - [Encoding vs. Encryption vs. Hashing vs. Obfuscation](https://danielmiessler.com/study/encoding-encryption-hashing-obfuscation/#gs.7lUOAZI)
> - [Why are salted hashes more secure for password storage?](http://security.stackexchange.com/questions/51959/why-are-salted-hashes-more-secure-for-password-storage)

## Sessions / Flash (10 min / 0:30)

### Sessions

Many of us have been to several webpages that only allow us to access content if we are logged in users of the webpage. Why do you think this would be necessary for many websites? Also, how is this concept of "being signed in" done programmatically? How is that information persisted from request to request? Enter sessions.

Most applications need to keep track of the state of a particular user. Is a user logged-in? Is there information that is unique to this user's instance of being signed in?

HTTP is by nature, stateless. That is, the program is not keeping record of previous interactions. Without state, a user would have to identify themselves after every request. Our shopping carts in Amazon couldn't keep their contents.

A session is just a way to store data in the browser between requests. The session in JS is an object which holds the properties we need. Today in Express we will create a new session automatically when a new user signs into an application.

Sessions are used mostly for user authentication and authorization, shopping carts, and setting a current model to persist throughout requests.

A contrived example of a session object might look like this:

```js
{
  sessionID: 'shdfsk3@234jsd!!@#jx...',
  expires: '6/18/2018:00-00-00UTC'
}
```

Note that sessions shouldn't contain any sensitive information about the user.

#### Real example

- Open up your browser to a website that has authentication (like github). Make sure you're logged in.
- Open the inspector and go to the `Network` tab. Make sure you have it set to "All" requests (or to not filter any requests).
- Refresh the page, then click on the first request (it should be similar to the url of the site you're on).
- Click on the `Headers` tab and you can see all of the http headers that get sent and received with that request.

> Which one of these looks like it might contain session information?

### Flash

Flash is a message that is generated in one controller action, and is accessible only in the next controller action. It is used only to contain messages for the user, not any other sort of data.

Think of flash as a session that only lasts for one request.

## We Do: Implementing Passport.js (40 min / 1:10)

#### Setup/Review Starter Code

First, clone the starter code

```bash
$ git clone https://git.generalassemb.ly/atl-wdi/express-passport-local-authentication-codealong
```

`cd` into the cloned folder, and run `npm install` to ensure that we have all of the correct dependencies.

The starter-code is structured like this:

```
.
└── app
    ├── app.js
    ├── config
    │   ├── passport.js
    ├── controllers
    │   └── application.js
    │   └── auth.js
    ├── db
    │   └── connection.js
    ├── models
    │   └── user.js
    ├── routes
    │   └── index.js
    ├── package.json
    ├── public
    │   └── css
    │       └── bootstrap.min.css
    └── views
        ├── index.hbs
        ├── layout.hbs
        ├── login.hbs
        ├── secret.hbs
        └── signup.hbs
```

Now let's open the code up in Visual Studio Code with `code .`

In `app.js` require in passport. Near the top of your code add in `const passport = require('passport')`

At the end of your middleware after `app.use(flash())` add the following code:

```js
// Creates an instance of passport to be used in Express
app.use(passport.initialize())
// Sets up sessions to remember a user.
app.use(passport.session())

// This is where we will build out our custom passport configurations
require('./config/passport')(passport)
```

Take a few minutes to look over the files and familiarize yourself with the content and code structure. What looks familiar? What's new? What stands out?

#### Users & Statics Controller

Let's have a quick look at our routes in the `routes/index.js` file:

```
// GET / (index page)
// Restricted page GET /secret
// GET /signup
// POST /signup
// GET /login
// POST /login
// GET /logout
```

#### Signup

First we will implement the signup logic. For this, we will have:

1. a route to display the signup form (GET)
2. a route to receive the params sent by the form (POST)

When the server receives the signup params, the job of saving the user data into the database, hashing the password and validating the data will be delegated to the strategy allocated for this part of the authentication, this logic will be written in `config/passport.js`

Open the file `config/passport.js` and add:

```javascript
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')

const passportConfig = (passport) => {
  // Names of important fields for login
  const strategyFields = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }

  const localSignupCallback = (req, email, password, callback) => {
    // We'll add logic here
  }

  passport.use('local-signup', new LocalStrategy(strategyFields, localSignupCallback))
}

module.exports = passportConfig
```

Here we are declaring the strategy for the signup - the first argument given to `LocalStrategy` is an object giving info about the fields we will use for the authentication.

By default, passport-local expects to find the fields `username` and `password` in the request. If you use different field names on the form, as we do, you can give this information to `LocalStrategy`.

The third argument will tell the strategy to send the *request* object to the callback so that we can do further things with it.

Then, we pass the function that we want to be executed as a callback when this strategy is called: this callback method will receive the request object (`req`); the values corresponding to the fields name given in the object; and the callback method(`callback`) to execute when this 'strategy' is done.

Now, inside this callback method, we will implement our custom logic to signup a user.

```js
...
const localSignupCallback = (req, email, password, callback) => {
  // Find a single user by email address
    User.findOne({ 'local.email': email }).then((user) => {

      // If the user exists
      if (user) {
        // Throw an error the the email is in use
        return callback(null, false, req.flash('signupMessage', 'this email is already in use'))
      } else {
        // Else create a user.
        const newUser = new User()
        newUser.local.email = email
        // Encrypt the users password for security.
        // We need to create this function
        newUser.local.password = newUser.encrypt(password)

        // Save the user, and return the saved user. 
        newUser.save().then((saved) => {
          return callback(null, saved)
        })
      }
    })
  }

```

First we will try to find a user with the same email, to make sure this email is not already use. In this case the `User` variable is our model object.

Once we have the result of this mongo request, we will check if a user document is returned - meaning that a user with this email already exists. In this case, we will call the `callback` method with the two arguments `null` and `false` - the first argument is for when a server error happens; the second one corresponds to the user object, which in this case hasn't been created, so we return false.

If no user is returned, it means that the email received in the request can be used to create a new user object. We will, therefore create a new user object, hash the password and save the new created object to our mongo collection. When all this logic is created, we will call the `callback` method with the two arguments: `null` and the new user object created.

In the first situation we pass `false` as the second argument, in the second case, we pass a user object to the callback, corresponding to true, based on this argument, passport will know if the strategy has been successfully executed and if the request should redirect to the `success` or `failure` path. (see below).

#### models/user.js

The last thing is to add the method `encrypt` to the *user model* to hash the password received and save it as encrypted:

```javascript
  User.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
```

Here we generate a salt token and then hash the password using this new salt.

That's all for the signup strategy.

#### Route Handler

Now we need to use this strategy in the route handler.

First, at the top of `auth.js`, we need to require passport.

Now, for the `createUser` controller method associated with the POST `/signup` route, we will add the call to the strategy we've declared

```js
const passport = require('passport')

const authController = {
  ...,
  createUser: (req, res) => {
    var signupStrategy = passport.authenticate('local-signup', {
      successRedirect : '/',
      failureRedirect : '/signup',
      failureFlash : true
    });

    return signupStrategy(req, res);
  },
  ...
}
```

Here we are calling the method `authenticate` (given to us by passport) and then telling passport which strategy (`'local-signup'`) to use.

The second argument tells passport what to do in case of a success or failure.

- If the authentication was successful, then the response will redirect to `/`
- In case of failure, the response will redirect back to the form `/signup`


#### Session

Passport authentication works by storing a value in a cookie, and then, this cookie is sent to the server for every request until the session expires or is destroyed. This is a form of [serialization](https://en.wikipedia.org/wiki/Serialization).

To use the session with passport, we need to create two new methods in `config/passport.js`. These should go inside the `module.exports` object.

```js
passport.serializeUser(function(user, callback) {
  callback(null, user.id)
})

passport.deserializeUser(function(id, callback) {
  User.findById(id, function(err, user) {
      callback(err, user)
  })
})
```

What exactly are we doing here? To keep a user logged in, we will need to serialize their user.id to save it to their session. Then, whenever we want to check whether a user is logged in, we will need to deserialize that information from their session, and check to see whether the deserialized information matches a user in our database.

The method `serializeUser` will be used when a user signs in or signs up, passport will call this method, our code then calls the `callback`, the second argument is what we want to be serialized.

The second method will then be called every time there is a value for passport in the session cookie. In this method, we will receive the value stored in the cookie, in our case the `user.id`, then search for a user using this ID and then call the callback. The user object will then be stored in the request object passed to all controller methods calls.

## Break (10 min / 1:20)

## Flash Messages (10 min / 1:30)

Flash messages are one-time messages that are rendered in the views, and when the page was reloaded, the flash is destroyed.

In our current Node app, when we have created the signup strategy, in the callback we had this code:

```javascript
  req.flash('signupMessage', 'This email is already used.')
```

This will store the message 'This email is already used.' into the request object and then we will be able to use it in the views. This is really useful to send back details about the process happening on the server to the client.

### Incorporating Flash Messages

In the view `signup.hbs`, before the form, add:

```hbs
{{#if message}}
  <div class="alert alert-danger">{{message}}</div>
{{/if}}
```

Let's add some code to handle the GET `/signup` route in the auth Controller to render the template:

```javascript
// in controllers/auth.js
const authController = {
  signUp: (req, res) => {
    res.render('signup', { message: req.flash('signupMessage') });
  },
  ...
}
```

Now, start up the app using `nodemon app.js` and visit `http://localhost:7777/signup` and try to signup two times with the same email, you should see the message "This email is already used." appearing when the form is reloaded.

## Adding Sign-in (20 min / 1:50)

Now we need to write the `signin` logic.

We also need to implement a custom strategy for the login, In `config/passport.js`, after the signup strategy, add a new LocalStrategy:

```js
  
  const localLoginCallback = (req, email, password, callback) => {
    // Logic will be added here in just a moment.
  }

  passport.use('local-login', new LocalStrategy(strategyFields, localLoginCallback))

```

The first argument is the same as for the signup strategy - we ask passport to recognize the fields `email` and `password` and to pass the request to the callback function.

For this strategy, we will search for a user document using the email received in the request, then if a user is found, we will try to compare the hashed password stored in the database to the one received in the request params. If they are equal, the the user is authenticated; if not, then the password is wrong.

Inside passport.js let's add this code:

```js
   const localLoginCallback = (req, email, password, callback) => {
    User.findOne({ 'local.email': email }).then(user => {
      if (!user) {
        return callback(null, false, req.flash('loginMessage', 'No User Found'))
      }

      if (!user.validPassword(password)) {
        return callback(null, false, req.flash('loginMessage', 'OOPS Wrong Password'))
      }

      return callback(null, user)
    })
  }

```

#### User validate method

We need to add a new method to the user schema in `user.js` so that we can use the method `user.validPassword()`. Let's add:

```js
  User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
  };
```

#### Adding flash messages to the view

As we are again using flash messages, we will need to add some code to display them in the view:

In `login.hbs`, add the same code that we added in `signup.hbs` to display the flash messages:

```handlebars
{{#if message}}
  <div class="alert alert-danger">{{message}}</div>
{{/if}}
```

#### Login GET Route handler

Now, let's add the code to render the login form in the `logIn` method in the controller (`auth.js`):

```js
// in controllers/auth.js
const authController = {
  ...,
  logIn: (req, res) => {
    res.render('login', { message: req.flash('loginMessage') });
  },
  ...
}
```

You'll notice that the flash message has a different name (`'loginMessage'`) than the message in the signup route handler.

#### Login POST Route handler

We also need to have a route handler that deals with the login form after we have submit it. So in `auth.js` lets also add:

```js
// in controllers/auth.js
const authController = {
  ...,
  checkUser: (req, res) => {
    var loginProperty = passport.authenticate('local-login', {
      successRedirect : '/',
      failureRedirect : '/login',
      failureFlash : true
    });
  
    return loginProperty(req, res);
  },
  ...
}
```

You should be able to login now!

## Test it out - Independent Practice (5 min / 1:55)

#### Invalid Login

First try to login with:

- a valid email
- an invalid password

You should also see the message 'Oops! Wrong password.'

#### Valid Login

Now, try to login with valid details and you should be taken to the index page with a message of "Welcome".

The login strategy has now been setup!


### Accessing the User object globally (10 min / 2:05)

By default, passport will make the user available on the object `request`. In most cases, we want to be able to use the user object everywhere, for that, we're going to add a middleware in `app.js`:

```js
require('./config/passport')(passport);

// This needs to go above the app.use('/', routes)
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});
```

Now in the layout, we can add:

```hbs
<ul class="nav navbar-nav">
  {{#if currentUser}}
    <li><a href="/logout">Logout {{currentUser.local.email}}</a></li>
  {{else}}
    <li><a href="/login">Login</a></li>
    <li><a href="/signup">Signup</a></li>
    <li><a href="/secret">Secret page (only if authenticated)</a></li>
  {{/if}}                
</ul>
```

## Adding Logout

The last action to implement for our authentication system is to set the logout route and functionality.

Passport exposes this logout() function on req for us. It can be called from any route handler which needs to terminate a login session. Invoking logout() will remove the req.user property and clear the login session (if any).

In `controllers/auth.js`:
```js
const authController = {
  ...,
  logOut: (req, res) => {
    req.logout();
    res.redirect('/');
  }
}
```

## Restricting access (15 min / 2:20)

As you know, an authentication system is used to allow/deny access to some resources to authenticated users.

Let's now turn our attention to the `application.js` controller's `secret` method.

Try 
```js
const applicationController = {
  ...,
  secret: (req, res) => {
    if (req.isAuthenticated()) { 
      res.render('secret') 
    }
    else {
      res.redirect('/')
    }
  }
}
```

Now test it out by heading to `/secret`. You should see: "This page can only be accessed by authenticated users" only if you are logged in. If you aren't logged in, you will be redirected to the home page.

**NOTE:** You can find the solution branch for this exercise [here](https://git.generalassemb.ly/atl-wdi/express-passport-local-authentication-codealong/tree/solution)!

## Conclusion (Rest of Class / 2:30)

Passport is a really useful tool because it allows developers to abstract the logic of authentication and customize it. It comes with a lot of useful extensions that you might want to use in your projects.


## Bonus

### OAuth and Third Party Login with Twitter

Most modern web applications allow you to sign in using a social network like Facebook, Twitter or Github. [This tutorial](https://git.generalassemb.ly/atl-wdi/express-oauth) is a great introduction to how Passport.js can be used to implement that functionality.

### Cookies

If you are interested in learning more about how cookies work, read through [this article](exploring-cookies.md)!
