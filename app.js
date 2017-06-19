var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
var gzip = require('express-gzip');

var index = require('./routes/index');
var bus = require('./routes/api/bus');
var news = require('./routes/news');
var qiniu = require('./routes/qiniu');
var kuaidi = require('./routes/api/kuaidi');
var mock = require('./routes/mock');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(gzip);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './public/url')
    },
    filename: function (req, file, cb){
        cb(null, file.originalname)
    }
});
var upload = multer({
    storage: storage
});

/* http->https 重定向 */
app.use('*',function(req,res,next){
  if(req.protocol !== 'https'){
    res.redirect('https://'+req.hostname+req.url)
  }else{
    next()
  }
})

/* api block */
app.use('/', index);
app.use('/bus', bus);
app.get('/news', news.index);
app.get('/getNews', news.news);
app.get('/qiniu', qiniu.index);
app.post('/geturl', qiniu.getUrl);
app.post('/upload',upload.single('file'),qiniu.upload);
app.use('/kuaidi',kuaidi);
app.use('/mock',mock);
app.use('*', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
