var React = require('react');
var TopBox = require('./TopBox');
var NavBar = require('./NavBar');

var Header = react.createClass({
  render: function(){
    return (

      <div>
        <TopBox/>
        <NavBar/>
      </div>

    )
  }

});

module.exports = Header;
