var React =  require('react');


var Intro = React.createClass({
  render:function(){
    return(
      <div id="introDom" className="col-sm-8 col-sm-offset-2">
       
        <img id="introImg" className="row col-xs-12 col-sm-8" src="/assets/diningroom.jpg" />
        
        <p className='row col-sm-8'>  Lorem ipsum dolor sit amet, mauris tincidunt tellus nisl mattis luctus, tempor nullam, et aenean congue, nullam aliquam, at ante. Vivamus suspendisse ut nec proin in et, cursus eu taciti vitae cum, facilisis nascetur libero platea vitae libero, sodales lacinia non turpis eu wisi, vestibulum aenean habitant aliquam vestibulum maecenas. Ultrices ullam metus ante, congue eos dui condimentum dui turpis in, vulputate donec ad aliquam eget massa pede.</p>

      </div>

      )
  }
})


module.exports = Intro;