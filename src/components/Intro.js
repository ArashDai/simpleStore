var React =  require('react');


var Intro = React.createClass({
  render:function(){
    return(
      <div id="introDom" class="container-fluid">
        <div class="jumbotron">
          <div class="container">
            <img id="introImg" className="col-xs-12 col-md-6" src="/assets/diningroom.jpg" />
          </div>
        </div>




      </div>

      )
  }
})


module.exports = Intro;