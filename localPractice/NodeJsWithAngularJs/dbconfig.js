var mysql = require("mysql");
var connection = mysql.createConnection({
	host:'localhost',
	user:'mydev',
	password:'mydev',
	database:'testdb'
});
connection.connect(function(err){
	if(err){
		console.log("Error in connection");
	} else {
		console.log("Connected");
	}
});
module.exports = connection;