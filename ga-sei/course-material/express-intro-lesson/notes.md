# Intro to Express

## Learning Objectives

- Draw a diagram explaining how an HTTP request is handled by an HTTP
  middleware library.
- create a new boiler plate express project
- create an HTTP request handler
- call a model method using an HTTP request handler

1. run through [mehn project template readme][project-template-readme] setting
   up a new project without template dir
1. have students write template `server.js`
1. have students write `controllers/template.js` in `account.js`
1. Send students zip of `models/` from [mehn-sample-project]
1. I do: create request handler for all accounts in `controllers/account.js`
1. explain routers

    * get
    * path
    * (req, res) => { ... }
    * use [basic-routing] link from express docs as reference
1. We do: get request for a single account (introduce url parms params)
1. You do: get request delete account
1. Review handling post request (review body of request)

[basic-routing]: https://expressjs.com/en/starter/basic-routing.html
[project-template-readme]: ../mehn-template-project/readme.md
[template-server-file]: ../mehn-template-project/server.js
[controller-template-file]: ../mehn-template-project/controllers/template.js
[mehn-sample-project]: ../mehn-sample-project
