let express = require('express')
let donutRouter = express.Router()

//= =====================
// REQUIREMENTS
//= =====================
// require the Donut model


//= =====================
// INDEX
//= =====================
// Create a GET index route "/" that sends all Donuts to donuts/index.hbs view


//= =====================
// NEW
//= =====================
// Create a GET new route "/new" that renders the new.hbs form


//= =====================
// SHOW
//= =====================
// Create a GET show route "/:id" that renders a single Donut's show page


//= =====================
// CREATE
//= =====================
// Create a POST index route "/" that creates a new Donut
// and upon success redirects back to the index page "/"


//= =====================
// EDIT
//= =====================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that a Donut's data to it


//= =====================
// UPDATE
//= =====================
// Create a PUT update route "/:id" that updates the Donut and
// redirects back to the SHOW PAGE (not index)


//= =====================
// DELETE
//= =====================
// Create a DELETE delete route "/:id" that deletes the Donut and
// redirects back to index page "/"


//= =====================
// EXPORTS
//= =====================
// export the controller with module.exports
