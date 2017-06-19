var mongoose = require('mongoose');

var HomeScheme = new mongoose.Schema({
    list:[{

    }]
});

HomeScheme.pre('save', function(next){
    
})

module.exports = HomeScheme