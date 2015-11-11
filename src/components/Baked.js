var React =  require('react');


var Baked = React.createClass({
  render:function(){
    return(
      <div id="bakedDom" className="container-fluid">
          
            <div id="cakeBlurb" className="col-xs-12 col-sm-10 col-sm-offset-1">
            Lorem ipsum dolor sit amet, mauris tincidunt tellus nisl mattis luctus, tempor nullam, et aenean congue, nullam aliquam, at ante. Vivamus suspendisse ut nec proin in et, cursus eu taciti vitae cum, facilisis nascetur libero platea vitae libero, sodales lacinia non turpis eu wisi, vestibulum aenean habitant aliquam vestibulum maecenas. Ultrices ullam metus ante, congue eos dui condimentum dui turpis in, vulputate donec ad aliquam eget massa pede. 
            </div>

            <div id="pastryButton" className="col-xs-6 col-sm-3 col-sm-offset-2 ">
                <a src="">
                  <img src="./assets/squaredcreampuff.jpg" className="col-xs-12 img-circle"/>
                </a>
                <p className='text-center'>Pastries</p>
            </div>
         
            <div id="breadButton" className="col-xs-6 col-sm-3 col-sm-push-2">
              
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