var React =  require('react');
var Link = require('react-router').Link;

var CustomCakeSelections = require('./CustomCakeSelections');
var CustomCakeInfoForm = require('./CustomCakeInfoForm');
var CustomCakeDescriptionForm = require('./CustomCakeDescriptionForm');


var CustomCakeForm = React.createClass({

  getInitialState:function(){

    return{

      dateTime:'',
      eventType:'',
      servings:'',
      cakeType:'',
      fillingType:'',
      frostingType:'',
      decoration:'',
      decorationDesc:'',
      userInfo:undefined

    }

  },
  
  calculatePrice:function(){
   

  },

  saveValues: function(fields) {

      this.setState(fields);

  },
  
  render: function() {
    return(
     <div id='card'>
      <h1 className='text-center'>Custom Cake Creator</h1>
        <p className='text-center'>The perfect cake awaits</p>
      
      <div className='container-fluid'>
        {this.props.children && React.cloneElement(this.props.children,{saveValues:this.saveValues, fieldValues:this.state})}
      </div> 
       
      <br></br>

      <CustomCakeSelections fieldValues={this.state}/>
      

     </div>
    )
  }

});


module.exports = CustomCakeForm;


