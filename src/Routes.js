var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;


var Routes = (
    

    <Route path ="/" component={require("./components/App")}>
    
      <IndexRoute component={require("./components/MainBody")}/>

      <Route path ="gallery" component={require("./components/Gallery")} />
      <Route path ="BreadMenu" component={require("./components/BreadMenu")} />
      <Route path ="BreakfastMenu" component={require("./components/BreakfastMenu")} />
      <Route path ="CakeMenu" component={require("./components/CakeMenu")} />
      <Route path ="CakeInfoForm" component={require("./components/CakeInfoForm")} />
      <Route path ="CakeDescriptionForm" component={require("./components/CakeDescriptionForm")} />
      <Route path ="LunchMenu" component={require("./components/LunchMenu")} />
      <Route path ="PastryMenu" component={require("./components/PastryMenu")} />


    </Route>
        

    

  );


module.exports = Routes;


 //<Route path ='gallery' component ={require('./components/Gallery')} />