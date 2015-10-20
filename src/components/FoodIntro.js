var React = require('react');


var FoodIntro = React.createClass({
  render:function(){
    return(

      <div id="foodIntro">
       <p className = 'col-xs-offset-4 col-xs-6'> Food Menu </p>
       <img id="bakedImg" className="col-xs-12" src="/assets/PecanDanish.jpg"/>
    
      </div>

      )
  }
})

module.exports = FoodIntro;