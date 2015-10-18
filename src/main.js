var React = require('react');
var ReactDom = require('react-dom');
var Header = require('./components/Header');
var MainBody = require('./components/MainBody');
var Footer = require('./components/Footer');


var App = React.createClass({
  render:function(){
    return(

      <div>
      
        <div>
          <Header/>
        </div>    
        <br></br>   
        <div>
          <MainBody/>
        </div>
        <br></br>
        <div>
          <Footer/>
        </div>

      </div>
      )
  }
});


ReactDom.render(<App/>, document.getElementById('main'));