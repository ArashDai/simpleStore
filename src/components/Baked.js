var React =  require('react');
var Link = require('react-router').Link;

var Baked = React.createClass({
  render:function(){
    return(
      <div id="card" className="container-fluid">
          
            <h3 className='text-center'> So many pastries to choose from! </h3>

            <p id="font" className="text-center">
             Danishes, Muffins, Cookies and More 
            </p>

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