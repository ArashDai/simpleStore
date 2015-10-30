var React = require('react');


var FoodIntro = React.createClass({
  render:function(){
    return(

      <div id="foodIntro" className='container-fluid'>
       <p className = 'text-center'> Food </p>
        <div className='col-xs-12 col-sm-10 col-sm-offset-1'>
          <img id="bakedImg" className="img-responsive" src="/assets/sandwich.jpg"/>
        </div>
      </div>

      )
  }
})

module.exports = FoodIntro;