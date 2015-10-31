var React = require('react');


var CakeIntro= React.createClass({
  render:function(){
    return(

      <div id="cakeIntro" className="container-fluid">
      
       <p id='cakeTitle' className = 'text-center'>Cakes</p>
       <img id="solocakeImg" className="col-xs-12 visible-xs" src="/assets/CS-080.jpg"/>
       <br></br>
       <div className="hidden-xs">
          <div className='row col-sm-offset-1'>
              <img id="cakeImg" className="img-circle col-sm-4 col-md-3" src="/assets/sqcake1.jpg"/>
              <img id="cakeImg" className="img-circle col-sm-4 col-md-3" src="/assets/sqcake2.jpg"/>
              <img id="cakeImg" className="img-circle col-md-3 hidden-sm" src="/assets/sqcake3.jpg"/>
          </div>
          <br></br>
          <div className='row col-sm-offset-1'>
              <img id="cakeImg" className="img-circle col-sm-4 col-md-3" src="/assets/sqcake4.jpg"/>
              <img id="cakeImg" className="img-circle col-sm-4 col-md-3" src="/assets/sqcake5.jpg"/>
              <img id="cakeImg" className="img-circle col-md-3 hidden-sm" src="/assets/sqcake7.jpg"/>
          </div>

       </div>
    
      </div>

      )
  }
}) 

module.exports = CakeIntro;