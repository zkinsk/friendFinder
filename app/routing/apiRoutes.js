var express = require("express");
var path = require("path");

var friends = require("../data/friends")
var questionArr = require("../data/surveyquestions")


// function containing all my routes for my api
const apiRoutes = (app) => {

  // this takes the survey results post from the client side js, sends that body obj to my friends js which compares through
  // all the people on the existing list and return the closes match which is sent back to the client via res.json
  app.post('/api/survey',  (req, res) => {
    // console.log(req.body);
    let urBuddy = friends.survCompare(req.body.ansArr)
    friends.friendsArr.push(req.body)
    res.json({friend: urBuddy});
  });

  // this is raw json data return to the browser listing all the friends in the data base
  app.get('/api/friendslist', (req, res) => {
    console.log("friends list hit");
    // console.log(res);
    res.json(friends.friendsArr);
  });

  // returns the list of survey questions to the client on page load
  app.get('/api/questionlist', (req, res) => {
    console.log("question list hit");
    // console.log(res);
    res.json({questionArr: questionArr});
  })

  // resets the list of friends back to the original 4 when the reset endpoint is hit
  app.delete('/api/reset', (req, res) => {
    if (friends.friendsArr.length > 4){
      friends.friendsArr.splice(4);
      console.log()
      res.send(true);
    };
  });
  

}//end of module exports

module.exports = apiRoutes