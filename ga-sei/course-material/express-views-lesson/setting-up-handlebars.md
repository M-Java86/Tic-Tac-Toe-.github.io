# Review Setting up Handlebars

## 1. Install Handlebars (`hbs`)

First, we need to install handlebars:

```sh
npm install hbs
```

## 2. Set the view engine

Once `hbs` is installed, we need to tell Express that we're using it. Express
doesn't care what templating language we use for our views and there are many
options we could choose from. Regardless of which we choose and why, we need to
let Express know:

```js
app.set('view engine', 'hbs')
```

## 3. Define your layout template

Express doesn't come with many conventions it expects of to follow but it does
expect us to have a `layout.hbs` (or equivalent file for any other templating
language) and it expects us to define our views inside a `views/` directory:

```sh
mkdir views/
touch views/layout.hbs
```

The purpose of the layout is to define common HTML markup for all our web pages.
Every page is going to have some content that will be pretty much exactly the
same - everything in the `<head>` tag, for instance. If something is going to be
the same from page to page, then it should go inside the `layout.hbs` file.

## 4. Build boilerplate `layout.hbs`

The `layout.hbs` file will outline the head of every view, the static assets that we can use (CSS, JS, Fonts, etc.), as well as any HTML that we want to stay constant across all of our views.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Hello Express App</title>
        <!-- Static assets can go in here! -->
        <!-- <link rel="stylesheet" type="text/css" href="/css/styles.css"> -->
    </head>
    <body>
        {{{ body }}}
        <!-- The body tag is what our templates will be replacing. -->
    </body>
</html>
```

## 5. Define and render our template

Finally, we're ready to define and render our template. We start by creating the
file:

```sh
touch views/index.hbs
```

Then, we fill it in with some content:

```html
<h1>Welcome to Express</h1>
<p>An awesome, unoppinionated web framework</p>
```

Then we use the `.render()` method to render our view:

```js
app.get('/', (req, res) => {
  res.render('index')
})
```

That's how we set up handlebars in our Express and render our first view.

## 5. Allow static Assets to be used

We can now dynamically render HTML, but if we try to directly link a CSS file or a client-side JavaScript file, we will find that it will cause an error.  That is because we must tell our server what sort of front-end, or **static** files we want to make discoverable.  We can do this in a few easy steps.

1. Create a directory in the root of our project called `public`.  Within there, let's add directories for `css`, `js`, and `images`.

2. Now we need to tell Express what directory our static assets live in. 
  
```js
app.use(express.static(__dirname + '/public')); // VERY IMPORTANT!! Make sure to add a '/'
```

3. Now we can link our CSS and JS in our `layout.hbs`.  **Important:** Your `src` and `href` attributes will assume that you are starting at the `public` directory.