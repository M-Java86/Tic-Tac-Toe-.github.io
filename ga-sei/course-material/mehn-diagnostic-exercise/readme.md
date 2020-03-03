# Issue Tracker

In this assignment, you will create a full CRUD MEHN (Mongo, Express,
Handlebars, Node) Issue Tracker app! Our app will be linked to a Mongo
Database, so you can add, edit, and delete issues.

## Exercise Objectives

- Gain more practice with routes using `express.Router()`
- Get a chance to load test data into our database to populate it
- Use `mongoose` and `mongo` to add CRUD functionality
- Gain more practice with Handlebars

## Setup

1. Download the [mehn-template-project](../mehn-template-project) for your
starter code. Follow the instructions in that readme document for the
setup process.

1. Follow the steps with `TODO` in `db/connection.js` to setup your
mongo db connection

## Build the Model

### Issues Model

1. Create a file: `models/issue.js`.  Feel free to use the
   `models/template.js` file to write your boiler plate code.

1. Define the IssueSchema.  The schema should have the following properties:
      * description (String)
      * createdAt (Date)
      * status (String)
      * priority (String)

1. Export your schema.


### Website Features

1. Create a file: `controllers/issue.js`. Feel free to use the
   `controllers/template.js` file to write your boiler plate code.

1. Create a directory: `views/issues/`

#### Issues List Page

1. Create a file `views/issues/issues.hbs`

1. Write handlebars template code in `issues.hbs` to list all issues.

1. Create an HTTP request handler in `controllers/issue.js` for: `GET /issues`
   that renders the `issues.hbs` template. You will need to retrieve all issues
   from the DB to get the list of issues to render.

#### Issue Page

1. Create a file `views/issues/issue.hbs`
1. Write handlebars template code for showing the details for a single issue.
1. Create an HTTP request handler in `controllers/issue.js` for: `GET /issues/:issueId` that renders the `issue.hbs`
   template. You will need to retrieve a single issue from the DB to get a single issue to render.
1. Add a form with `method="POST"` and
   `action="/issues/{{issue._id}}?_method=DELETE"` and a single `<input type="submit" value="Delete Issue"/>`
   field
1. Create an HTTP request handler for `DELETE /issues/:issueId` that redirects to the path of `/issues` once the issue has been deleted.
1. Modify the issue names on the issue list page (`issues.hbs`) to be links that go to that
   issue's page. An example of the link is as follows: 

      `<a href="/issues/{{issue._id}}">My first issue</a>`


#### Create Issue Form

1. Create a file `views/issues/newIssueForm.hbs`

1. Write handlebars template code that displays a new issue form with input fields for each field in the IssueSchema.  The form tag should have the following attributes: `method="POST"` and `action="/issues"`

1. Create an HTTP request handler for `POST /issues` that redirects to the path of `/issues` once the new issue has been created.

1. Add a link to `issues.hbs` that will navigate to the new issue form page

#### Edit Issue Form

1. Create a file `views/issues/editIssueForm.hbs`

1. Create an HTTP request handler in `controllers/issue.js` for `GET /issues/:issueId/edit` that renders the `editIssueForm.hbs` view. You will need to retrieve a single issue from the DB to get a single issue to pass into `editIssueForm.hbs`.

1. Write handlebars template code that displays an edit issue form with prepopulated fields containing the values of the issue being edited.  The form tag should have the following attributes: `method="POST"` and `action="/issues/{{issue._id}}?_method=PUT"`

1. In `views/issues/issue.hbs` add a link that will navigate to the edit page for the specific issue being viewed. An example of the link is as follows:

      `<a href="/issues/{{issue._id}}/edit">Edit Issue</a>` 


## Stretch Goals
1. Add mongoose validations to the IssueSchema in `models/issue.js`

      * description should be required
      * createdAt should default to the current day and time
      * status should default to "open"
      * priority should be required and should be one of the following values: "High", "Medium", or "Low"
1. Add a file to the `db/` directory called `seeds.js` that imports and uses your model schema to programatically create new records in the database.
1. Use a CSS library such as Bootstrap to style the application
