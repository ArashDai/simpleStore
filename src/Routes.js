var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;


var Routes = (
    

      <Route path ="/" component={require("./components/App")}>
      
        <IndexRoute component={require("./components/MainBody")}/>

        <Route path ="gallery" component={require("./components/Gallery")} />

      </Route>
        

    

  );


module.exports = Routes;


 //<Route path ='gallery' component ={require('./components/Gallery')} />