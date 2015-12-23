var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;
var NavBar = require('./NavBar');
var Footer = require('./Footer');


var App = React.createClass({
  render:function(){
    return(

      <div className='container-fluid'>

          <NavBar/>  

          <div className='container-fluid'>
            {this.props.children}
          </div>
           <br></br>
          <Footer/>
          
      </div>
      
      )
  }
});


module.exports = App;

