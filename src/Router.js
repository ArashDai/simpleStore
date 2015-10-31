'use strict';
var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;


var routes = (

    <Route name='app' path='/' handler={require('./components/header')}>
      <DefaultRoute handler={require('./components/header')}/>
      <Route name='cakes' handler={require('./components/CakeIntro')} />
      <Route name='baked' handler={require('./components/BakedIntro')} />
      <Route name='food' handler={require('./components/FoodIntro')} />
    </Route>


  )



module.exports = routes;