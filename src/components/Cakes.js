var React =  require('react');


var Cakes = React.createClass({
  render:function(){
    return(
      <div id="cakesDom">
        <ul id='cakeNav' className="col-xs-offset-1 col-xs-10">
          <li>Cakes</li>
          <li>Wedding</li>
          <li>Birthday</li>
          <li>Events</li>
        </ul>
        <div id="cakeBody">
          <ul id="cakeImages" className="row col-xs-pull-0">
            <li className="col-xs-12"> img 1 </li>
            <li className="col-xs-12"> img 2 </li>
            <li className="col-xs-12"> img 3 </li>
          </ul>

          <div id="cakeBlurb" className="row col-xs-12 col-xs-offset-0">
          text about our instore cakes will go here, and navigation tips 
          </div>

        </div>
        
      


      </div>

      )
  }
})


module.exports = Cakes;