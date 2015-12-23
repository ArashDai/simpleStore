var React = require('react');
var Link = require('react-router').Link;


var CustomCakeFinalConfirmation = React.createClass({

  render:function(){

    return(
        <div className='container-fluid'>
          <h1 className='text-center'>Thank You</h1>
          <p className='text-center'>
            Your information has been successfully submitted.
          </p>

          <Link to='/'>
            <button>Close</button>
          </Link>  

        </div>
      )
  }

});


module.exports = CustomCakeFinalConfirmation;