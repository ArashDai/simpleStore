var express = require('express');
var bodyParser= require('body-parser')
var path = require('path');
var app = express();
var secret= require('./secrets/secret');
var nodemailer = require('nodemailer');

app.use(express.static('client'));

app.use(bodyParser.json());

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: secret.email,
        pass: secret.pass
    }
});



app.post('/userData',function (request,response){
  response.send(console.log(request.body));

  var textCreator = function(data){
  var text = 'A cake order has been received for the date of : ' + data.body.dateTime + ' cake details:a ' + data.body.cakeType + ' ' + data.body.cakeShape + ' ' + data.body.servings + ' with ' + data.body.fillingType + ' and ' + data.body.frostingType + 'decoration : ' + data.body.decoration + ' ' + data.body.decorationDesc + ' ' +data.body.userInfo;

  return text;
  }
  var finalText = textCreator(request)


  var customerMail = {
    from: 'MayersBakery',
    to: request.body.userInfo.email,
    subject: 'Mayers Bakery Cake Receipt',
    text: 'Hello  '+request.body.userInfo.firstname+' '+request.body.userInfo.lastname 
  };

  var buisnessMail = {
    from: 'MayersBakery',
    to: secret.email, 
    subject: 'Cake Order Invoice',
    text: finalText
  };

  transporter.sendMail(customerMail, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });

  transporter.sendMail(buisnessMail, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });



});


app.get('*', function (request, response){
  response.sendFile(path.resolve('client', 'index.html'))
});



var PORT = process.env.PORT || 3000;

app.listen(PORT);
