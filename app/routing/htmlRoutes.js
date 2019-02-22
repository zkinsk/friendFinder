var express = require("express");
var path = require("path");
var friends = require("../data/friends")
var questionArr = require("../data/surveyquestions") 
//the reason I require the survey questions instead of hard coding them in the client side js file
//is that I want to also use the list on the web page that displays the list of friends using handlebars. So That page will also need access to the list of questions.


// function containing all my routes for HTML pages
  var htmlRoutesfn = (app) => {

  // app.use('/assets', express.static(__dirname + '/../public/assets'));
  app.use(express.static(__dirname + '/../public'));
  //middleware code to allow me to have stand alone js and css files for client

  // here the list of questions and the friends obj are sent to the handlebars engine
  app.get('/api/friendslist/hb', (req, res) => {
    console.log("friends list hit");
    // console.log(res);
    res.render("friendslist", {title: "Friends List", friends: friends.friendsArr, question: questionArr});
  });

  // grabs the static survey page when the /survey endpoint is hit
  app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // grabs the index page when any end point that hasn't already been created is hit. 
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });

}//end htmlRoutes fn

module.exports = htmlRoutesfn;
