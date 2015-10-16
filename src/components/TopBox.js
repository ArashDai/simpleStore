var React =  require('React');


var TopBox = React.createClass({
  render:function(){
    return(
      <div id="topboxDom" className="col-xs-12" >

        <div className="col-xs-offset-1 col-xs-10">

          <a><div id='shoppingCart' className="glyphicon glyphicon-shopping-cart" ></div></a>

          <img id='logo' className="col-xs-offset-4" src="./assets/mayerslogo.png" />

          <a> <div id='login' className="col-xs-push-3 glyphicon glyphicon-user"> Login</div></a>
        
        </div>
      
      </div>
      )
  }


})



module.exports = TopBox;