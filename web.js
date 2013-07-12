var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
app.get('/', function(request, response) {
 // response.send('Hello World2!');
 //   response.send(fs.readFileSync('index.html'));

var buf = fs.readFileSync('index.html');
console.log(buf.toString('utf', 0, buf.length);
response.send(buf.toString('utf',0,buf.length));
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
