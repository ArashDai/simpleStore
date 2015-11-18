var React = require('react');
var ReactDom = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var createBrowserHistory = require('history/lib/createBrowserHistory');
var history = createBrowserHistory();

var Header = require('./components/Header');
var MainBody = require('./components/MainBody');
var Footer = require('./components/Footer');
var Routes = require('./Routes.js');


ReactDom.render(<Router history={history} routes={Routes} />,document.getElementById('main'));



//history={history} removed because it broke routing,
//but now there is gibberish in url 