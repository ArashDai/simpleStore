var React =  require('react');
var Link = require('react-router').Link;


var CustomCakeConfirmationOne = React.createClass({

  sendInformation:function(){

    var userInformation = JSON.stringify(this.props.fieldValues);

    var xhttp = new XMLHttpRequest();

    if (!xhttp) {
      alert( 'Cannot create an XMLHTTP instance');
      return false;
    }
    
    xhttp.open('POST','/userData',true);
    xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhttp.send(userInformation);
  },

  render:function(){
    console.log(this.props.fieldValues);

    return(
      <div className='text-center'>

        Please confirm your information below

        <div>
          <p>
            Name:<br></br>
             {this.props.fieldValues.userInfo.firstname} 
             &nbsp;
             {this.props.fieldValues.userInfo.lastname}
          </p>
          <p>
            Phone Number:<br></br>
             {this.props.fieldValues.userInfo.phonenumber}
          </p>
          <p>
            Email:<br></br>
            {this.props.fieldValues.userInfo.email}
          </p>
        </div>

        
        <button onClick={this.sendInformation} >Submit</button>

      </div>
      );
  }


});


module.exports = CustomCakeConfirmationOne;