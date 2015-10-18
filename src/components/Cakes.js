var React =  require('react');


var Cakes = React.createClass({
  render:function(){
    return(
      <div id="cakesDom" className="container-fluid">

        <div className="navbar" >
          <ul className="nav nav-tabs" id="cakeNav">
            
              <li type="button" className="navbar-toggle collapsed active" data-toggle="collapse" data-target="#defaultcakeBody" aria-expanded="true" aria-controls="navbar"role="presentation">
              <a>Cakes</a>
              </li>
            
            
              <li type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#weddingBody" aria-expanded="false" aria-controls="navbar" role="presentation">
              <a>Weddings</a>
              </li>
            
            
              <li type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bdayBody" aria-expanded="false" aria-controls="navbar" role="presentation">
              <a>Birthday</a>
              </li>            
            
              <li type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#eventBody" aria-expanded="false" aria-controls="navbar" role="presentation">
              <a>Events</a>
              </li>
            
          </ul>
        </div>

        <div id="defaultcakeBody" className="navbar-collapse collapse" aria-expanded="true">

          <div id="cakeBlurb" className="col-xs-12">
            text about our instore cakes will go here
          </div>

        </div>

        <div id="weddingBody" className="navbar-collapse collapse" aria-expanded="false">

          <div id="cakeBlurb" className="col-xs-12">
            text about our wedding cakes will go here
          </div>

        </div>
        
        <div id="bdayBody" className="navbar-collapse collapse" aria-expanded="false">

          <div id="cakeBlurb" className="col-xs-12">
            text about our birthday cakes will go here
          </div>

        </div>
        
        <div id="eventBody" className="navbar-collapse collapse" aria-expanded="false">

          <div id="cakeBlurb" className="col-xs-12">
            text about our event cakes will go here
          </div>

        </div>


      </div>

      )
  }
})


module.exports = Cakes;