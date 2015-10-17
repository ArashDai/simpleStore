var React =  require('react');


var Intro = React.createClass({
  render:function(){
    return(
      <div id="introDom" >
       
        <img id="introImg" className="row col-xs-12" src="/assets/diningroom.jpg" />
    
      </div>

      )
  }
})


module.exports = Intro;