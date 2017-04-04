var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, "views")));

app.get('/about', function(req, res){
	res.sendFile(path.join(__dirname, "./views/about.html"));
});

app.get("/*", function(req, res){
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.listen(3000)