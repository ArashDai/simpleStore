var React =  require('react');
var Link = require('react-router').Link;



var CakeInfoForm = React.createClass({

  getInitialState:function(){
      return{
        dateTime:'',
        eventType:'',
        servings:'',
        cakeShape:'',
        cakeType:'',
        fillingType:'',
        frostingType:'',
        decoration:'' 
      }
  }, 

  saveAndContinue:function(e){
    
      var data = { 
        dateTime    : e.target.form[0].value,
        eventType   : e.target.form[1].value,
        servings    : e.target.form[2].value,
        cakeShape   : e.target.form[3].value,
        cakeType    : e.target.form[4].value,
        fillingType : e.target.form[5].value,
        frostingType: e.target.form[6].value,
        decoration  : e.target.form[7].value
      }

      this.props.saveValues(data);   

  },   


  render:function(){
      return(
        <div id='card' className='container-fluid'>

          <form className='col-xs-12'>
            
              <label>Pickup date and time:</label> 
                    <input type='datetime-local' ref='dateTime' />


              <br></br>      
              <label>Event Type:</label>
                    <select ref="eventType" >
                      <option value=""></option>
                      <option value="anniversary">Anniversary</option>
                      <option value="birthday">Birthday</option>
                      <option value="graduation">Graduation</option>
                      <option value="wedding">Wedding</option>
                      <option value="other">Other</option>
                    </select>

              <br></br> 
              <label>Serving Size:</label>
                <select ref="servingSize" >
                      <option value=""></option>
                      <option value="10">10-20</option>
                      <option value="20">20-30</option>
                      <option value="30">30-40</option>
                      <option value="40">40-50</option>
                      <option value="50">50-60</option>
                </select>

              <br></br> 
              <label>Cake Shape</label>
                <select ref="cakeShape" >
                      <option value=""></option>
                      <option value="sheet">Sheet Cake</option>
                      <option value="round">Round Cake</option>
                </select>
              
              <br></br> 
              <label>Cake Type</label>
                <select ref="cakeType" >
                      <option value=""></option>
                      <option value="chocolate">Chocolate Cake</option>
                      <option value="white">Classic Ivory Cake</option>
                      <option value="banana">Banana Cake*</option>
                      <option value="spice">Spice Cake*</option>
                      <option value="marble">Marble Cake*</option>
                      <option value="carrot">Carrot Cake*</option>
                </select>
            
              <br></br> 
              <label>Filling</label>
                  <select ref="filling" >
                    <option value=""></option>
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
                  <select ref="frosting" >
                    <option value=""></option>
                    <option value="chocolateBC">Chocolate Buttercream</option>
                    <option value="vanillaBC">Vanilla Buttercream</option>
                    <option value="mochaBC">Mocha Buttercream</option>
                    <option value="frenchBC">French Buttercream</option> 
                    <option value="chocolateMo">Chocolate Mousse*</option>
                    <option value="whippedCr">Whipped Cream*</option>
                  </select>

            <br></br> 
            <label>Decoration</label>
                  <select ref="decoration" >
                      <option value=""></option>
                      <option value="floral">Floral Design</option>
                      <option value="streamers">Confetti and Streamers</option>
                      <option value="photo">Photo Cake</option>
                      <option value="airbrush">Airbrush Design</option>
                      <option value="piped">Piped Frosting Design</option>
                      <option value="custom">Other Custom Design</option>
                  </select>
              
            <br></br>     
            
            <Link to='/CakeDescriptionForm'>
              <button onClick={this.saveAndContinue}>Save and Continue</button>
            </Link>
            
          </form>
          

        </div>
  )}
});



module.exports = CakeInfoForm;