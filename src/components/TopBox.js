var React =  require('React');


var TopBox = React.createClass({
  render:function(){
    return(

          <nav className="navbar navbar-default navbar-static-top container-fluid">
        

              <div id="betterName" className=" navbar-header">

                <div className="row">
                 
                  <a href="#"><img className="navbar-brand col-xs-offset-3 col-xs-5 col-sm-8" id='logo' src="./assets/newbakerylogo.png" /></a>
      

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
                  <li><a href="#Cakes">Cakes</a></li>
                  <li><a href="#Bakedgoods">Baked Goods</a></li>
                  <li><a href="#Food">Food Menu</a></li>
                </ul>

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