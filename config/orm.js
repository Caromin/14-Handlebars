// required files, so that you can connect and search the database
var connection = require('./connections.js');

var orm = {
// function that will select all in a specificied column
// does the order of the parameters matter when inserting into the queryString?	
// does ?? mean where ex. valofCol 5 = 5 and if updating it means 5 = NOW EQUALS 4 
	selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
// ideally this should look for the table and had a block of values like the seeds.sql
// addingNewValues should look like this (cheeseburger, devoured/boolean, date modified)
	insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
	updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// exports the variable orm only
module.exports = orm;