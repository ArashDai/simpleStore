var React =  require('react');


var Cakes = React.createClass({
  render:function(){
    return(
      <div id="cakesDom" className="container-fluid">

        <div className="navbar" >
          <ul className="nav nav-tabs" id="cakeNav">
            
              <li role="presentation" className="active">
              <a>Cakes</a>
              </li>
            
            
              <li role="presentation">
              <a>Weddings</a>
              </li>
            
            
              <li role="presentation">
              <a>Birthday</a>
              </li>            
            
              <li role="presentation">
              <a>Events</a>
              </li>
            
          </ul>
        </div>

        <div id="weddingBody">

          <div id="cakeBlurb" className="col-xs-12">
          text about our instore cakes will go here
          this is the initial state
          </div>

        </div>
        
      


      </div>

      )
  }
})


module.exports = Cakes;