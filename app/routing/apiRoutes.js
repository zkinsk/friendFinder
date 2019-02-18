var express = require("express");
var path = require("path");

var friends = require("../data/friends")
var questionArr = require("../data/surveyquestions")

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

const apiRoutes = (app) => {
  app.post('/api/survey',  (req, res) => {
    // console.log(req.body);
    let urBuddy = friends.survCompare(req.body.ansArr)
    friends.friendsArr.push(req.body)
    res.json({friend: urBuddy});
  });

  app.get('/api/friendslist', (req, res) => {
    console.log("friends list hit");
    // console.log(res);
    res.json(friends.friendsArr);
  });


  app.get('/api/questionlist', (req, res) => {
    console.log("question list hit");
    // console.log(res);
    res.json({questionArr: questionArr});
  })

  app.delete('/api/reset', (req, res) => {
    if (friends.friendsArr.length > 4){
      friends.friendsArr.splice(4);
      console.log()
      res.send(true);
    };
  });
  

}//end of module exports

module.exports = apiRoutes