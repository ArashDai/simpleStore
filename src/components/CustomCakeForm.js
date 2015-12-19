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
      cakeShape:'',
      cakeType:'',
      fillingType:'',
      frostingType:'',
      decoration:'',
      decorationDesc:'',
      userInfo:undefined

    }

  },
  
  calculatePrice:function(){
    var total = 0;

    if(cakeShape === 'sheet'){
      if(servings === 10){
        console.log('1/4 sheet');
      }
        else if(servings === 20){
        console.log('1/2 sheet');
      }
        else if(servings === 30){
        console.log('1/2 sheet');
      }
        else if(servings === 40){
        console.log('3/4 sheet')
      }
        else if(servings === 50){
        console.log('full sheet')
      }
        else if(servings === 60){
        console.log('3 layer full sheet')
      }

  }    
    if(cakeShape === 'round'){

    }

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


