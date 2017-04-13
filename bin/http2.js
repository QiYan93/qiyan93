var spdy = require('spdy'),
    fs = require('fs');
var http2 = require('http2');
var app = require('../app');
var http = require('http');

var options = {
  key: fs.readFileSync('./public/ca/213996301160900.key'),
  cert: fs.readFileSync('./public/ca/213996301160900.pem'),
  spdy: {
    protocols: [ 'h2', 'spdy/3.1','http/1.1' ]
  }
};

var server = spdy.createServer(options, app);

server.listen(443,'localhost',function(error){
  if(error){
    console.log(error)
  }else{
    console.log('http2 start successfully')
  }
});
http.createServer(app).listen(80,'localhost',function(error){
  if(error){
    console.log(error)
  }else{
    console.log('http start successfully')
  }
});