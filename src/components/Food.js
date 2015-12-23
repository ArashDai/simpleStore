var React =  require('react');
var Link = require('react-router').Link;

var Food = React.createClass({
  render:function(){
    return(
      <div id="card" className="container-fluid">

            <h4 className='text-center'>Have Breakfast or Lunch with us!</h4>
            <p className='text-center' id='font'> Mayer's now offers Sandwiches, Soups and Salads for Lunch as well as Breakfast Sandwiches, all fully customizable!
            </p>

            <div id="breakfastButton" className="col-xs-6 col-sm-3 col-sm-offset-2 visible-xs visible-sm">
                <Link to='/breakfastmenu'>
                  <img src="./assets/sandwich2.jpg" className="col-xs-12 img-circle"/>
                </Link>
                <p className='text-center'>Breakfast</p>
            </div>
         
            <div id="lunchButton" className="col-xs-6 col-sm-3 col-sm-push-2 visible-xs visible-sm">
                <Link to='/lunchmenu'>
                  <img src="./assets/sandwich2.jpg" className="col-xs-12 img-circle"/>
                </Link>
                <p className='text-center'>Lunch</p>
            </div>
          <br></br>
          
      </div>

      )
  }
})


module.exports = Food; 