var React = require('react');
var Intro = require('./Intro');
var Cakes = require('./Cakes');
var CakeIntro = require('./CakeIntro');
var Baked = require('./Baked');
var BakedIntro = require('./BakedIntro'); 
var Food = require('./Food');
var FoodIntro = require('./FoodIntro');

var MainBody = React.createClass({
  render:function(){
    return(
    <div id="mainBodyDom">
      <div>
        <Intro/>
      </div>
      <br></br>

      <div>
        <CakeIntro/>
        
        <Cakes/>
           <br></br>
        <BakedIntro/>

        <Baked/>
            <br></br>  
        <FoodIntro/>
            
        <Food/>

      </div>

    
    </div>  

    )

  }

});

module.exports = MainBody;