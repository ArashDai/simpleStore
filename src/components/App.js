var React = require('react');

//var { Router, Route, IndexRoute, Link } = require('react-router');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;
var Header = require('./Header');
var Footer = require('./Footer');


var App = React.createClass({
  render:function(){
    return(

      <div>

          <Header/>  

          <div className='container-fluid'>
            {this.props.children}
            {React.cloneElement(this.props.children)}
          </div>

          <Footer/>
          

      </div>
      
      )
  }
});


module.exports = App;


// {this.props.children}
// {React.cloneElement(this.props.children)}