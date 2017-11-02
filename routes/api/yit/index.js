var express = require('express');
var router = express.Router();
var request = require('request');

/* 开眼一条视频--分类 */
router.get('/category', function(req,res,next){
    var url = 'https://baobab.kaiyanapp.com/api/wx/yitiao/playlists';
    request.get({
        url:url,
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

/* 开眼一条视频--首页 */
router.get('/index', function(req,res,next){
    var url = 'https://baobab.kaiyanapp.com/api/wx/yitiao/videos';
    request.get({
        url:url,
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

/* 开眼一条视频--详情 */
router.get('/detail/:id', function(req,res,next){
    var url = 'https://baobab.kaiyanapp.com/api/wx/yitiao/video/' + req.params.id;
    request.get({
        url:url,
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

/* 开眼一条视频--分类详情 */
router.get('/category/:id', function(req,res,next){
    var start = req.query.start ? req.query.start:0,
        num = req.query.num ? req.query.num:10;
    var url = `https://baobab.kaiyanapp.com/api/v4/playlists/${req.params.id}/videos?start=${start}&num=${num}`;
    request.get({
        url:url,
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

module.exports = router;