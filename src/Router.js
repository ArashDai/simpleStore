'use strict';
var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = require('react-router').RouteHandler; 

var routes = (

    <Route name='main' path='/' handler={require('./main.js')}>
      <DefaultRoute handler={require('./components/homePage')}/>
      <Route name='cakes' handler={require('./components/CakeIntro.js')}/>
      <Route name='baked' handler={require('./components/BakedIntro.js')}/>
      <Route name='food' handler={require('./components/FoodIntro.js')}/>
      <Route name='footer' handler={require('./components/Footer.js')}/>
    </Route>


  )



module.exports = routes;