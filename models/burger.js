var orm = require('../config/orm.js');

var burger = {
	selectAll: function(cb) {
// burgers is the table to look at 		
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	insertOne: function(addingNewValues, cb) {
// assuming it works like seeds.sql and adds a VALUE()		
		orm.insertOne("burgers", addingNewValues function(res) {
			cb(res);
		});
	},
	updateOne: function(valofCol, colToSearch, cb) {
// looking at burgers adding a new value and selecting where i want it changed, assume it is by id or name of food		
		orm.insertOne("burgers", valofCol, colToSearch function(res) {
			cb(res);
		});
	}
};  

module.exports = burger;