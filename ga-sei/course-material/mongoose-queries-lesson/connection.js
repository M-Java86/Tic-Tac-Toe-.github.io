const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/atm").then(() => {
  console.log("MONGODB is now connected");
})

module.exports = mongoose;
