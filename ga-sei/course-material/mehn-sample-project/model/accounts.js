const mongoose = require('./connection.js');
const ObjectId = mongoose.Schema.Types.ObjectId

let AccountSchema = mongoose.Schema({
  name: String,
  balance: Number,
  isActive: Boolean,
  userId: ObjectId
});

let AccountCollection = mongoose.model('Account', AccountSchema);

function getAllAccounts() {
  return AccountCollection.find()
}

function getAccount(accountId) {
  return AccountCollection.findById(accountId);
}

function addNewAccount(account) {
  //make sure that the isActive is either true or false.
  //if you're using a checkbox in an HTML form then
  //if the checkbox is unselected and you submit the form
  //isActive will not be in the account object
  account.isActive = account.isActive ? true : false;

  return AccountCollection.create(account);
}

function updateAccount(accountId, account) {
  //make sure that the isActive is either true or false.
  //if you're using a checkbox in an HTML form then
  //if the checkbox is unselected and you submit the form
  //isActive will not be in the account object
  account.isActive = account.isActive ? true : false;

  return AccountCollection.updateOne({ _id: accountId}, {...account});
}

function deleteAccount(accountId) {
  return AccountCollection.deleteOne({_id: accountId});
}

function getAccountsByUserId(uId) {
  return AccountCollection.find({ userId: uId });
}

module.exports = {
  getAllAccounts,
  getAccount,
  addNewAccount,
  updateAccount,
  deleteAccount,
  getAccountsByUserId
}

