var React =  require('react');
var Link = require('react-router').Link;

var Cakes = React.createClass({
  render:function(){
    return(
      <div id="card" className="container-fluid ">
            
            <p className='text-center' id="font">
            Here at Mayers Bakery we offer a wide variety of cakes for all occasions,<br/> from weddings and anniversaries to birthdays
            </p>
        
      </div>

      )
  }
})


module.exports = Cakes;