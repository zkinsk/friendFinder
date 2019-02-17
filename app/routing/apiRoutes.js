var express = require("express");
var path = require("path");

var friends = require("../data/friends")

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

const apiRoutes = (app) => {
    app.post('/api/survey',  (req, res) => {
    console.log(req.body);
    let urBuddy = friends.survCompare(req.body.ansArr)
    // console.log("Buddy: ", urBuddy);
    friends.friendsArr.push(req.body)
    // console.log(friends.friendsArr);
    res.json({friend: urBuddy});
  })
}//end of module exports

module.exports = apiRoutes