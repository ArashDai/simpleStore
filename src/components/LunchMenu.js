var React =  require('react');


var LunchMenu = React.createClass({
  render:function(){
    return(
      <div id='card' className='container-fluid'>
        <div className="col-xs-12">

          <h3 className='text-center'>Sandwiches</h3>
            <div className="col-xs-12">
                <div id='lunchMenuItem'className='col-sm-offset-1 col-sm-5'>
                 <h4>Italian Combo</h4> 
                 <p>Black Forest Ham, Genoa Salami, Mortadella, Provolone Cheese, Black Olives, Chopped Pepperoncini, Lettuce, Tomato and Italian dressing on white or Wheat Roll.</p>
                 <p>price</p>
                </div>
                
                <div id='lunchMenuItem'className='col-sm-offset-1 col-sm-5'>
                 <h4>Tuna</h4> 
                 <p>White Meat Tuna, Cheddar Cheese, and Tomato & Mayonnaise on choice of Bread.</p>
                 <p>price</p>
                </div>
                <br></br>
            </div> 
            <div className="col-xs-12">  
                <div id='lunchMenuItem'className='col-sm-offset-1 col-sm-5'>
                 <h4>Ham and Turkey</h4> 
                 <p>Black Forest Ham, Oven Gold Turkey, Smoked Gruyere Cheese, Lettuce, Mayonnaise, Spicy Mustard on White or Wheat Roll.</p>
                 <p>price</p>
                </div>
                
                <div id='lunchMenuItem'className='col-sm-offset-1 col-sm-5'>
                 <h4>Vegetarian</h4> 
                 <p>Cheddar cheese, Swiss cheese, Avocado, Onion, Lettuce, Tomato, Olives, Pepperoncini, Mustard, mayonnaise on White or Wheat Roll.</p>
                 <p>price</p>
                </div>
                

            </div>
          <h3 className='text-center'>Paninis</h3>     
            <div className="col-xs-12">
                <div id='lunchMenuItem'className='col-sm-offset-1 col-sm-5'>
                 <h4>Times Square</h4> 
                 <p>Cracked Pepper Turkey, Bacon, Swiss cheese, With 1000 island dressing on Panini Bread</p>
                 <p>price</p>
                </div>
                <div id='lunchMenuItem'className='col-sm-offset-1 col-sm-5'>
                 <h4>Wild West</h4> 
                 <p>Hot Roasted Beef, Cheddar Cheese, Sliced Onions, Smothered in BBQ on Panini Bread</p>
                 <p>price</p>
                </div>    
                <div id='lunchMenuItem'className='col-sm-offset-1 col-sm-5'>
                 <h4>Hot Pastrami</h4> 
                 <p>New York Pastrami Brisket with Melted Swiss cheese and Spicy Mustard on Panini Bread</p>
                 <p>price</p>
                </div>

            </div>
          <h3 className='text-center'>Salads</h3>  
            <p className='text-center col-sm-offset-3 col-sm-6'>All Salads Include: Baby Lettuce, Romaine Lettuce, Baby Escarole, Onions, Black Olives, Green Stuffed Olives, Pepperoncini Crouton, Artichoke Hearts, Sun Dried Tomatoes, and Dressing.<br></br> Salad Dressings:Italian, Ranch, 1000 Island, Vinagarette
            </p>

            <div className="col-xs-12">
              <div id='lunchMenuItem'className='col-sm-offset-1 col-sm-5'>
                 <h4>Times Square Salad</h4> 
                 <p>Cracked Pepper Turkey, Bacon, Swiss Cheese</p>
                 <p>price</p>
              </div>
              <div id='lunchMenuItem'className='col-sm-offset-1 col-sm-5'>
                 <h4>Wild West Salad</h4> 
                 <p>Roast Beef, Cheddar Cheese</p>
                 <p>price</p>
              </div>
              <div id='lunchMenuItem'className='col-sm-offset-1 col-sm-5'>
                 <h4>Pastrami Salad</h4> 
                 <p>Pastrami, Swiss Cheese</p>
                 <p>price</p>
              </div>
              <div id='lunchMenuItem'className='col-sm-offset-1 col-sm-5'>
                 <h4>Italian Combo Salad</h4> 
                 <p>Black Forest Ham, Genoa, Mortadella, Provolone Cheese</p>
                 <p>price</p>
              </div>
              <div id='lunchMenuItem'className='col-sm-offset-1 col-sm-5'>
                 <h4>Ham & Turkey Salad</h4> 
                 <p>Black Forest Ham, Oven Gold Turkey, Smoked Gruyere Cheese</p>
                 <p>price</p>
              </div>
              <div id='lunchMenuItem'className='col-sm-offset-1 col-sm-5'>
                 <h4>Tuna Salad</h4> 
                 <p>White meat Tuna, Cheddar Cheese</p>
                 <p>price</p>
              </div>
              <div id='lunchMenuItem'className='col-sm-offset-1 col-sm-5'>
                 <h4>Vegetarian Salad</h4> 
                 <p>Cheddar Cheese, Swiss Cheese, Avocado</p>
                 <p>price</p>
              </div>




            </div>


       
        </div>
      </div>
      )}
  });


module.exports = LunchMenu;