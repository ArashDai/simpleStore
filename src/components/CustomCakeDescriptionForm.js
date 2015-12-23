var React =  require('react');
var Link = require('react-router').Link;


var CustomCakeDescriptionForm = React.createClass({
  
  getInitialState:function(){
      return{
        dateTime:      this.props.fieldValues.dateTime,
        eventType:     this.props.fieldValues.eventType,
        servings:      this.props.fieldValues.servings,
        cakeType:      this.props.fieldValues.cakeType,
        fillingType:   this.props.fieldValues.fillingType,
        frostingType:  this.props.fieldValues.frostingType,
        decoration:    this.props.fieldValues.decoration,
        decorationDesc:this.props.fieldValues.decorationDesc,
        userInfo:      this.props.fieldValues.userInfo
      }
  }, 

  saveAndContinue:function(e){
    
      var data = { 
        dateTime:        this.state.dateTime,
        eventType:       this.state.eventType,
        servings:        this.state.servings,
        cakeType:        this.state.cakeType,
        fillingType:     this.state.fillingType,
        frostingType:    this.state.frostingType,
        decoration:      this.state.decoration,
        decorationDesc:  e.target.form[0].value,
        userInfo:        this.state.userInfo
      }

      this.props.saveValues(data);   

  },

  uploadImage:function(image){
    
  },

  render:function(){
    return(

      <div id='card' className='container-fluid'>
        <form>
          <p className='text-center'>Describe your Design</p>


          <textarea className='text-center col-xs-12 col-md-6 col-md-offset-3' id='cakeDescInput' ref='decorationDesc' type="text" />

          <h3 className='text-center'>Upload Images</h3>
          
          <p className='text-center'>
            Upload images related to the cake design, photocake images or example cakes
          </p>

          <Link className='text-center col-sm-offset-8' to='/customcakeuserinfo'>
            <button onClick={this.saveAndContinue}>Save and Continue</button>
          </Link>



        </form>
      </div>

     )
  }

});



module.exports = CustomCakeDescriptionForm;
