var React =  require('react');




var NavBar  =  React.createClass({
  render:function(){
    return(
      <div id='navbarDom' className="col-xs-12">
        <ul>
          <li><a href="">Cakes</a></li>
          <li><a href="">Baked Goods</a></li>
          <li><a href="">Food</a></li>
          <li><a href="">About</a></li>
        </ul>
      </div>
    )
  }
})



module.exports = NavBar;