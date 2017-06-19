var mongoose = require('mongoose');
var HomeSchema = require('../schemas/home');
var Home = mongoose.model('Home', HomeSchema);

module.exports = Home;
