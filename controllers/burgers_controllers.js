var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');

router.get("/", function(req, res) {
	burger.SelectAll(function(data) {
		var everything = {
			burger: data
		};
		console.log(everything);
		res.render('index', everything)
	});
});

router.post("/", function(req, res) {
	burger.insertOne([
		"burger_name", "devoured"
		], [
		req.body.burger_name, req.body.devoured],
		function() {
		res.redirect('/')
	});
});

router.put("/:id", function(req, res) {
  var eaten = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, eaten, function() {
    res.redirect("/");
  });
});

module.exports = router;
