var React =  require('react');


var Food = React.createClass({
  render:function(){
    return(
      <div id="foodDom" className="container-fluid">
        <div>Foods</div>
        <div id="foodWrapper" className="container-fluid">
          <br></br>
          
            <div id="breakfastButton" className="col-xs-6">
              <img src="./assets/croissant.jpg" className="col-xs-12"/>
            </div>
         
            <div id="lunchButton" className="col-xs-6">
              <img src="./assets/bread.jpg" className="col-xs-12"/>
            </div>
          <br></br>
        </div>








      </div>

      )
  }
})


module.exports = Food; 