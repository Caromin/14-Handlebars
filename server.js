// required npm packages
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();
var methodOverride = require("method-override");
// required module.exports
// if no extention is defined, it will assume .js
var connection = require('./config/connections');
var orm = require('./config/orm.js');

// all caps means it will not change
var PORT = process.env.PORT || 3000;


// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(process.cwd()));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

app.listen(port);
