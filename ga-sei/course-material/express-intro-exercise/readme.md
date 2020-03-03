# express-intro-exercise

## Objective

  - Create an HTTP web wrapper around a set of model code.

# Setup

Follow the instructions for setting up a new project *without* a template from the
[mehn-template-project readme](../mehn-template-project/readme.md).

NOTE: be sure that `server.js` uses the `express.json()` middleware and _not_
the `express.urlencoded()` middleware. You need this line in server.js:

`app.use(express.json());`


# Create API

1.  Create a variable with an empty array, to represent a temporary database of shops.
    (NOTE: data stored this way will disappear when you close your server!)
2.  Create a set of functions to perform the following:

| function name | parameters    | return            |
| :------------ | :------------ | :-----------------|
| getShops      | n/a           | list of shops     |
| getShop       | `index`       | single shop       |
| addShop       | `newShop`     | index of new shop |
| deleteShop    | `index`       | n/a               |
| updateShop    | `index, shop` | n/a               |

Each coffee shop should have the following schema:

  - name (string)
  - employees (number)
  - currentlyOpen (boolean)

# Create Web Server

1.  Create as set of HTTP request handlers to do the following:

| path            | Method | model function to call |
| :-------------- | :----- | :--------------------- |
| `/shops`        | GET    | `getShops`             |
| `/shops/:index` | GET    | `getShop`              |
| `/shops`        | POST   | `addShop`              |
| `/shops/:index` | DELETE | `deleteShop`           |
| `/shops/:index` | PUT    | `updateShop`           |

# Strech Goals

1.  Add some more methods to your model that modify the data inside of
    the coffee shop (such as adding a menu item or changing the name)
    and write an HTTP request handler around that.
2.  create an other model called employees. Create a controller for
    these employees
3.  add a key to the employees model called `shopIndex`. Add a method
    that will get all employees given the value of `shopIndex`.
4.  Write an controller function that uses the function from the
    previous step.
