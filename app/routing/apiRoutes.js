// var express = require("express");
var path = require("path");

var surveys = require("../data/friends")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports = function (app) {
  app.post('/api/survey',  (req, res) => {
    console.log(req.body);
  })
}//end of module exports