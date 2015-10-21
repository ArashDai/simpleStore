var React = require('react');


var CakeIntro= React.createClass({
  render:function(){
    return(

      <div id="cakeIntro">
       <p className = 'col-xs-offset-5'>Cakes</p>
       <img id="cakeImg" className="col-xs-12 visible-xs" src="/assets/CS-080.jpg"/>
       <div className="hidden-xs">
        <img id="" className="col-sm-3 img-circle" src="/assets/CS-080.jpg"/>
        <img id="" className="col-sm-3 img-circle" src="/assets/CS-080.jpg"/>
        <img id="" className="col-sm-3 img-circle" src="/assets/CS-080.jpg"/>
        <img id="" className="col-sm-3 img-circle" src="/assets/CS-080.jpg"/>
       </div>
    
      </div>

      )
  }
}) 

module.exports = CakeIntro;