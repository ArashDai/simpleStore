var React = require('react');
var NavBar = require('./NavBar');

var Header = React.createClass({
  render: function(){
    return (

      <div className='container-fluid text-center'>
        <NavBar/>
      </div>

    )
  }

});

module.exports = Header;
