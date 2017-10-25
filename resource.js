var mongoose = require('mongoose');

var StudentResource = new mongoose.Schema({
	name: String,
	department: String,
	gender: String,
	email: String
});

var Resource = mongoose.model('resources', StudentResource);

module.exports = Resource;