var React = require('react');
var Intro = require('./Intro');
var Cakes = require('./Cakes');
var Baked = require('./Baked');
var Food = require('./Food');


var MainBody = React.createClass({
  render:function(){
    return(
    <div id="mainBodyDom">
      <div>
        <Intro/>
      </div>
      <br></br>
      <div>
        <Cakes/>
      </div>

      <div>
        <Baked/>
      </div>
      
      <div>
        <Food/>
      </div>

    
    </div>  

    )

  }

});

module.exports = MainBody;