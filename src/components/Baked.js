var React =  require('react');


var Baked = React.createClass({
  render:function(){
    return(
      <div id="bakedDom" className="container-fluid">

        
          
            <div id="pastryButton" className="col-xs-6 col-sm-3">
              <p className='col-xs-offset-4'>Pastries</p>
                <a src="">
                  <img src="./assets/squaredcreampuff.jpg" className="col-xs-12 img-circle"/>
                </a>
            </div>
         
            <div id="breadButton" className="col-xs-6 col-sm-3">
              <p className='col-xs-offset-4'>Breads</p>
                <a src="">
                  <img src="./assets/squaredbread.jpg" className="col-xs-12 img-circle"/>
                </a>  
            </div>
          
      </div>

      )
  }
})


module.exports = Baked;