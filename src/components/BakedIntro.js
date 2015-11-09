var React = require('react');


var BakedIntro = React.createClass({
  render:function(){
    return(

      <div id="bakedIntro" className='container-fluid'>
       <p className = 'text-center'> Baked Goods </p>
       <div className="col-xs-12 col-sm-10 col-sm-offset-1">
          <img id="bakedImg" className='img-responsive' src="/assets/PecanDanish.jpg"/>
       </div>    
       
      </div>

      )
  }
})

module.exports = BakedIntro;