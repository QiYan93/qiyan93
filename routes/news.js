var express = require('express');
var request = require('request');
var fs = require('fs');

exports.index = function(req, res, next) {
    let url = 'http://v.juhe.cn/toutiao/index?type=keji&key=ee46dcc6f129ccd3acb0e12c46428aee';
    request.get(url, function(error, response, body) {
        body = JSON.parse(body)
        var stream = res.push('/javascripts/main.js',{
            method: 'GET',
            status: 200,
            request:{
                accept: '*/*'
            },
            response:{
                'content-type': 'application/javascript'
            }
        })
        stream.on('error', function() {

        });
        var js = fs.readFileSync('./public/javascripts/main.js');
        stream.end(js.toString());
        res.render('news', {title:'柒颜', lists: body.result.data });
    })
};

exports.news = function(req, res, next) {
    var type = req.query.type;
    request.get('http://v.juhe.cn/toutiao/index?type='+type+'&key=ee46dcc6f129ccd3acb0e12c46428aee', function(error, response, body) {
        body = JSON.parse(body)
        // console.log('http://op.juhe.cn/189/bus/busline?dtype=json&city='+city+'&bus='+bus+'&key=d31c9559f9cc37dcf6cb5946e0b982b4')
        res.json(body)
    })
};