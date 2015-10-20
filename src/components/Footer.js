var React = require('react');
var Info = require('./Info');
var Map = require('./Map');

var Footer = React.createClass({

  render:function(){
    return(
      <div id='footer'>
        <Info/>
        <br></br>
        <Map/>
      </div>
      )
  }
})



module.exports = Footer;