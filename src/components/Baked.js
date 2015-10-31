var React =  require('react');


var Baked = React.createClass({
  render:function(){
    return(
      <div id="bakedDom" className="container-fluid">
          
            <div id="pastryButton" className="col-xs-6 col-sm-3 col-sm-offset-3">
                <a src="">
                  <img src="./assets/squaredcreampuff.jpg" className="col-xs-12 img-circle"/>
                </a>
                <p className='text-center'>Pastries</p>
            </div>
         
            <div id="breadButton" className="col-xs-6 col-sm-3">
              
                <a src="">
                  <img src="./assets/squaredbread.jpg" className="col-xs-12 img-circle"/>
                </a>
                <p className='text-center' >Breads</p>  
            </div>
          
      </div>

      )
  }
})


module.exports = Baked;