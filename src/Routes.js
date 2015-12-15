var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;




var Routes = (
    
  
    <Route path ="/" component={require("./components/App")}>
    
      <IndexRoute component={require("./components/MainBody")}/>

      <Route path="/gallery" component={require("./components/Gallery")} />
      <Route path="/breadmenu" component={require("./components/BreadMenu")} />
      <Route path="/breakfastmenu" component={require("./components/BreakfastMenu")} />
      <Route path="/cakemenu" component={require("./components/CakeMenu")} />
      <Route path="/lunchmenu" component={require("./components/LunchMenu")} />
      <Route path="/pastrymenu" component={require("./components/PastryMenu")} />
      
      <Route path='/customcakeform' component={require("./components/CustomCakeForm")} >
        <IndexRoute component={require("./components/CustomCakeInfoForm")} />

        <Route path="/customcakedescriptionform" component={require("./components/CustomCakeDescriptionForm")} />
        <Route path="/customcakeconfirmationone" component={require("./components/CustomCakeConfirmationOne")} />
        <Route path="/customcakeuserinfo" component={require("./components/CustomCakeUserInfo")} />

      </Route>  


    </Route>

);


module.exports = Routes;


 