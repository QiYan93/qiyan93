var express = require('express');
var qiniu = require("qiniu");

exports.index = function(req, res, next) {
    res.render('tools/qiniu',{title:'落地页地址生成'});
};

exports.getUrl = function(req, res, next) {
    var countMax = req.query.countMax;//最大上传次数
    var localFilePath = req.query.localFilePath;//上传文件名
    var suffix = localFilePath.slice( localFilePath.lastIndexOf('.'));
    //需要填写你的 Access Key 和 Secret Key
    qiniu.conf.ACCESS_KEY = 'EmXiLaiKVU__AMdDX9f5hA4_XiLsFq-oCTfmcVNd';
    qiniu.conf.SECRET_KEY = 'x6GxBsVvc-CjrHfFvHUgrUm2PFMYTfHLIasVFqv4';

    //要上传的空间
    bucket = 'weixin-ushaqi';

    var arr = ['a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var keyList = [];
    for(let count=0;count < countMax;count++){
        var name = '';
        var time = new Date().getTime();
        for(let i=0;i<8;i++){
            name += arr[Math.floor(Math.random()*26)] 
        }

        //上传到七牛后保存的文件名
        key = time + '/' + name + suffix;
        keyList.push(key)
        //构建上传策略函数
        function uptoken(bucket, key) {
            var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
            return putPolicy.token();
        }

        //生成上传 Token
        token = uptoken(bucket, key);

        //要上传文件的本地路径
        filePath = './public/url/'+localFilePath;

        //构造上传函数
        function uploadFile(uptoken, key, localFile) {
            var extra = new qiniu.io.PutExtra();
                qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
                if(!err) {
                    console.log(key)
                    // 上传成功， 处理返回值
                    // console.log(ret.hash, ret.key, ret.persistentId);       
                } else {
                    // 上传失败， 处理返回代码
                    console.log(err);
                }
            });
        }
        //调用uploadFile上传
        uploadFile(token, key, filePath);
    }
    res.json({url:keyList});
}

exports.upload = function(req, res, next) {
    var url = 'http://' + req.headers.host + '/url/' + req.file.originalname
    res.json({
        code : 200,
        name : req.file.originalname
    })
}