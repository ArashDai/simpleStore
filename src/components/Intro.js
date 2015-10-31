var React =  require('react');


var Intro = React.createClass({
  render:function(){
    return(
      <div id="introDom" className="col-sm-10 col-sm-offset-1">
        <div className="col-xs-12 col-sm-10 col-sm-offset-1">
          <img id="introImg" className="img-responsive" src="/assets/diningroom.jpg" />
        </div>

        <p className='row col-sm-10 col-sm-offset-1' id="introBlurb">  Lorem ipsum dolor sit amet, mauris tincidunt tellus nisl mattis luctus, tempor nullam, et aenean congue, nullam aliquam, at ante. Vivamus suspendisse ut nec proin in et, cursus eu taciti vitae cum, facilisis nascetur libero platea vitae libero, sodales lacinia non turpis eu wisi, vestibulum aenean habitant aliquam vestibulum maecenas. Ultrices ullam metus ante, congue eos dui condimentum dui turpis in, vulputate donec ad aliquam eget massa pede.</p>

      </div>

      )
  }
})


module.exports = Intro;