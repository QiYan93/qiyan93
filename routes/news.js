var express = require('express');
var request = require('request');

exports.news = function(req, res, next) {
    var type = req.query.type;
    request.get('http://v.juhe.cn/toutiao/index?type='+type+'&key=ee46dcc6f129ccd3acb0e12c46428aee', function(error, response, body) {
        body = JSON.parse(body)
        // console.log('http://op.juhe.cn/189/bus/busline?dtype=json&city='+city+'&bus='+bus+'&key=d31c9559f9cc37dcf6cb5946e0b982b4')
        res.json(body)
    })
};