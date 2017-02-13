var express = require('express');
var request = require('request');

exports.index = function(req, res, next) {
    res.render('shop', {title:'杂货铺'});
};