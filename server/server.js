var express = require('express');
var path = require('path');
var app = express();
var nodemailer = require('nodemailer');

app.use(express.static('client'));//should serve html+css page.


app.post('/userData',function (request,response){
  response.send(console.log('hello'));
});


app.get('*', function (request, response){
  response.sendFile(path.resolve('client', 'index.html'))
});



var PORT = process.env.PORT || 3000;

app.listen(PORT);
