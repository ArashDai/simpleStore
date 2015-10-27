var React = require('react');


var BakedIntro = React.createClass({
  render:function(){
    return(

      <div id="bakedIntro">
       
       <p className = 'col-xs-offset-4 col-xs-6 '> Baked Goods </p>
       <div className="col-xs-12 col-sm-10 col-sm-offset-1">
          <img id="bakedImg" className='img-responsive' src="/assets/PecanDanish.jpg"/>
       </div>    
      </div>

      )
  }
})

module.exports = BakedIntro;