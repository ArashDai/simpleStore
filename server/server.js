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
  var orderText =   'Customer Information: '+data.body.userInfo.firstname+' '+
                      data.body.userInfo.lastname+'\n'+
                    'Phone Number: ' +data.body.userInfo.phonenumber+'\n'+
                    'Email: '+data.body.userInfo.email+'\n'+  
                    'Date: ' + data.body.dateTime +'\n'+
                    'Cake Type: ' + data.body.cakeType +'\n'+
                    'Cake Size: ' + data.body.servings +'\n'+
                    'Filling: ' + data.body.fillingType +'\n'+
                    'Frosting: ' + data.body.frostingType +'\n'+
                    'Decoration: ' + data.body.decoration + '   : ' + data.body.decorationDesc;

  return orderText;
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

  transporter.sendMail(buisnessMail, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Buisness Message sent: ' + info.response);

    transporter.sendMail(customerMail, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Customer Message Sent: ' + info.response);

    });
  });



});


app.get('*', function (request, response){
  response.sendFile(path.resolve('client', 'index.html'))
});



var PORT = process.env.PORT || 3000;

app.listen(PORT);
