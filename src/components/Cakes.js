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
          Lorem ipsum dolor sit amet, mauris tincidunt tellus nisl mattis luctus, tempor nullam, et aenean congue, nullam aliquam, at ante. Vivamus suspendisse ut nec proin in et, cursus eu taciti vitae cum, facilisis nascetur libero platea vitae libero, sodales lacinia non turpis eu wisi, vestibulum aenean habitant aliquam vestibulum maecenas. Ultrices ullam metus ante, congue eos dui condimentum dui turpis in, vulputate donec ad aliquam eget massa pede. 
          </div>

        </div>
        
      


      </div>

      )
  }
})


module.exports = Cakes;