var React =  require('react');


var Info = React.createClass({
  render:function(){
    return(
      <div id="infoDom">
        <p>About Us</p>

        <div className="container-fluid" id="infoWrapper">
   
          <div id="map" className="col-xs-12 ">
            one
          </div>

          <div id="info"className="col-xs-12">
            two
          </div>

        </div>

        <br></br>
      </div>

      )
  }
})


module.exports = Info;