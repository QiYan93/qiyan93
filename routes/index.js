var express = require('express');
var request = require('request');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {title:'柒颜'});
});

module.exports = router;
