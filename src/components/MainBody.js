var React = require('react');
var Intro = require('./Intro');
var Cakes = require('./Cakes');
var Baked = require('./Baked');
var Food = require('./Food');


var MainBody = React.createClass({
  render:function(){
    return(
    <div>
      <div>
        <Intro/>
      </div>
      
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