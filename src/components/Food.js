var React =  require('react');


var Food = React.createClass({
  render:function(){
    return(
      <div id="foodDom" className="container-fluid">
  
          
          
            <div id="breakfastButton" className="col-xs-6">
              <p className='col-xs-offset-4'>Breakfast</p>
                <a>
                  <img src="./assets/sandwich2.jpg" className="col-xs-12 img-circle"/>
                </a>
            </div>
         
            <div id="lunchButton" className="col-xs-6">
              <p className='col-xs-offset-4'>Lunch</p>
                <a>
                  <img src="./assets/sandwich2.jpg" className="col-xs-12 img-circle"/>
                </a>
            </div>
          <br></br>



      </div>

      )
  }
})


module.exports = Food; 