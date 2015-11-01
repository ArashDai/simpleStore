var React = require('react');
var ReactDom = require('react-dom');
var Header = require('./components/Header');
var MainBody = require('./components/MainBody');
var Footer = require('./components/Footer');
var Router = require('react-router');
var Link = Router.Link;
var Route = Router.Route;
var Routes = require('./Router.js')

var App = React.createClass({
  render:function(){
    return(

      <div>
      
        
          <Header/>
           
        <br></br>   
      
          <MainBody/>
        
        <br></br>
      
          <Footer/>
      
      {this.props.children}
      </div>
      )
  }
});


ReactDom.render(<App/>, document.getElementById('main'));