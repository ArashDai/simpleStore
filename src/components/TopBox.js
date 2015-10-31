var React =  require('React');
var Router = require('react-router');
var Link = Router.Link;
var Route = Router.Route;

var TopBox = React.createClass({
  render:function(){
    return(

          <nav className="navbar navbar-default navbar-static-top container-fluid">
        

              <div id="betterName" className=" navbar-header">

                <div className="row">
                 
                  <a href="#"><img className="navbar-brand col-xs-offset-3 col-xs-5 visible-xs text-center" id='logo' src="./assets/newbakerylogo.png" /></a>
      

                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                
                </div>
              </div>

              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav" aria-expanded="false">
                  <li><Link to="./cakes">Cakes</Link></li>
                  <li><a href="#Baked">Baked Goods</a></li>
                  <li><a href="#Food">Food</a></li>
                </ul>
                
                <img className="col-sm-3 col-sm-offset-1 col-md-2 col-md-offset-2 col-lg-2 col-lg-offset-3 hidden-xs text-center" id='logo' src="./assets/newbakerylogo.png" />

                <ul className="nav navbar-nav navbar-right">
                  <li><a href="">Login</a></li>
                  <li><a href="">Shopping Cart</a></li>
                </ul>
              </div>
          
        </nav>
      )
  }

})



module.exports = TopBox;