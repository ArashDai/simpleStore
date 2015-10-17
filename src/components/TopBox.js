var React =  require('React');


var TopBox = React.createClass({
  render:function(){
    return(
      <div id="topboxDom" className="col-xs-12" >

        <div className="row col-xs-10">

          <a><div id='shoppingCart' className="hidden-xs glyphicon glyphicon-shopping-cart" ></div></a>

          <div className="col-xs-offset-6"><img id='logo' src="./assets/mayerslogo.png" /></div>

          <div></div>

          <a> <div id='login' className="hidden-xs col-xs-push-3 glyphicon glyphicon-user"> Login</div></a>
        
        </div>
      
      </div>
      )
  }


})



module.exports = TopBox;