var React =  require('react');


var Info = React.createClass({
  render:function(){
    return(
      <div id="infoDom" className="container-fluid">
        <p className='col-xs-offset-4 col-xs-6'> About Us </p>
        
        <div>
          <p className='col-xs-offset-4 col-xs-6'> blurb</p>
          <p className='col-xs-offset-4 col-xs-6'> Store Info </p>
        </div>      
      </div>

      )
  }
})


module.exports = Info;