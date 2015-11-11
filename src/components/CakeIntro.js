var React = require('react');


var CakeIntro= React.createClass({
  render:function(){
    return(

      <div id="cakeIntro" className="container-fluid">
      
       <p id='cakeTitle' className = 'text-center'>Cakes</p>
       <img id="solocakeImg" className="col-xs-12 visible-xs" src="/assets/CS-080.jpg"/>
       <br></br>
       <div className="hidden-xs ">
          <div className='row col-sm-offset-2 col-md-offset-2'>
              <img id="cakeImg" className="img-circle col-sm-5 col-md-2" src="/assets/sqcake1.jpg"/>
              <img id="cakeImg" className="img-circle col-sm-5 col-md-2" src="/assets/sqcake2.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2 hidden-sm" src="/assets/sqcake3.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2 hidden-sm" src="/assets/sqcake3.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2 hidden-sm" src="/assets/sqcake3.jpg"/>
            
          </div>
          
          <div className='row col-sm-offset-2 col-md-offset-2'>
              <img id="cakeImg" className="img-circle col-sm-5 col-md-2" src="/assets/sqcake1.jpg"/>
              <img id="cakeImg" className="img-circle col-sm-5 col-md-2" src="/assets/sqcake2.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2 hidden-sm" src="/assets/sqcake3.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2 hidden-sm" src="/assets/sqcake3.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2 hidden-sm" src="/assets/sqcake3.jpg"/>
            
          </div>

       </div>
    
      </div>

      )
  }
}) 

module.exports = CakeIntro;