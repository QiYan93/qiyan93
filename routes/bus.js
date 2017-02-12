var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var city = encodeURIComponent(req.query.city);
    var bus = req.query.bus;
    if(city && bus){
        request.get('http://op.juhe.cn/189/bus/busline?dtype=json&city='+city+'&bus='+bus+'&key=d31c9559f9cc37dcf6cb5946e0b982b4', function(error, response, body) {
            body = JSON.parse(body)
            // console.log('http://op.juhe.cn/189/bus/busline?dtype=json&city='+city+'&bus='+bus+'&key=d31c9559f9cc37dcf6cb5946e0b982b4')
            res.json(body)
        })
    }
});

module.exports = router;
