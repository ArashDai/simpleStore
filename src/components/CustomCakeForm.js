var React =  require('react');
var Link = require('react-router').Link;
var CakeInfoForm = require('./CakeInfoForm');
var CakeDescriptionForm = require('./CakeDescriptionForm');

 var fieldValues = {
      date:null,
      time:null,
      eventType:null,
      servings:null,
      cakeType:null,
      fillingType:null,
      frostingType:null,
      decoration:null 
  }



var CustomCakeForm = React.createClass({

  saveValues: function(fields) {
    return function() {
      fieldValues = Object.assign({}, fieldValues, fields)

    }
  },
  
  
  render:function(){
      
    return <CakeInfoForm/>
  
    
  }



});


module.exports = CustomCakeForm;