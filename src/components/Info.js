var React =  require('react');


var Info = React.createClass({
  render:function(){
    return(
      <div id="infoDom" className="container-fluid">
        <p className='text-center'> About Us </p>
        
    <p className='col-sm-offset-1 col-xs-4'>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
     </p>

    <div className='col-sm-offset-3 col-xs-4' >

        <table> 
            <tr>
                <td></td>
                <td>Hours</td>
                <td></td>
            </tr>
            <tr> 
                <td>Weekdays</td>
                <td></td>
                <td>7:00-5:30</td>
            </tr>
            <tr>
                <td>Saturday</td>
                <td></td>
                <td>7:00-5:00</td>
            </tr>
            <tr>
                <td>Sunday</td>
                <td></td>
                <td>8:00-2:00</td>
            </tr>
        </table>    
      </div>

              
    </div>

    )
  }
})


module.exports = Info;