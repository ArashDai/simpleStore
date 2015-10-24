var React =  require('react');


var Baked = React.createClass({
  render:function(){
    return(
      <div id="bakedDom" className="container-fluid">

        
          
            <div id="pastryButton" className="col-xs-6 col-sm-3 col-sm-offset-3">
              <p className='col-xs-offset-4 col-sm-offset-5'>Pastries</p>
                <a src="">
                  <img src="./assets/squaredcreampuff.jpg" className="col-xs-12 img-circle"/>
                </a>
            </div>
         
            <div id="breadButton" className="col-xs-6 col-sm-3">
              <p className='col-xs-offset-4 col-sm-offset-5' >Breads</p>
                <a src="">
                  <img src="./assets/squaredbread.jpg" className="col-xs-12 img-circle"/>
                </a>  
            </div>
          
      </div>

      )
  }
})


module.exports = Baked;