var React = require('react');


var BakedIntro = React.createClass({
  render:function(){
    return(

      <div id="bakedIntro" className='container-fluid'>
       
        <div className='row'>      
          <p id='cakeTitle' className = 'text-center'>Pastries</p>
           
          <a id='pastryButton' className="btn btn-default hidden-xs hidden-sm col-md-offset-8" href="#" role="button">Pastry Menu</a>
            
          <a id='breadButton' className="btn btn-default hidden-xs hidden-sm" href="#" role="button">Bread Menu</a>       
        </div>  

        <img id="solocakeImg" className="col-xs-12 visible-xs" src="/assets/CS-080.jpg"/>
        

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

module.exports = BakedIntro;


