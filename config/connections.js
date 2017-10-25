// needed to connect to the database
var mysql = require('mysql');

// setting the connection to a variable
var connection = mysql.createConnection( {
	connectTimeout: 300000,
	host: 'us-cdbr-iron-east-05.cleardb.net',
	user: 'bac4edfa125487',
	password: '68c188c3',
	database: 'heroku_82100a74448265a'
});

//found online to help trouble shoot the server disconnect when using cleardb
function handleDisconnect() {
	//The server is either down or restarting
  connection.connect(function(err) { 
    if(err) {   
      console.log('error when connecting to db:', err);
      //We introduce a delay before attempting to reconnect, to avoid a hot loop and allow asynchronous request in between
      setTimeout(handleDisconnect, 60000);
    }                                     
  });                             

  connection.on('error', function(err) {
    console.log('db error', err);
    // Connection to the MySQL server is usually lost due to either server restart, or a connection idle timeout(wait_timeout)
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      throw err; 
    }
  });
}

handleDisconnect();

// after running through the whole page, this will export the var connection ONLY, 
// connect.connect alert only happens because it appears before the module.exports
module.exports = connection;