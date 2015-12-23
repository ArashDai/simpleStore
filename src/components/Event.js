var React =  require('react');
var Link = require('react-router').Link;

var Event = React.createClass({
  render:function(){
    return(
      <div id="card" className="container-fluid">  
          
          <p id="font" className="text-center">
            Here at Mayer's Bakery, we cater to a large variety of special events. From Weddings and Anniversarys to Birthdays and Graduations, Let us put together the sweets of your dreams for your special day. Browse our gallery to see some of our past works 
          </p>
            
          <br></br>
      </div>

      )
  }
})


module.exports = Event; 