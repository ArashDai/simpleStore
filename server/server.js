var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('client'));//should serve html+css page.

app.get('*', function (request, response){
  response.sendFile(path.resolve('client', 'index.html'))
})


app.listen(3000);
