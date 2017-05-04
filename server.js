// required npm packages
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
var app = express();

// all caps means it will not change
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname));


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
app.use("/create", routes);
app.use("/update", routes);

app.listen(PORT, function() {
	console.log("Listening to port: " + PORT);
	
});
