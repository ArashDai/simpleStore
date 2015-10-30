var React = require('react');


var CakeIntro= React.createClass({
  render:function(){
    return(

      <div id="cakeIntro" className="container-fluid">
       <p className = 'text-center'>Cakes</p>
       <img id="cakeImg" className="col-xs-12 visible-xs" src="/assets/CS-080.jpg"/>
       <div className="hidden-xs">
        <img id="" className="col-sm-6 col-sm-offset-3 img-circle" src="/assets/CS-080.jpg"/>
       </div>
    
      </div>

      )
  }
}) 

module.exports = CakeIntro;