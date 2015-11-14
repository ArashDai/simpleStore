var React = require('react');
var Link = require('react-router').Link;

var EventIntro = React.createClass({
  render:function(){
    return(

      <div id="Intros" className='container-fluid'>
       
        <div className='row'>      
          <p id='cakeTitle' className = 'text-center'>Events</p>
           
          <Link to='' id='pastryButton' className="btn btn-default hidden-xs hidden-sm col-md-offset-9"  role="button">Lunch Menu</Link>
            
               
        </div>



        <div className='col-xs-12 col-sm-10 col-sm-offset-1'>
          <img id="bakedImg" className="img-responsive" src="/assets/sandwich.jpg"/>
        </div>
      </div>

      )
  }
})

module.exports = EventIntro;