var React =  require('react');
var Link = require('react-router').Link;

var CakeDescriptionForm = require('./CakeDescriptionForm');

 var fieldValues = {
      date:null,
      time:null,
      eventType:null,
      servings:null,
      cakeType:null,
      fillingType:null,
      frostingType:null,
      decoration:null 
  }



var CakeInfoForm = React.createClass({

saveValues: function(fields) {
    return function() {
      fieldValues = Object.assign({}, fieldValues, fields)

    }
},  


render:function(){
    return(
      <div id='card' className='container-fluid'>
        <h1 className='text-center'>Custom Cake Creator</h1>
        <p className='text-center'>The perfect cake awaits</p>

        <form className='col-xs-12'>
          
            <label>Pickup date and time:</label> 
                  <input type='datetime-local' ref='dateTime' />


            <br></br>      
            <label>Event Type:</label>
                  <select ref="eventType" selected={fieldValues.eventType}>
                    <option value="null"></option>
                    <option value="anniversary">Anniversary</option>
                    <option value="birthday">Birthday</option>
                    <option value="graduation">Graduation</option>
                    <option value="wedding">Wedding</option>
                    <option value="other">Other</option>
                  </select>

            <br></br> 
            <label>Serving Size:</label>
              <select ref="servingSize" selected={fieldValues.servingSize}>
                    <option value="null"></option>
                    <option value="10">10-20</option>
                    <option value="20">20-30</option>
                    <option value="30">30-40</option>
                    <option value="40">40-50</option>
                    <option value="50">50-60</option>
              </select>

            <br></br> 
            <label>Cake Shape</label>
              <select ref="cakeShape" selected={fieldValues.cakeShape}>
                    <option value="null"></option>
                    <option value="sheet">Sheet Cake</option>
                    <option value="round">Round Cake</option>
              </select>
            
            <br></br> 
            <label>Cake Type</label>
              <select ref="cakeType" selected={fieldValues.cakeType}>
                    <option value="null"></option>
                    <option value="chocolate">Chocolate Cake</option>
                    <option value="white">Classic Ivory Cake</option>
                    <option value="banana">Banana Cake*</option>
                    <option value="spice">Spice Cake*</option>
                    <option value="marble">Marble Cake*</option>
                    <option value="carrot">Carrot Cake*</option>
              </select>
          
            <br></br> 
            <label>Filling</label>
                <select ref="filling" selected={fieldValues.filling}>
                  <option value="null"></option>
                  <option value="chocolateBC">Chocolate Buttercream</option>
                  <option value="vanillaBC">Vanilla Buttercream</option>
                  <option value="mochaBC">Mocha Buttercream</option>
                  <option value="frenchBC">French Buttercream</option>   
                  <option value="raspberry">Raspberry</option>  
                  <option value="strawberryWc">Fresh Strawberries & Whipped Cream *</option>
                  <option value="bananaWc">Fresh Bananas & Whipped Cream *</option>
                  <option value="chocolateMo">Chocolate Mousse *</option>    
                </select>
          

          <br></br> 
          <label>Frosting</label>
                <select ref="frosting" selected={fieldValues.frosting}>
                  <option value="null"></option>
                  <option value="chocolateBC">Chocolate Buttercream</option>
                  <option value="vanillaBC">Vanilla Buttercream</option>
                  <option value="mochaBC">Mocha Buttercream</option>
                  <option value="frenchBC">French Buttercream</option> 
                  <option value="chocolateMo">Chocolate Mousse*</option>
                  <option value="whippedCr">Whipped Cream*</option>
                </select>

          <br></br> 
          <label>Decoration</label>
                <select ref="decoration" selected={fieldValues.decoration}>
                    <option value="null"></option>
                    <option value="floral">Floral Design</option>
                    <option value="streamers">Confetti and Streamers</option>
                    <option value="photo">Photo Cake</option>
                    <option value="airbrush">Airbrush Design</option>
                    <option value="piped">Piped Frosting Design</option>
                    <option value="custom">Other Custom Design</option>
                </select>
            
          <br></br>     
          <button onClick={this.saveAndContinue}>Save and Continue</button>

        </form>
      </div>
)},
  
saveAndCountinue:function(e){
    e.preventDefault()

    var data = { 
      date        : this.refs.name.getDOMNode().value,
      time        : this.refs.name.getDOMNode().value,
      eventType   : this.refs.name.getDOMNode().value,
      servings    : this.refs.name.getDOMNode().value,
      cakeType    : this.refs.name.getDOMNode().value,
      fillingType : this.refs.name.getDOMNode().value,
      frostingType: this.refs.name.getDOMNode().value,
      decoration  : this.refs.name.getDOMNode().value
    }


    this.props.saveValues(data)
    this.props.nextStep()


  }

});



module.exports = CakeInfoForm;
