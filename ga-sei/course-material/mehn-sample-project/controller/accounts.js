const express = require('express');

const accounts = require('../model/accounts.js');

const accountsRouter = express.Router();

accountsRouter.get("/", (req, res) => { 
  accounts.getAllAccounts()
    .then(accounts => {
      res.render("accounts", { accounts });
    });
});

accountsRouter.get("/:id", (req, res) => {
  accounts.getAccount(req.params.id)
    .then(account => {
      //create a View on the single account and send it to the user
      //note: { account } the same as writing { account: account }
      res.render("accounts/account", { account }); 
    });
});

accountsRouter.post("/", (req, res) => {
  accounts.addNewAccount(req.body)
    .then(() => {
      res.render("accounts/created");
    });
});

accountsRouter.put("/:id", (req, res) => {
  const accountId = req.params.id;
  accounts.updateAccount(accountId, req.body)
    .then(() => {
      res.render("accounts/updated", { accountId });
    });
});

accountsRouter.delete("/:id", (req, res) => { 
  accounts.deleteAccount(req.params.id)
    .then(() => {
      res.render("accounts/deleted");
    });
});

module.exports = {
  accountsRouter
}
