var express = require('express');
var request = require('request');
var router = express.Router();
var WXBizDataCrypt = require('../../utils/WXBizDataCrypt');

/* GET home page. */
router.post('/crypto', function(req, res, next) {
    var sessionKey = req.body.sessionKey;
    var encryptedData = req.body.encryptedData;
    var iv = req.body.iv;
    var appId = 'wxc1f15f2ca2904279';
    if(sessionKey && encryptedData && iv){
        var pc = new WXBizDataCrypt(appId, sessionKey);
        var data = pc.decryptData(encryptedData , iv);
        res.json({
            ok: true,
            data: data
        })
    }else{
        res.json({
            ok: false,
            msg: '缺少参数'
        })
    }
});

module.exports = router;
