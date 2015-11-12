var React =  require('react');
var Link = require('react-router').Link;

var Baked = React.createClass({
  render:function(){
    return(
      <div id="bakedDom" className="container-fluid">
          
            <div id="cakeBlurb" className="col-xs-12 col-sm-10 col-sm-offset-1">
            Lorem ipsum dolor sit amet, mauris tincidunt tellus nisl mattis luctus, tempor nullam, et aenean congue, nullam aliquam, at ante. Vivamus suspendisse ut nec proin in et, cursus eu taciti vitae cum, facilisis nascetur libero platea vitae libero, sodales lacinia non turpis eu wisi, vestibulum aenean habitant aliquam vestibulum maecenas. Ultrices ullam metus ante, congue eos dui condimentum dui turpis in, vulputate donec ad aliquam eget massa pede. 
            </div>

            <div  className="col-xs-6 col-sm-3 col-sm-offset-2 visible-xs visible-sm">
                <Link to="/PastryMenu">
                  <img src="./assets/squaredcreampuff.jpg" className="col-xs-12 img-circle"/>
                </Link>
                <p className='text-center'>Pastries</p>
            </div>
         
            <div  className="col-xs-6 col-sm-3 col-sm-push-2 visible-xs visible-sm">
                <Link to="/BreadMenu">
                  <img src="./assets/squaredbread.jpg" className="col-xs-12 img-circle"/>
                </Link>
                <p className='text-center' >Breads</p>  
            </div>
          
      </div>

      )
  }
})


module.exports = Baked;