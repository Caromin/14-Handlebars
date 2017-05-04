// needed to connect to the database
var mysql = require('mysql');

// setting the connection to a variable
var connection = mysql.createConnection( {
	host: 'localhost',
	user: 'root',
	password: 'Learning1',
	database: 'burgers_db'
});

// connecting to the database and giving a console.log if it connects
connection.connect(function(err) {
	if (err) throw err;
	console.log("export has worked, burgers_db connected.");
});

// after running through the whole page, this will export the var connection ONLY, 
// connect.connect alert only happens because it appears before the module.exports
module.exports = connection;