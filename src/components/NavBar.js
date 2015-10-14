var React =  require('react');




var NavBar  =  React.createClass({
  render:function(){
    return(
      <div id='navbarDom'>
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