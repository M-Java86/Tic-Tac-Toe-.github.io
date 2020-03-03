//const accountApi = require('./api/accountApi.js');
const AccountModel = require('../models/account.js');

AccountModel.deleteMany()
  .then(() => {
    AccountModel.create({
      name: "bob",
      balance: 0
    });
  });

/*
accountApi.getAllAccounts()
  .then(accounts => {
    for(account in accounts) {
      accountApi.deleteAccount(account._id);
    }
  })
  .then(() => {
    accountApi.addNewAccount({
      name: "bob",
      balance: 0
    });
  });

accountApi.deleteAllAccounts();
*/
