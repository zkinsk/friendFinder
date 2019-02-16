var express = require("express");
var path = require("path");

var surveys = require("../data/friends")

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

const apiRoutes = (app) => {
    app.post('/api/survey',  (req, res) => {
    console.log(req.body);
    res.json({body: req.body, text: "Im Listening"});
  })
}//end of module exports

module.exports = apiRoutes