# REST Architecture

- Give 3 reasons why you would want to use a RESTful routing architecture
- Define resource
- Create RESTful routes given a resource
- Fill in a RESTful route table

# Background

- `/create/blog`
- `/posts/new/`
- `/calculator/add/2`

There is a strong correlation between calling a resource and the name we use
for getting that resource.

* Think of an auto-parts store. 
  
    * Resource is a thing on the shelf.
    * Path is how you get to the resource
    * Verb is what you're going to do with it

# REST Table 

| URL | Path | Method  | Action | Description |
| --- | --- | --- | --- | --- |
| `/resources` | `GET` | index | List all items of `resource` |
| `/resources` | `POST` | create | Create new `resource` in the database |
| `/resources/1` | `GET` | show | Show a single `resource` |
| `/resources/1` | `PATCH`/`PUT` | #update | Update `resource` in the database |
| `/resources/1` | `DELETE` | delete | Delete a `resource`  |
| `/resources/new` | `GET` | new | Render form to create a new instance of `resource` |
| `/resources/1/edit` | `GET` | edit | Render form to update a single `resource` |

```js
// routers/todo.js
const express = require('express')
const router = express.Router()
const Api = require('someApiFile.js')

router.get('/resources',          Api.getAll)
router.post('/resources/',        Api.addOne)
router.get('/resources/:id',      Api.getAt)
router.put('/resources/:id',      Api.updateAt)
router.delete('/resources/:id',   Api.deleteAt)
router.get('/resources/new',      Api.getNewOne)
router.get('/resources/:id/edit', Api.getEditForm)

module.exports = router
```

# Resources

https://restapitutorial.com/
