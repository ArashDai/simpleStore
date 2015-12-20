var React =  require('React');
var Router = require('react-router');
var Link = Router.Link;
var Route = Router.Route;

var NavBar = React.createClass({
  render:function(){
    return(

          <nav className="navbar navbar-default navbar-fixed-top container-fluid text-center">
        
            <Link to="/" className='row'>
              <img className="center-block" id='logo' src="./assets/newbakerylogo.png" />
            </Link>  

            <div className='row text-center'>  
              <button type="button" className=" navbar-toggle collapsed " data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span>Menu</span>
              </button>
            </div>  

            <div id="navbar" className=" navbar-collapse collapse ">
              <ul className="nav navbar-nav text-center visible-xs" aria-expanded="false">
                <li><Link to="/cakemenu">Cakes</Link></li>
                <li><Link to="/pastrymenu">Pastries</Link></li>
                <li><Link to="/breadmenu">Breads</Link></li>
                <li><Link to="/lunchmenu">Lunch</Link></li>
                <li><Link to="/breakfastmenu">Breakfast</Link></li>
              </ul>
            </div>

            <div className='row col-sm-offset-3 col-sm-8 col-md-offset-4 col-md-6'>
              <ul className="nav navbar-nav hidden-xs " >
                  <li><Link to="/cakemenu">Cakes</Link></li>
                  <li><Link to="/pastrymenu">Pastries</Link></li>
                  <li><Link to="/breadmenu">Breads</Link></li>
                  <li><Link to="/lunchmenu">Lunch</Link></li>
                  <li><Link to="/breakfastmenu">Breakfast</Link></li>
              </ul>  
            </div>
           
        </nav>
      )
  }

});



module.exports = NavBar;
