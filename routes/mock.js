var express = require('express');
var router = express.Router();
var Mock = require('mockjs');

router.get('/',function(req,res,next){
    // var data = Mock.mock({
    //     'name|1-10':[{
    //         'id|+1':1
    //     }]
    // })
    // var dataMock = {
    //     'name|1-10':[{
    //         'id|+1':1
    //     }]
    // }
    // dataMockStr = JSON.stringify(dataMock,null,4);
    // dataStr = JSON.stringify(data,null,4);
    // var resData = {
    //     dataStr: dataStr,
    //     dataMockStr: dataMockStr
    // }
    res.render('mock',{})
})

module.exports = router;