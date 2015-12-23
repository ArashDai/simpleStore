var React = require('react');
var Link = require('react-router').Link;

var CakeIntro= React.createClass({
  render:function(){
    return(

      <div id="Intros" className="container-fluid">
       <div className='row'> 
       <h2 id='cakeTitle' className = 'text-center'>Cakes</h2>

       <Link to="/cakemenu" id='cakeButton' className="btn btn-default hidden-xs hidden-sm col-md-offset-9" role="button">Cake Menu</Link>
       </div>


       <img id="solocakeImg" className="col-xs-12 visible-xs" src="/assets/CS-080.jpg"/>
       
       <div className="hidden-xs ">
          <div className='row col-sm-offset-2 col-md-offset-3'>
              <img id="cakeImg" className="img-circle col-sm-5 col-md-2" src="/assets/sqcake1.jpg"/>
              <img id="cakeImg" className="img-circle col-sm-5 col-md-2" src="/assets/sqcake2.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2 hidden-sm" src="/assets/sqcake3.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2 hidden-sm" src="/assets/sqcake3.jpg"/>  
          </div>
          
          <div className='row col-sm-offset-2 col-md-offset-3'>
              <img id="cakeImg" className="img-circle col-sm-5 col-md-2" src="/assets/sqcake1.jpg"/>
              <img id="cakeImg" className="img-circle col-sm-5 col-md-2" src="/assets/sqcake2.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2 hidden-sm" src="/assets/sqcake3.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2 hidden-sm" src="/assets/sqcake3.jpg"/> 
          </div>
          <div className='row col-md-offset-3 visible-lg'>
              <img id="cakeImg" className="img-circle col-md-2" src="/assets/sqcake1.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2" src="/assets/sqcake2.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2" src="/assets/sqcake3.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2" src="/assets/sqcake3.jpg"/>
          </div>

       </div>
    
      </div>

      )
  }
}) 

module.exports = CakeIntro;