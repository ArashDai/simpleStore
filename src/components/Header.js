var React = require('react');
var TopBox = require('./TopBox');
var NavBar = require('./NavBar');

var Header = React.createClass({
  render: function(){
    return (

      <div>
        <TopBox/>
        <br></br>
        <NavBar/>
      </div>

    )
  }

});

module.exports = Header;