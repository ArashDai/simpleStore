var React = require('react');
var WeddingImgs = require('./WeddingGalleryImages');
var BakedImgs = require('./BakedGalleryImages');
var CakeImgs = require('./CakeGalleryImages');
var FoodImgs = require('./FoodGalleryImages');

var Gallery = React.createClass({
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


module.exports = Gallery;