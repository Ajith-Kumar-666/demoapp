var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("000-Hello------World-000");
});

app.listen(4000);
