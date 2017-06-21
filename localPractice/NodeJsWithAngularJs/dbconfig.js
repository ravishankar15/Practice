var mysql = require("mysql");
var connection = mysql.createConnection({
	host:'localhost',
	user:'', 	// Mysql user name
	password:'', //Mysql password
	database:'' // Mysql database name
});
connection.connect(function(err){
	if(err){
		console.log("Error in connection");
	} else {
		console.log("Connected");
	}
});
module.exports = connection;