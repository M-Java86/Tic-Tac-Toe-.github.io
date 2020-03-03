const mongoose = require('./connection.js');

let UserSchema = mongoose.Schema({
  name: String
});

let UserCollection = mongoose.model('User', UserSchema);

function createUser(newUser) {
  return UserCollection.create(newUser);
}

function getUsers() {
  return UserCollection.find();
}

function getUser(userId) {
  return UserCollection.findById(userId);
}

module.exports = {
  createUser,
  getUsers,
  getUser
}
