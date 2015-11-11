var React =  require('react');


var Menu = React.createClass({
  render:function(){
    return(
      <div>
        <h1>Menu</h1>

        <div id='foodmenu'>
        <table>
        <tr>
        <td></td>
        </tr>
        </table>
        </div>

        <div id='bakedmenu'>
        <table></table>
        </div>

        <div id='cakemenu'>
        <table></table>
        </div>
      </div>
      )}
  });


module.exports = Menu;