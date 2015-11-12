var React = require('react');
var NavBar = require('./NavBar');

var Header = React.createClass({
  render: function(){
    return (

      <div>
        <NavBar/>
      </div>

    )
  }

});

module.exports = Header;
