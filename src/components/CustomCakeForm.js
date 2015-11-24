var React =  require('react');
var Link = require('react-router').Link;

var CakeSelections = require('./CakeSelections');
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

  saveValues: function(fields) {
    return function() {
      this.fieldValues = Object.assign({}, fieldValues, fields)

    }
  },
  
  render: function() {
    return(
     <div id='card'>
      <h1 className='text-center'>Custom Cake Creator</h1>
        <p className='text-center'>The perfect cake awaits</p>
      
      <div className='container-fluid'>
            {this.props.children}
      </div>
      <br></br>

      <CakeSelections/>
      

     </div>
    )
  }

});


module.exports = CustomCakeForm;



 // <CakeInfoForm        fieldValues={fieldValues}
 //                                    nextStep={this.nextStep}
 //                                    saveValues={this.saveValues}/>


