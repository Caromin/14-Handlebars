// needed to connect to the database
var mysql = require('mysql');

// setting the connection to a variable
var connection = mysql.createConnection( {
	host: 'us-cdbr-iron-east-05.cleardb.net',
	user: 'bac4edfa125487',
	password: '68c188c3',
	database: 'heroku_82100a74448265a'
});

function handleDisconnect() {

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

handleDisconnect();

// after running through the whole page, this will export the var connection ONLY, 
// connect.connect alert only happens because it appears before the module.exports
module.exports = connection;