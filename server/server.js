var express = require('express');
var app = express();



app.get('/hello',function(req,res){
  res.status('Hello World one')
  res.send('hello');
})



var server = app.listen(3000,function(){
  var host = server.address().address
  var port = server.address().port

  console.log('Server running on port: '+ port +' @ address: '+ host)
})