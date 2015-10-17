var React =  require('react');


var Baked = React.createClass({
  render:function(){
    return(
      <div id="bakedDom" className="container-fluid">
        <div>Baked Goods</div>

        <div id="bakedWrapper" className="container-fluid">
          <br></br>
          
            <div id="pastryButton" className="col-xs-6">
              <img src="./assets/croissant.jpg" className="col-xs-12"/>
            </div>
         
            <div id="breadButton" className="col-xs-6">
              <img src="./assets/bread.jpg" className="col-xs-12"/>
            </div>
          <br></br>
        </div>
      </div>

      )
  }
})


module.exports = Baked;