// needed to connect to the database
var mysql = require('mysql');

// setting the connection to a variable
var connection = mysql.createConnection( {
	host: 'us-cdbr-iron-east-05.cleardb.net',
	user: 'bac4edfa125487',
	password: '68c188c3',
	database: 'heroku_82100a74448265a'
});

// connecting to the database and giving a console.log if it connects
connection.connect(function(err) {
	if (err) throw err;
	console.log("export has worked, burgers_db connected.");
});

// after running through the whole page, this will export the var connection ONLY, 
// connect.connect alert only happens because it appears before the module.exports
module.exports = connection;