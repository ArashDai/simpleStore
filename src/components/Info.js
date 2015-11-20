var React =  require('react');
var Link = require('react-router').Link;

var Info = React.createClass({
  render:function(){
    return(
      <div id="infoDom" className="container-fluid">
        <p className='text-center'> About Us </p>
        
    <p className='col-sm-offset-1 col-xs-4'>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
     </p>

    <div className='col-sm-offset-3 col-xs-12 col-sm-4' >

       
          
            <div>
                
                <h4 className='text-center'>Hours</h4>
                
            </div>

            <div className ='row text-center'> 
                <p className ='col-xs-5'>Weekdays</p>
                
                <p className ='col-xs-7'>7:00-5:30</p>
            </div>

            <div className ='row text-center'>
                <p className ='col-xs-5'>Saturday</p>
                
                <p className ='col-xs-7'>7:00-5:00</p>
            </div>

            <div className ='row text-center'>
                <p className ='col-xs-5'>Sunday</p>
                
                <p className ='col-xs-7'>8:00-2:00</p>
            </div>
          
          
      </div>

              
    </div>

    )
  }
})


module.exports = Info;