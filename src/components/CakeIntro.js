var React = require('react');


var CakeIntro= React.createClass({
  render:function(){
    return(

      <div id="cakeIntro">
       <p className = 'col-xs-offset-5'>Cakes</p>
       <img id="cakeImg" className="col-xs-12" src="/assets/CS-080.jpg"/>
    
      </div>

      )
  }
}) 

module.exports = CakeIntro;