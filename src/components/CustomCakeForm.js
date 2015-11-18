var React =  require('react');
var Link = require('react-router').Link;
var CakeInfoForm = require('./CakeInfoForm');


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

  getInitialState: function(){
    return {
      step:1
    };
  },
  

  render:function(){
    switch(this.state.step){
      case 1:
        return <CakeInfoForm />
      case 2:
        return //UserInfoForm 
      case 3:
        return //OrderConfirmation     


    };
  }



});


module.exports = CustomCakeForm;