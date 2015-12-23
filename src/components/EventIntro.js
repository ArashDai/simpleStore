var React = require('react');
var Link = require('react-router').Link;

var EventIntro = React.createClass({
  render:function(){
    return(

      <div id="Intros" className='container-fluid'>
       
        <div className='row'>      
          <h2 id='cakeTitle' className = 'text-center'>Events</h2>
           
          <Link to='' id='pastryButton' className="btn btn-default hidden-xs hidden-sm col-md-offset-9"  role="button">Learn More</Link>
            
        </div>

        <div className='row'>
          <div className='col-xs-12 col-sm-4 '>
            <img id="bakedImg" className="img-responsive" src="/assets/sandwich.jpg"/>
          </div>
          <div className='hidden-xs col-sm-4 '>
            <img id="bakedImg" className="img-responsive" src="/assets/sandwich.jpg"/>
          </div>
          <div className='hidden-xs col-sm-4 '>
            <img id="bakedImg" className="img-responsive" src="/assets/sandwich.jpg"/>
          </div>
        </div>  

      </div>

      )
  }
})

module.exports = EventIntro;