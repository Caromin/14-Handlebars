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

// Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
// must be used before any module needs to know the method of request, ex. get, post

// Example call with query override using HTML <form>:
// <form method="POST" action="/resource?_method=DELETE">
//   <button type="submit">Delete resource</button>
// </form>
app.use(methodOverride("_method"));

//Handlebars npm to be able to use handlebars with express package
var exphbs = require("express-handlebars");

// first parameter is using handlebars and then passing the defaultLayout as main.handbars
// this is the main wrapper for the html
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//.set is saying now use the engine with parameters handlebars and run that as the viewing engine
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");

//now I'm telling the server to listen to these specific routes and if used, pass them into the routes handling js
//for a specific action to take place
app.use("/", routes);
app.use("/create", routes);
app.use("/update", routes);

//just to make sure the port is functioning as intended
app.listen(PORT, function() {
	console.log("Listening to port: " + PORT);
});
