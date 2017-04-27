var mysql = require('mysql');

// setting the connection to a variable
var connection = mysql.createConnection( {
	host: 'localhost',
	user: 'root',
	password: 'Learning1',
	database: 'burgers_db'
});

// why is connection.connect working here, thought i am only exporting var connection
// also why is connection.connect not work in the server.js file, if im exporting it there
// callback to connect to burger_db database
connection.connect(function(err) {
	if (err) throw err;
	console.log("export has worked, burgers_db connected.");
	
});

module.export = connection;