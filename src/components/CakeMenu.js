var React =  require('react');


var CakeMenu = React.createClass({
  render:function(){
    return(
      <div>
        <h1>Cakes Menu</h1>

        <div id='Cakemenu'>
          <h1>Sandwiches</h1>
            <ul>
               <li>
                    <h3>Sandwich......</h3>

                    <p className='foodDesc'>
                    menu item description
                    </p>
               </li>
               <li>
                    <h3>Sandwich......</h3>

                    <p className='foodDesc'>
                    menu item description
                    </p>
               </li>
               <li>
                    <h3>Sandwich......</h3>

                    <p className='foodDesc'>
                    menu item description
                    </p>
               </li>
               <li>
                    <h3>Sandwich......</h3>

                    <p className='foodDesc'>
                    menu item description
                    </p>
               </li>
            </ul>

          <h1>Salads</h1>
            <ul>
              <li>
                    <h3>Salads......</h3>

                    <p className='foodDesc'>
                    menu item description
                    </p>
               </li>
               <li>
                    <h3>Salads......</h3>

                    <p className='foodDesc'>
                    menu item description
                    </p>
               </li>
            </ul>

          <h1>Soup</h1>
            <ul>
               <li>
                    <h3>Soup......</h3>

                    <p className='foodDesc'>
                    menu item description
                    </p>
               </li>
               <li>
                    <h3>Soup......</h3>

                    <p className='foodDesc'>
                    menu item description
                    </p>
               </li>
            </ul>
        </div>

        <div id='bakedmenu'>
          <h1>Danishes</h1>
            <ul>
               <li>
                    <h3>Danish......</h3>

                    <p className='foodDesc'>
                    menu item description
                    </p>
               </li>
               <li>
                    <h3>Danish......</h3>

                    <p className='foodDesc'>
                    menu item description
                    </p>
               </li>
               <li>
                    <h3>Danish......</h3>

                    <p className='foodDesc'>
                    menu item description
                    </p>
               </li>
            </ul>

          <h1>Pastries</h1>
            <ul>
               <li>
                    <h3>Pastry......</h3>

                    <p className='foodDesc'>
                    menu item description
                    </p>
               </li>
               <li>
                    <h3>Pastry......</h3>

                    <p className='foodDesc'>
                    menu item description
                    </p>
               </li>
               <li>
                    <h3>Pastry......</h3>

                    <p className='foodDesc'>
                    menu item description
                    </p>
               </li>
               <li>
                    <h3>Pastry......</h3>

                    <p className='foodDesc'>
                    menu item description
                    </p>
               </li>
            </ul>
        </div>

        <div id='cakemenu'>
          <h1>Instore Cakes</h1>
            <ul>
                <li>
                    <h3>Cake......</h3>

                    <p className='foodDesc'>
                    menu item description
                    </p>
               </li>
               <li>
                    <h3>Cake......</h3>

                    <p className='foodDesc'>
                    menu item description
                    </p>
               </li>
               <li>
                    <h3>Cake......</h3>

                    <p className='foodDesc'>
                    menu item description
                    </p>
               </li>
               <li>
                    <h3>Cake......</h3>

                    <p className='foodDesc'>
                    menu item description
                    </p>
               </li>
            </ul>
        </div>


      </div>
      )}
  });


module.exports = CakeMenu;