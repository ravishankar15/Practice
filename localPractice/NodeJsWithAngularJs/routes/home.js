
/*
 * GET Customer listing.
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

exports.addCustomer = function(req, res){
	var data = {
			ID: req.body.ID,
			NAME: req.body.NAME,
			ADDRESS: req.body.ADDRESS,
			EMAIL: req.body.EMAIL,
			PHONE: req.body.PHONE
	};
	con.query("INSERT INTO CUSTOMER SET ? ", data, function(err, rows){
		if(err){
			console.log("Error in inserting details"+err);
			res.send(err);
		} else {
			res.send("SUCCESS");
		}
	});
};

exports.updateCustomer = function(req, res){
	var id = req.body.ID;
	var data = {
			NAME: req.body.NAME,
			ADDRESS: req.body.ADDRESS,
			EMAIL: req.body.EMAIL,
			PHONE: req.body.PHONE
	};
	con.query("UPDATE CUSTOMER SET ? WHERE ID=?",[data, id], function(err, rows){
		if(err){
			console.log("Error in editing the details "+err);
			res.send(err);
		} else {
			res.send("SUCCESS");
		}
	});
};

exports.deleteCustomer = function(req, res){
	var id = req.body.ID;
	var query;
	if(id === null){
		query="DELETE FROM CUSTOMER WHERE ID IS NULL";
	} else {
		query = "DELETE FROM CUSTOMER WHERE ID=?";
	}
	con.query(query,[id], function(err, rows){
		if(err){
			console.log("Error in deleting customer"+err);
			res.send(err);
		} else {
			res.send("SUCCESS");
		}
	});
};