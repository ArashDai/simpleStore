var React = require('react');


var BakedIntro = React.createClass({
  render:function(){
    return(

      <div id="bakedIntro">
       <p className = 'col-xs-offset-4 col-xs-6'> Baked Goods </p>
       <img id="bakedImg" className="col-xs-12" src="/assets/PecanDanish.jpg"/>
    
      </div>

      )
  }
})

module.exports = BakedIntro;