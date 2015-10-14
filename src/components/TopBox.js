var React =  require('React');


var TopBox = React.createClass({
  render:function(){
    return(
      <div id="topboxDom">
        <button id='shoppingCart' >shopping img here</button>
        <img id='logo' />
        <button id='login'>login img here</button>
      </div>
      )
  }


})



module.exports = TopBox;