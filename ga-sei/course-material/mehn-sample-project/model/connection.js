const mongoose = require('mongoose');

const connectionString = "mongodb://localhost/atm";

//newUrlParser diables the deprication warning
mongoose.connect(connectionString, { useNewUrlParser: true})
  .then(() => {
    console.log("connected to mongo at: " + connectionString);
  });

module.exports = mongoose;
