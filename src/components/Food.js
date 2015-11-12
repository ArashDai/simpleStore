var React =  require('react');
var Link = require('react-router').Link;

var Food = React.createClass({
  render:function(){
    return(
      <div id="foodDom" className="container-fluid">
          
            <div id="breakfastButton" className="col-xs-6 col-sm-3 col-sm-offset-2 visible-xs visible-sm">
                <a>
                  <img src="./assets/sandwich2.jpg" className="col-xs-12 img-circle"/>
                </a>
                <p className='text-center'>Breakfast</p>
            </div>
         
            <div id="lunchButton" className="col-xs-6 col-sm-3 col-sm-push-2 visible-xs visible-sm">
                <a>
                  <img src="./assets/sandwich2.jpg" className="col-xs-12 img-circle"/>
                </a>
                <p className='text-center'>Lunch</p>
            </div>
          <br></br>



      </div>

      )
  }
})


module.exports = Food; 