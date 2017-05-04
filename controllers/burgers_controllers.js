// required packages
var express = require('express');
// alternative to app.get where (app) is passed in from the server.js file
var router = express.Router();
var burger = require('../models/burger.js');

router.get("/", function(req, res) {
  burger.selectAll(function(burgerData) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    res.render("index", { burger_data: burgerData });
  });
});

router.post("/create", function(req, res) {
  // takes the request object using it as input for buger.addBurger
  burger.insertOne(req.body.burger_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

router.put("/update", function(req, res) {
  burger.update(req.body.burger_id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

module.exports = router;
