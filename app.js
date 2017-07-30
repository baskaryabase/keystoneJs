var express = require('express')
var app = express()
var port = process.env.PORT || 5678;
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendfile(__dirname+'/public/main.html');
})
app.listen(port);
