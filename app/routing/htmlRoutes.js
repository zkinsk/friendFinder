var express = require("express");
var path = require("path");

  var htmlRoutesfn = (app) => {

  app.use('/assets', express.static(__dirname + '../public/assets')); //middleware code to allow me to have stand alone js and css files for client

  app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
}//end htmlRoutes fn

module.exports = htmlRoutesfn;
