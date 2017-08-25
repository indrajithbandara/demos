var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  var file = fs.createReadStream('./1-options-method.html');
  file.on('data', function(chunk){
    res.end(chunk);
  });
});

server.listen(3000);

