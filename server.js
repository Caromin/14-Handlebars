// required npm packages
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

// setting the connection to a variable
var connection = mysql.createConnection( {
	host: 'localhost',
	user: 'root',
	password: 'python1',
	database: burger_db
});

// callback to connect to burger_db database
connection.connect()

// searching mysql database for something
connect.query(, function(err, res,) {
	if (err) throw err;

});