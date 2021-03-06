var React = require('react');
var Link = require('react-router').Link;


var CustomCakeUserInfo = React.createClass({

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

    var userData = {};

    for(var i=0; i<=4;i++){
      var x;
        if(i === 0){x ='firstname'};
        if(i === 1){x ='lastname'};
        if(i === 2){x ='birthday'};
        if(i === 3){x ='phonenumber'};
        if(i === 4){x ='email'};
      userData[x] = e.target.form[i].value;
    };    
    
    var data = { 
      dateTime:        this.state.dateTime,
      eventType:       this.state.eventType,
      servings:        this.state.servings,
      cakeType:        this.state.cakeType,
      fillingType:     this.state.fillingType,
      frostingType:    this.state.frostingType,
      decoration:      this.state.decoration,
      decorationDesc:  this.state.decorationDesc,
      userInfo:        userData
    };

    console.log(userData);
    this.props.saveValues(data);   
    console.log(this.props.fieldValues);
  },

  render:function(){
  
    return(

      <div className='container-fluid text-center'>
        
        <h3>Customer Information</h3>

        <form>
          <p>First Name</p>   <input type="text" name="firstname"  required  />
          <p>Last Name</p>    <input type="text" name="lastname"  required   />
          <p>Birthday</p>     <input type='date' ref='userBday' />
          <p>Phone Number</p> <input type="text" required />
          <p>Email</p>        <input type="email" required />
          <br></br>
          
          <Link to='/customcakeconfirmationone'>
            <button className='text-center col-sm-offset-6' onClick={this.saveAndContinue}> Submit </button>
          </Link>
        </form>

      </div>
      
      )
  }
}); 


module.exports = CustomCakeUserInfo;