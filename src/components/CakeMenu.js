var React =  require('react');


var CakeMenu = React.createClass({
  render:function(){
    return(
      <div id='card' className='container-fluid'>
        <h1 className='text-center'>Cakes Menu</h1>
          <h3 className='text-center'>Instore Cakes</h3>

          <div id='CakeMenuItem'>
            <img className="col-sm-2 img-circle" src="./assets/CS-080.jpg"/>
            
              <h2>Sacher Torte</h2>
            
               
              <p className="col-sm-offset-2" id='MenuDesc'>
                description here
              </p>
                            

              <p className='col-sm-offset-11'>
                price here
              </p>

          </div>
          <br></br>
          <div id='CakeMenuItem'>
            <img className="col-sm-2 img-circle" src="./assets/CS-080.jpg"/>
            
            <h2>Parisian Torte</h2>

            <p className='col-sm-offset-1'>  
              description here
            </p>

            <p className='col-sm-offset-11'>price here</p>

          </div>
          <br></br>
          <div id='CakeMenuItem'>
            <img className="col-sm-2 img-circle" src="./assets/CS-080.jpg"/>
            
            <h2>Shadow Torte</h2>

            <p className='col-sm-offset-1'>  
              description here
            </p>

            <p className='col-sm-offset-11'>price here</p>

          </div>
          <br></br>
          <div id='CakeMenuItem'>
            <img className=" col-sm-2 img-circle" src="./assets/CS-080.jpg"/>
            
            <h2> Carrot Cake</h2>

            <p className='col-sm-offset-1'>  
             8in round description here
            </p>

            <p className='col-sm-offset-11'>price here</p>

          </div>
       
       
            

      </div>
      )}
  });


module.exports = CakeMenu;