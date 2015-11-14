var React =  require('react');
var Link = require('react-router').Link;

var Cakes = React.createClass({
  render:function(){
    return(
      <div id="card" className="container-fluid ">
            
        <a className="btn btn-default col-sm-4 col-sm-offset-4 visible-xs visible-sm" href="#" role="button">
          Cake Menu
        </a>

        <div>

          <div id="cakeBlurb" className="col-xs-12 col-sm-10 col-sm-offset-1 ">
          <p className='text-center'>
          Here at Mayers Bakery we offer a wide variety of cakes for all occasions, from weddings and anniversaries to birthdays
           <br/> 
           To see our avalible in store tortes as well as customised cakes click the link above. 
          </p>
          </div>

        </div>
        
      


      </div>

      )
  }
})


module.exports = Cakes;