var React =  require('react');
var Link = require('react-router').Link;



var CustomCakeInfoForm = React.createClass({

  getInitialState:function(){
      return{
        dateTime:'',
        eventType:'',
        servings:'',
        cakeShape:'',
        cakeType:'',
        fillingType:'',
        frostingType:'',
        decoration:'',
        decorationDesc:'',
        userInfo:undefined

      }
  }, 

  saveAndContinue:function(e){
    
      var data = { 
        dateTime       : e.target.form[0].value,
        eventType      : e.target.form[1].value,
        servings       : e.target.form[2].value,
        cakeShape      : e.target.form[3].value,
        cakeType       : e.target.form[4].value,
        fillingType    : e.target.form[5].value,
        frostingType   : e.target.form[6].value,
        decoration     : e.target.form[7].value,
        decorationDesc :''
      }

      this.props.saveValues(data);   

  },   


  render:function(){
      return(
        <div id='card' className='container-fluid'>

          <form className='col-xs-12'>
            
              <label>Pickup date and time:</label> 
                    <input type='datetime-local' ref='dateTime' onChange={this.saveAndContinue}/>


              <br></br>      
              <label>Event Type:</label>
                    <select ref="eventType" onChange={this.saveAndContinue} >
                      <option value=""></option>
                      <option value="anniversary">Anniversary</option>
                      <option value="birthday">Birthday</option>
                      <option value="graduation">Graduation</option>
                      <option value="wedding">Wedding</option>
                      <option value="other">Other</option>
                    </select>

              <br></br> 
              <label>Serving Size:</label>
                <select ref="servingSize" onChange={this.saveAndContinue}>
                      <option value=""></option>
                      <option value="10">10-20</option>
                      <option value="20">20-30</option>
                      <option value="30">30-40</option>
                      <option value="40">40-50</option>
                      <option value="50">50-60</option>
                </select>

              <br></br> 
              <label>Cake Shape</label>
                <select ref="cakeShape" onChange={this.saveAndContinue}>
                      <option value=""></option>
                      <option value="Sheet Cake">Sheet Cake</option>
                      <option value="Round Cake">Round Cake</option>
                </select>
              
              <br></br> 
              <label>Cake Type</label>
                <select ref="cakeType" onChange={this.saveAndContinue}>
                      <option value=""></option>
                      <option value="Chocolate Cake">Chocolate Cake</option>
                      <option value="Classic Ivory Cake">Classic Ivory Cake</option>
                      <option value="Banana Cake">Banana Cake*</option>
                      <option value="Spice Cake">Spice Cake*</option>
                      <option value="Marble Cake">Marble Cake*</option>
                      <option value="Carrot Cake">Carrot Cake*</option>
                </select>
            
              <br></br> 
              <label>Filling</label>
                  <select ref="filling" onChange={this.saveAndContinue}>
                    <option value=""></option>
                    <option value="Chocolate Buttercream">Chocolate Buttercream</option>
                    <option value="Vanilla Buttercream">Vanilla Buttercream</option>
                    <option value="Mocha Buttercream">Mocha Buttercream</option>
                    <option value="French Buttercream">French Buttercream</option>   
                    <option value="Raspberry">Raspberry</option>  
                    <option value="Fresh Strawberries & Whipped Cream">Fresh Strawberries & Whipped Cream *</option>
                    <option value="Fresh Bananas & Whipped Cream">Fresh Bananas & Whipped Cream *</option>
                    <option value="Chocolate Mousse">Chocolate Mousse *</option>    
                  </select>
            

            <br></br> 
            <label>Frosting</label>
                  <select ref="frosting" onChange={this.saveAndContinue} >
                    <option value=""></option>
                    <option value="Chocolate Buttercream">Chocolate Buttercream</option>
                    <option value="Vanilla Buttercream">Vanilla Buttercream</option>
                    <option value="Mocha Buttercream">Mocha Buttercream</option>
                    <option value="French Buttercream">French Buttercream</option> 
                    <option value="Chocolate Mousse">Chocolate Mousse*</option>
                    <option value="Whipped Cream">Whipped Cream*</option>
                  </select>

            <br></br> 
            <label>Decoration</label>
                  <select ref="decoration" onChange={this.saveAndContinue} >
                      <option value=""></option>
                      <option value="Floral">Floral Design</option>
                      <option value="Confetti and Streamers">Confetti and Streamers</option>
                      <option value="Photo Cake">Photo Cake</option>
                      <option value="Airbrush Design">Airbrush Design</option>
                      <option value="Piped Frosting Design">Piped Frosting Design</option>
                      <option value="Custom Design">Other Custom Design</option>
                  </select>
              
            <br></br>     
            
            <Link to='/CustomCakeDescriptionForm'>
              <button>Save and Continue</button>
            </Link>
            
          </form>
          

        </div>
  )}
});



module.exports = CustomCakeInfoForm;