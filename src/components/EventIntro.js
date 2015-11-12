var React = require('react');


var EventIntro = React.createClass({
  render:function(){
    return(

      <div id="foodIntro" className='container-fluid'>
       
        <div className='row'>      
          <p id='cakeTitle' className = 'text-center'>Events</p>
           
          <a id='pastryButton' className="btn btn-default hidden-xs hidden-sm col-md-offset-8" href="#" role="button">Lunch Menu</a>
            
          <a id='breadButton' className="btn btn-default hidden-xs hidden-sm" href="#" role="button">Breakfast Menu</a>       
        </div>



        <div className='col-xs-12 col-sm-10 col-sm-offset-1'>
          <img id="bakedImg" className="img-responsive" src="/assets/sandwich.jpg"/>
        </div>
      </div>

      )
  }
})

module.exports = EventIntro;