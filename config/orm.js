var connection = require('./connections.js');

var orm = {
// function that will select all in a specificied column
// does the order of the parameters matter when inserting into the queryString?	
// does ?? mean where ex. valofCol 5 = 5 and if updating it means 5 = NOW EQUALS 4 
	selectAll: function(tableInput, cb) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [tableInput], function(err, res) {
      		if (err) {
        	throw err;
      		}
			cb(res);
		});
	},
// ideally this should look for the table and had a block of values like the seeds.sql
// addingNewValues should look like this (cheeseburger, devoured/boolean, date modified)
	insertOne: function(tableInput, addingNewValues, cb) {
		var queryString = "INSERT INTO ?? VALUES ??";
		connection.query(queryString, [tableInput, addingNewValues], function(err, res) {
			if (err) {
        	throw err;
     		}
			cb(res);
		});
	},
	updateOne: function(tableInput, valofCol, colToSearch, cb) {
		var queryString = "UPDATE ?? SET ?? WHERE ?? = ?"
		connection.query(queryString, [tableInput, colToSearch, valofCol], function(err, res) {
			if (err) {
        	throw err;
     		}			
			cb(res);
		});
	}
};

// exports the variable orm only
module.exports = orm;