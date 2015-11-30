var React =  require('react');
var Link = require('react-router').Link;

var CakeSelections = require('./CakeSelections');
var CakeInfoForm = require('./CakeInfoForm');
var CakeDescriptionForm = require('./CakeDescriptionForm');

// var fieldValues = {
//       dateTime:'test',
//       eventType:null,
//       servings:null,
//       cakeShape:'monkey',
//       cakeType:null,
//       fillingType:null,
//       frostingType:null,
//       decoration:null 
//   }
//fieldValues={fieldValues}


var CustomCakeForm = React.createClass({

  getInitialState:function(){
    return{
      dateTime:null,
      eventType:null,
      servings:null,
      cakeShape:null,
      cakeType:null,
      fillingType:null,
      frostingType:null,
      decoration:null 

    }

  },

  saveValues: function(fields) {
   
      this.setState(fields)

  },
  
  render: function() {
    return(
     <div id='card'>
      <h1 className='text-center'>Custom Cake Creator</h1>
        <p className='text-center'>The perfect cake awaits</p>
      
      <div className='container-fluid'>
            {this.props.children && React.cloneElement(this.props.children,{saveValues:this.saveValues})}
      </div>

      <br></br>

      <CakeSelections fieldValues={this.state}/>
      

     </div>
    )
  }

});


module.exports = CustomCakeForm;



 // <CakeInfoForm        fieldValues={fieldValues}
 //                                    nextStep={this.nextStep}
 //                                    saveValues={this.saveValues}/>


