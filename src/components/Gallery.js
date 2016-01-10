var React = require('react');
var Link = require('react-router').Link;

var WeddingImgs = require('./WeddingGalleryImages');
var BakedImgs = require('./BakedGalleryImages');
var CakeImgs = require('./CakeGalleryImages');
var FoodImgs = require('./FoodGalleryImages');

var Gallery = React.createClass({
  render:function(){
    return(
      <div>
    
        <h2>Gallery</h2>

        <div class="navbar">
          <a class="navbar-brand" href="#">Title</a>
          <ul class="nav navbar-nav">
            <li class="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>




      </div>
      )}
    });


module.exports = Gallery;