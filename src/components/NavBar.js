var React =  require('react');




var NavBar  =  React.createClass({
  render:function(){
    return(
      <div id='navbarDom' className="hidden-xs col-xs-12">
        <ul className="row col-xs-offset-1">
          <li><a href="">Cakes</a></li>
          <li><a href="">Pastries</a></li>
          <li><a href="">Food</a></li>
          <li><a href="">About</a></li>
        </ul>


      </div>
    )
  }
})



module.exports = NavBar;