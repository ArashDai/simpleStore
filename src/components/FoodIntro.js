var React = require('react');


var FoodIntro = React.createClass({
  render:function(){
    return(

      <div id="foodIntro">
       <p className = 'col-xs-offset-4 col-xs-6'> Food </p>
        <div className='col-xs-12 col-sm-10 col-sm-offset-1'>
          <img id="bakedImg" className="img-responsive" src="/assets/sandwich.jpg"/>
        </div>
      </div>

      )
  }
})

module.exports = FoodIntro;