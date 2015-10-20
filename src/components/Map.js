var React = require('react');


var Map = React.createClass({
  render:function(){
    return(

      <div id="bakeryMap">
       <p className = 'col-xs-offset-5'>Find Us</p>
       
       <iframe width="100%" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=14+Peninsula+Center,+Rolling+Hills+Estates,+CA+90274-3506&amp;sll=21.125498,81.914063&amp;sspn=55.418681,78.837891&amp;ie=UTF8&amp;ll=33.786424,-118.372192&amp;spn=0.001561,0.002406&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe>
    
      </div>

      )
  }
}) 

module.exports = Map;