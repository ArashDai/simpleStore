var React = require('react');
var Link = require('react-router').Link;

var FoodIntro = React.createClass({
  render:function(){
    return(

      <div id="Intros" className='container-fluid'>
       
        <div className='row'>      
          <p id='cakeTitle' className = 'text-center'>Foods</p>
           
          <Link to="/LunchMenu" id='pastryButton' className="btn btn-default hidden-xs hidden-sm col-md-offset-8" role="button">Lunch Menu</Link>
            
          <Link to="/BreakfastMenu" id='breadButton' className="btn btn-default hidden-xs hidden-sm" role="button">Breakfast Menu</Link>       
        </div>



        <div className='col-xs-12 col-sm-10 col-sm-offset-1'>
          <img id="bakedImg" className="img-responsive" src="/assets/sandwich.jpg"/>
        </div>
      </div>

      )
  }
})

module.exports = FoodIntro;