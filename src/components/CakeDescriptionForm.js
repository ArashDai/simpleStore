var React =  require('react');
var Link = require('react-router').Link;


var CakeDescriptionForm = React.createClass({


render:function(){
    return(

      <div id='card' className='container-fluid'>
        
        <p className='text-center'>Describe your Design</p>

        <input className='text-center col-xs-12 col-md-6 col-md-offset-3' id='cakeDescInput' ref='decorationDescription' type="text"  value=""/>

      </div>

     )
  }

});



module.exports = CakeDescriptionForm;
