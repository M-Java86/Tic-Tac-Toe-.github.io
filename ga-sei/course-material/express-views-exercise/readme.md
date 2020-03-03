# express-views-exercise

## Objectives

* Creating a UI for interacting with HTTP controllers
* Practice using handlebars syntax.

Your web page will need to:

# Setup

1. download the [express-intro-exercise] solution directory.
1. rename the directory to `express-views-exercise`
1. cd int onto that directory.
1. `npm install`
1. `mkdir -p views/shops` (this will create the `views/` and `views/shops/`
   directories at the same time)
1. `touch ./views/shops/shops.hbs ./views/shops/shop.hbs ./views/shops/create.hbs`
1. Uncomment the line `app.use(express.urlencoded())` in server.js

# Testing your changes

Open a web browser and go to `localhost:3000/<path in controller file>` to
test a specific page.

_NOTE_: Every time you update any file in `controllers/` or `models/` you will
need to stop and restart your server.

# List Shops Page

1. Write handlebars template HTML `views/shops/shops.hbs` to list the names of all
   the shops using `{{#each}}...{{/each}}` 
1. For each name render an `<a href="/shops/{{@index}}">...</a>` where `...`
   should be replaced with handlebars template that will display the name of a
   shop. (see [@index documentation])
1. in `controllers/shops.js` modify the GET `/shops` route (`.get('/'`) to
   render the `shops/shops` template. You will need to do the following:

    * replace `res.send` with `res.render`
    * set the context (2nd argument to `res.render`) to `{shops: <results from calling getShops()>}`

# Create Shops Form

1. Write handlebars template HTML `views/shops/create.hbs` to display a Web form for
   creating a single shop. Follow the [template create form]. Make sure to set
   the `action attribute` to `/shops`. This will perform a POST request to
  `/shops` when the submit button has been clicked.
1. In `controllers/shops.js` modify the GET `/shops/new/` route (`.get('/new'`)
   to render the `shops/create` template. You will need to do the following:

    * replace `res.send` with `res.render`
    * set the view path (1st argument to `shops/create`) which points to `views/shops/create.hbs`
    * set the context (2nd argument to `res.render`) to `{shop: <results from calling getShop(req.params.index)>}`
1. In `controllers/shops.js` modify the POST `/shops` route (`.post('/')`) to redirect to
`/shops/`. To do this you will need to replace `res.send` with `res.redirect`.
See the ([res.redirect docs] for details).

# View and Update Shop Page

Follow the same steps for Create Shops Form where:

  * `views/shops/shop.hbs` as the template file and [template edit form] for
    the content. This will render a web form to display the data for a single shop
    as well as provide a webform for updating this information.
  * `/shops/...?_method=PUT` as the form action, where `...` should be replaced
    with the index of the shop being updated.
  * In the controller modify the GET `/shops/:index` route (`.get('/:index'`) to
    render the `shop.hbs` view (in other words use `shops/shop` as the view path)

# Delete Shop Form

Following the same pattern above. Add a webform that

  * has a single input field for a submit button.
  * When submitted the form should make a POST request to
    `/shops/...?_method=DELETE` which will trigger the `.delete(` route which
    will call the `deleteShop` API function.
  * in the `.delete(` function redirect to the `/shops` route.

[express-intro-exercise]: ../express-intro-exercise
[@index documentation]: https://handlebarsjs.com/builtin_helpers.html
[template create form]: ../mehn-template-project/views/template/createTemplate.hbs
[template edit form]: ../mehn-template-project/views/template/editFormTemplate.hbs
[res.redirect docs]:  https://expressjs.com/en/4x/api.html#res.redirect
