var React = require('react');
var WeddingImgs = require('./WeddingImgs');
var BakedImgs = require('./BakedImgs');
var CakeImgs = require('./CakeImgs');
var FoodImgs = require('./FoodImgs');

var App = React.createClass({
  render:function(){
    return(
      <div>
          <WeddingImgs/>
          <BakedImgs/>
          <CakeImgs/>
          <FoodImgs/>
      </div>
      )}
    });