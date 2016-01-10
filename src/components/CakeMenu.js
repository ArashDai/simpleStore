var React =  require('react');
var Link = require('react-router').Link;


var CakeMenu = React.createClass({
  render:function(){
    window.scrollTo(0, 0);
    
    return(
      <div id='card' className='container-fluid'>
        <h1 className='text-center'>Cakes Menu</h1>



        <p className='text-center'> an image will go here </p>
        <p className='text-center'>a description of cake services will go here</p>

        <p className='text-center'>a link to custom cake form here</p>

        <p className='text-center'>Want to see more? checkout our gallery!</p> 
        <p className='text-center'> link goes here </p>
        



          <h3 className='text-center'>In-Store Cakes</h3>

          <p className='text-center'>
            A variety of these cakes are always avalible in the bakery
          </p>

        
          <div id='CakeMenuItem' className=" col-md-6" >

              <h2>Sacher Torte</h2>

              <img className="hidden-xs col-xs-6 col-sm-2 col-md-3 img-circle" src="./assets/CS-080.jpg"/>
            
              <p>
               8 inch round
              </p>
               
              <p className="col-sm-offset-2" id='MenuDesc'>
                Layers of chocolate cake, filled with raspberry ,and chocolate mousse, coated with dark chocolate ganache
              </p>
                            

              <p className='col-xs-offset-8 col-sm-offset-11'>
                price here
              </p>

          </div>
            
          <div id='CakeMenuItem' className="col-md-6">
            
            <h2>Parisian Torte</h2>

            <img className="hidden-xs col-xs-6 col-sm-2 col-md-3 img-circle" src="./assets/CS-080.jpg"/>
            
            <p>
              8 inch round
            </p>

            <p className='col-sm-offset-2' id='MenuDesc'>  
              Layers of white cake with raspberry and bavarian cream filling, coated with white chocolate ganache 
            </p>

            <p className='col-xs-offset-8 col-sm-offset-11'>price here</p>

          </div>
        
           
          <div id='CakeMenuItem' className="col-md-6">
            
            <h2>Shadow Torte</h2>

            <img className="hidden-xs col-xs-6 col-sm-2 col-md-3 img-circle" src="./assets/CS-080.jpg"/>

            <p>
              8 inch round
            </p>

            <p className=' col-sm-offset-2' id='MenuDesc'>  
              Half white cake, half chocolate with fudge filling, frosted with vanilla buttercream with chocolate ganache dripping down the sides
            </p>

            <p className='col-xs-offset-8 col-sm-offset-11'>price here</p>

          </div>
            
          <div id='CakeMenuItem' className="col-md-6">
            
            <h2> Carrot Cake</h2>

            <img className="hidden-xs col-xs-6 col-sm-2 col-md-3 img-circle" src="./assets/CS-080.jpg"/>

            <p>
              8 inch round
            </p>

            <p className='col-sm-offset-2' id='MenuDesc'>  
             Bacon ipsum dolor amet brisket tongue pastrami, jerky pork shank turducken t-bone turkey leberkas. Meatloaf frankfurter tri-tip turducken salami, flank shoulder sausage cupim meatball.
            </p>

            <p className='col-xs-offset-8 col-sm-offset-11'>price here</p>

          </div>
            
          <div id='CakeMenuItem' className="col-md-6">
            
            <h2>Fudge Torte</h2>

            <img className="hidden-xs col-xs-6 col-sm-2 col-md-3 img-circle" src="./assets/CS-080.jpg"/>

            <p>
              8 inch round
            </p>

            <p className='col-sm-offset-2' id='MenuDesc'>  
              Bacon ipsum dolor amet brisket tongue pastrami, jerky pork shank turducken t-bone turkey leberkas. Meatloaf frankfurter tri-tip turducken salami, flank shoulder sausage cupim meatball.
            </p>

            <p className='col-xs-offset-8 col-sm-offset-11'>price here</p>

          </div>
            
          <div id='CakeMenuItem' className="col-md-6">
            
            <h2> Rev Velvet Cake</h2>

            <img className="hidden-xs col-xs-6 col-sm-2 col-md-3 img-circle" src="./assets/CS-080.jpg"/>

            <p>
              8 inch round
            </p>

            <p className=' col-sm-offset-2' id='MenuDesc'>  
              Bacon ipsum dolor amet brisket tongue pastrami, jerky pork shank turducken t-bone turkey leberkas. Meatloaf frankfurter tri-tip turducken salami, flank shoulder sausage cupim meatball.
            </p>

            <p className='col-xs-offset-8 col-sm-offset-11'>price here</p>

          </div>
            
          <div id='CakeMenuItem' className="col-md-6">
            
            <h2> Bannana Cake</h2>

            <img className="hidden-xs col-xs-6 col-sm-2 col-md-3 img-circle" src="./assets/CS-080.jpg"/>

            <p>
              8 inch round
            </p>

            <p className='col-sm-offset-2' id='MenuDesc'>  
              Bacon ipsum dolor amet brisket tongue pastrami, jerky pork shank turducken t-bone turkey leberkas. Meatloaf frankfurter tri-tip turducken salami, flank shoulder sausage cupim meatball.
            </p>

            <p className='col-xs-offset-8 col-sm-offset-11'>price here</p>

          </div>
            
          <div id='CakeMenuItem' className="col-md-6">

            <h2> German Chocolate Cake</h2>

            <img className="hidden-xs col-xs-6 col-sm-2 col-md-3 img-circle" src="./assets/CS-080.jpg"/>

            <p>
              8 inch round
            </p>

            <p className='col-sm-offset-2' id='MenuDesc'>  
              Bacon ipsum dolor amet brisket tongue pastrami, jerky pork shank turducken t-bone turkey leberkas. Meatloaf frankfurter tri-tip turducken salami, flank shoulder sausage cupim meatball.
            </p>

            <p className='col-xs-offset-8 col-sm-offset-11'>price here</p>

          </div>
            
          <div id='CakeMenuItem' className="col-md-6">
            
            <h2> Confetti Birthday Cake</h2>

            <img className="hidden-xs col-xs-6 col-sm-2 col-md-3 img-circle" src="./assets/CS-080.jpg"/>

            <p>
              8 inch round
            </p>

            <p className='col-sm-offset-2' id='MenuDesc'>  
              Bacon ipsum dolor amet brisket tongue pastrami, jerky pork shank turducken t-bone turkey leberkas. Meatloaf frankfurter tri-tip turducken salami, flank shoulder sausage cupim meatball.
            </p>

            <p className='col-xs-offset-8 col-sm-offset-11'>price here</p>

          </div>
            
          <div id='CakeMenuItem' className="col-md-6">
 
            <h2> Cheesecake </h2>

            <img className="hidden-xs col-xs-6 col-sm-2 col-md-3 img-circle" src="./assets/CS-080.jpg"/>

            <p>
              8 inch round
            </p>

            <p className='col-sm-offset-2' id='MenuDesc'>  
              Bacon ipsum dolor amet brisket tongue pastrami, jerky pork shank turducken t-bone turkey leberkas. Meatloaf frankfurter tri-tip turducken salami, flank shoulder sausage cupim meatball.
            </p>

            <p className='col-xs-offset-8 col-sm-offset-11'>price here</p>

          </div>
            
          <div id='CakeMenuItem' className="col-md-6">

            <h2> Chocolate Chip Cheesecake</h2>

            <img className="hidden-xs col-xs-6 col-sm-2 col-md-3 img-circle" src="./assets/CS-080.jpg"/>

            <p>
              8 inch round
            </p>

            <p className='col-sm-offset-2' id='MenuDesc'>  
              Bacon ipsum dolor amet brisket tongue pastrami, jerky pork shank turducken t-bone turkey leberkas. Meatloaf frankfurter tri-tip turducken salami, flank shoulder sausage cupim meatball.
            </p>

            <p className='col-xs-offset-8 col-sm-offset-11'>price here</p>

          </div>
            
          <div id='CakeMenuItem' className="col-md-6">

            <h2> Strawberry Cheesecake</h2>

            <img className="hidden-xs col-xs-6 col-sm-2 col-md-3 img-circle" src="./assets/CS-080.jpg"/>

            <p>
              8 inch round
            </p>

            <p className='col-sm-offset-2' id='MenuDesc'>  
              Bacon ipsum dolor amet brisket tongue pastrami, jerky pork shank turducken t-bone turkey leberkas. Meatloaf frankfurter tri-tip turducken salami, flank shoulder sausage cupim meatball.
            </p>

            <p className='col-xs-offset-8 col-sm-offset-11'>price here</p>

          </div>
            
          <div id='CakeMenuItem' className="col-md-6">

            <h2> Strawberry Boston Torte</h2>

            <img className="hidden-xs col-xs-6 col-sm-2 col-md-3 img-circle" src="./assets/CS-080.jpg"/>

            <p>
              8 inch round
            </p>

            <p className='col-sm-offset-2' id='MenuDesc'>  
              Bacon ipsum dolor amet brisket tongue pastrami, jerky pork shank turducken t-bone turkey leberkas. Meatloaf frankfurter tri-tip turducken salami, flank shoulder sausage cupim meatball.
            </p>

            <p className='col-xs-offset-8 col-sm-offset-11'>price here</p>

          </div>
            
          <div id='CakeMenuItem' className="col-md-6">

            <h2> Blackforest Cake</h2>

            <img className="hidden-xs col-xs-6 col-sm-2 col-md-3 img-circle" src="./assets/CS-080.jpg"/>

            <p>
              8 inch round
            </p>

            <p className='col-sm-offset-2' id='MenuDesc'>  
              Bacon ipsum dolor amet brisket tongue pastrami, jerky pork shank turducken t-bone turkey leberkas. Meatloaf frankfurter tri-tip turducken salami, flank shoulder sausage cupim meatball.
            </p>

            <p className='col-xs-offset-8 col-sm-offset-11'>price here</p>

          </div>
            
          <div id='CakeMenuItem' className="col-md-6">

            <h2> Carrot Cake</h2>

            <img className="hidden-xs col-xs-6 col-sm-2 col-md-3 img-circle" src="./assets/CS-080.jpg"/>

            <p>
              8 inch round
            </p>

            <p className='col-sm-offset-2' id='MenuDesc'>  
              Bacon ipsum dolor amet brisket tongue pastrami, jerky pork shank turducken t-bone turkey leberkas. Meatloaf frankfurter tri-tip turducken salami, flank shoulder sausage cupim meatball.
            </p>

            <p className='col-xs-offset-8 col-sm-offset-11'>price here</p>

          </div>
       
       
          <br></br>
          <p>Not finding what youre looking for? Lets make something special for you  </p>

      </div>
      )}
  });


module.exports = CakeMenu;