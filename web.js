var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 // response.send('Hello World2!');
 //   response.send(fs.readFileSync('index.html'));
var fs = require('fs')
buf = new Buffer(256);

buf = fs.readFile('/etc/passwd', function (err, data) {
  if (err) throw err;
  console.log(data);
});
console.log(buf.toString('utf', 0, buf.length);
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
