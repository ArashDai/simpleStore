var React =  require('react');


var Intro = React.createClass({
  render:function(){
    return(
      <div id="Intros" className="container-fluid">
        <br></br>
        <h2 className='text-center'>Welcome to Mayer's Bakery</h2>
        <div className="col-xs-12 col-sm-10 col-sm-offset-1 visible-xs">
          <img id="introImg" className="img-responsive" src="/assets/diningroom.jpg" />
        </div>

        <div className="hidden-xs ">
          <div className='row col-sm-offset-2 col-md-offset-3'>
              <img id="cakeImg" className="img-circle col-sm-5 col-md-2" src="/assets/sqcake1.jpg"/>
              <img id="cakeImg" className="img-circle col-sm-5 col-md-2" src="/assets/sqcake2.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2 hidden-sm" src="/assets/sqcake3.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2 hidden-sm" src="/assets/sqcake3.jpg"/>  
          </div>
          
          <div className='row col-sm-offset-2 col-md-offset-3'>
              <img id="cakeImg" className="img-circle col-sm-5 col-md-2" src="/assets/sqcake1.jpg"/>
              <img id="cakeImg" className="img-circle col-sm-5 col-md-2" src="/assets/sqcake2.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2 hidden-sm" src="/assets/sqcake3.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2 hidden-sm" src="/assets/sqcake3.jpg"/>
          </div>

          <div className='row col-md-offset-3 visible-lg'>
              <img id="cakeImg" className="img-circle col-md-2" src="/assets/sqcake1.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2" src="/assets/sqcake2.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2" src="/assets/sqcake3.jpg"/>
              <img id="cakeImg" className="img-circle col-md-2" src="/assets/sqcake3.jpg"/>
          </div>
        </div>

        <p className='row text-center' id="font"> 
          Where you're sure to find something sweet!
        </p>

      </div>

      )
  }
})


module.exports = Intro;