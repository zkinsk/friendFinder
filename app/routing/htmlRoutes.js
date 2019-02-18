var express = require("express");
var path = require("path");
var friends = require("../data/friends")
var questionArr = require("../data/surveyquestions")

  var htmlRoutesfn = (app) => {

  // app.use('/assets', express.static(__dirname + '/../public/assets'));
  app.use(express.static(__dirname + '/../public'));
  //middleware code to allow me to have stand alone js and css files for client

  app.get('/api/friendslist/hb', (req, res) => {
    console.log("friends list hit");
    // console.log(res);
    res.render("friendslist", {title: "Friends List", friends: friends.friendsArr, question: questionArr});
  });

  app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });

}//end htmlRoutes fn

module.exports = htmlRoutesfn;
