const express = require('express');
const app = express();
const hbs = require('hbs');
const calculator = require('./calculator/index');
app.set("view engine","hbs");

app.get('/',calculator.new);
app.get('/add',calculator.add);
app.get('/subtract',calculator.subtract);
app.get('/multiply',calculator.multiply);
app.get('/divide',calculator.divide);
app.get('/list',calculator.list);



const port = process.env.PORT||3000
app.listen(port, function(){
    console.log("hello from the server side")
})