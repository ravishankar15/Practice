
/*
 * GET users listing.
 */
var con = require("../dbconfig");
exports.displayLog = function(req, res){
	con.query("SELECT * FROM CUSTOMER", function(err, rows){
		if(err){
			console.log("Error in getting customer details"+err);
			res.send(err);
		} else {
			res.send(rows);
		}
	});
};