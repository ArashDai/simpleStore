var express = require('express');
var app = express();
app.use(express.static('client'));//should serve html+css page.


var server = app.listen(3000,function(){
  var host = server.address().address
  var port = server.address().port

  console.log('Server running on port: '+ port +' @ address: '+ host)
})



