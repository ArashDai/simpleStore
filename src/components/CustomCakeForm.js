var React =  require('react');
var Link = require('react-router').Link;
var CakeInfoForm = require('./CakeInfoForm');
var CakeDescriptionForm = require('./CakeDescriptionForm');

var fieldValues = {
      dateTime:null,
      eventType:null,
      servings:null,
      cakeShape:null,
      cakeType:null,
      fillingType:null,
      frostingType:null,
      decoration:null 
  }



var CustomCakeForm = React.createClass({

  getInitialState: function() {
    return {
      step : 1
    }
  },

  nextStep: function() {
    this.setState({
      step : this.state.step + 1
    })
  },

  previousStep: function() {
    this.setState({
      step : this.state.step - 1
    })
  },

  saveValues: function(fields) {
    return function() {
      this.fieldValues = Object.assign({}, fieldValues, fields)

    }
  },
  
  render: function() {
    switch(this.state.step) {
      case 1:
        return <CakeInfoForm        fieldValues={fieldValues}
                                    nextStep={this.nextStep}
                                    saveValues={this.saveValues}/>
      case 2:
        return <CakeDescriptionForm fieldValues={fieldValues}
                                    nextStep={this.nextStep}
                                    saveValues={this.saveValues}/>
     
    };
  }



});


module.exports = CustomCakeForm;


