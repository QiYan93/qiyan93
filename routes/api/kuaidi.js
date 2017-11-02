var express = require('express');
var router = express.Router();
var request = require('request');
var md5 = require('md5');
var base64 = require('base64url');
var sha1 = require('crypto-js/sha1');

/* 快递查询接口--单个单号查询（参数：单号、公司代号） */
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

/* 快递公司查询--根据单号查询 */
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

/* 客服消息接口 */
// router.all('/service', function(req, res, next){
//     var reqQueryData = req.query;
//     var reqBodyData = req.body;
//     console.log(req.HTTP_RAW_POST_DATA);
//     var token = 'ketie2qiyan';
//     var arr = [reqQueryData['timestamp'], reqQueryData['nonce'],token];
//     arr = arr.sort();
//     var arrStr = sha1(arr.join('')).toString();
//     if(arrStr === reqQueryData.signature){
//         res.end(reqQueryData.echostr)
//     }else{
//         res.end('来源不是微信')
//     }
// })

module.exports = router;