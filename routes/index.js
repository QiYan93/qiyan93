var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // let url = 'http://v.juhe.cn/weixin/query?pno=1&ps=20&dtype=json&key=1435e518332ce247ce4b14955d851c23';
  let url = 'http://v.juhe.cn/toutiao/index?type=keji&key=ee46dcc6f129ccd3acb0e12c46428aee';
  request.get(url, function(error, response, body) {
    body = JSON.parse(body)
    res.render('news', {title:'柒颜', lists: body.result.data });
  })
});

module.exports = router;
