var React = require('react');
var Intro = require('./Intro');
var Cake = require('./Cake');
var Baked = require('./Baked');
var Food = require('./Food');
var Info = require('./Info');


var MainBody = React.createClass({
  render:function(){
    return(
    <div>
      <div>
        <Intro/>
      </div>
      
      <div>
        <Cake/>
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