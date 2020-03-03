const mongoose = require('./connection.js');

//create the schema of the Entity we want to use
let AccountSchema = mongoose.Schema({
  name: String,
  isActive: Boolean,
  balance: Number,
  dateActivated: Date
});

//create the API that will give us an interface to the collection
//for our Account documents (this collection is called "Accounts")
let AccountCollection = mongoose.model("Account", AccountSchema);

function getAccountAtId(id) {
  return AccountCollection.findById(id);
}

function getAccounts() {
  return AccountCollection.find();
}

//returns ???
function addNewAccount(newAccount) {
  return AccountCollection.insertOne(newAccount);
}

//returns the promise with updated document instead of the new length of the
//array
function replaceAccountAt(accounts, id, newAccount) {
  return AccountCollection.findOneAndUpdate({_id: id}, newAccount);
}

function deleteAccountAt(accounts, id) {
  return AccountCollection.deleteById(id);
}

module.exports = {
  getAccountAtId,
  getAccounts,
  addNewAccount,
  replaceAccountAt,
  deleteAccountAt
};
