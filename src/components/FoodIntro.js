var React = require('react');
var Link = require('react-router').Link;

var FoodIntro = React.createClass({
  render:function(){
    return(

      <div id="Intros" className='container-fluid'>
       
        <div className='row'>      
          <h2 id='cakeTitle' className = 'text-center'>Foods</h2>
           
          <Link to="/LunchMenu" id='pastryButton' className="btn btn-default hidden-xs hidden-sm col-md-offset-8" role="button">Lunch Menu</Link>
            
          <Link to="/BreakfastMenu" id='breadButton' className="btn btn-default hidden-xs hidden-sm" role="button">Breakfast Menu</Link>       
        </div>

        <div className='col-xs-12 col-sm-10 col-sm-offset-1 visible-xs'>
          <img id="bakedImg" className="img-responsive" src="/assets/sandwich.jpg"/>
        </div>

        <div className="hidden-xs ">
          <div className='row col-sm-offset-2 col-md-offset-3'>
              <img id="cakeImg" className="img-circle col-sm-5 col-md-2" src="/assets/sqcake1.jpg"/>
              <img id="cakeImg" className="img-circle col-sm-5 col-md-2" src="/assets/sqcake2.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2 hidden-sm" src="/assets/sqcake3.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2 hidden-sm" src="/assets/sqcake3.jpg"/>  
          </div>
          
          <div className='row col-sm-offset-2 col-md-offset-3'>
              <img id="cakeImg" className="img-circle col-sm-5 col-md-2" src="/assets/sqcake1.jpg"/>
              <img id="cakeImg" className="img-circle col-sm-5 col-md-2" src="/assets/sqcake2.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2 hidden-sm" src="/assets/sqcake3.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2 hidden-sm" src="/assets/sqcake3.jpg"/>
          </div>
          <div className='row col-md-offset-3 visible-lg'>
              <img id="cakeImg" className="img-circle col-md-2" src="/assets/sqcake1.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2" src="/assets/sqcake2.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2" src="/assets/sqcake3.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2" src="/assets/sqcake3.jpg"/>
          </div>
        </div>  
        
      </div>

      )
  }
})

module.exports = FoodIntro;