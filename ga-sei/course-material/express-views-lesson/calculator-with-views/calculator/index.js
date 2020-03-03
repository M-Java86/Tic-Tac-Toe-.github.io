const express = require("express");
const app = express();
const router = express.Router();

const calculator = {
  new: function (req, res) {
    res.render("../views/calculator/new.hbs");
  },
  add: function (req, res) {
    let answer =
      parseInt(req.query.firstNumber) + parseInt(req.query.secondNumber);
    res.render("../views/calculator/add.hbs", {
      answer
    });
  },
  subtract: function (req, res) {
    let answer =
      parseInt(req.query.firstNumber) - parseInt(req.query.secondNumber);
    res.render("../views/calculator/subtract.hbs", {
      answer
    });
  },
  multiply: function (req, res) {
    let answer =
      parseInt(req.query.firstNumber) * parseInt(req.query.secondNumber);
    res.render("../views/calculator/multiply.hbs", {
      answer
    });
  },
  divide: function (req, res) {
    let answer =
      parseInt(req.query.firstNumber) / parseInt(req.query.secondNumber);
    res.render("../views/calculator/divide.hbs", {
      answer
    });
  },
  list: function (req, res) {
    let answers =[]
    answers.push({index:0,number:parseInt(req.query.firstNumber)})
    answers.push({index:1,number:parseInt(req.query.secondNumber)})
    res.render("../views/calculator/list.hbs",{answers});
  }
};
module.exports = calculator;