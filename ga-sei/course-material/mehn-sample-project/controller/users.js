const express = require('express');
const users = require('../model/users.js');
const accounts = require('../model/accounts.js');

const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
  users.getUsers()
    .then(users => {
      res.render('users/users', { users });
    });
});

usersRouter.get("/:id", (req, res) => {
  const userId = req.params.id;
  users.getUser(userId)
    .then(user => {
      accounts.getAccountsByUserId(userId)
        .then(accounts => {
          res.render("users/user", { user, accounts });
        });
    });
});

usersRouter.post("/", (req, res) => {
  users.createUser(req.body)
    .then(() => {
      res.render("users/created");
    });
});

module.exports = {
  usersRouter
}
