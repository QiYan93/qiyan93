var express = require('express');
var router = express.Router();
var request = require('request');
var md5 = require('md5');
var base64 = require('base64url')

router.get('/',function(req,res,next){
    var type = req.query.type;
    var number = req.query.number;
    var url = 'http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx'
    var DataSign = base64(md5('{"LogisticCode":"'+number+'","ShipperCode":"'+type+'"}'+'aa847f15-8cf3-405f-b53a-cddf76179c23'))+encodeURIComponent('=');
    request.post({url:url,
        form:{
            DataSign:DataSign,
            DataType:'2',
            EBusinessID:'1285142',
            RequestData:'{"LogisticCode":"'+number+'","ShipperCode":"'+type+'"}',
            RequestType: '1002'
        }
    },function(error,response,body){
        if(error){
            res.json({
                ok:false,
                msg:'服务器挂了'
            })
        }
        body = JSON.parse(body);
        res.json({
            ok:true,
            data: body
        })
    })
});

router.get('/type',function(req,res,next){
    var url = 'http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx';
    var number = req.query.number;
    var DataSign = base64(md5('{"LogisticCode":"'+number+'"}'+'aa847f15-8cf3-405f-b53a-cddf76179c23'))+encodeURIComponent('=');
    request.post({url:url,
        form:{
            DataSign:DataSign,
            DataType:'2',
            EBusinessID:'1285142',
            RequestData:'{"LogisticCode":"'+number+'"}',
            RequestType: '2002'
        }
    },function(error,response,body){
        if(error){
            res.json({
                ok:false,
                msg:'服务器挂了'
            })
        }
        body = JSON.parse(body)
        res.json({
            ok:true,
            data:body
        })
    })
})

module.exports = router;
