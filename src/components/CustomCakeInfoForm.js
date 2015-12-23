var React =  require('react');
var Link = require('react-router').Link;



var CustomCakeInfoForm = React.createClass({

  getInitialState:function(){
      return{
        dateTime:'',
        eventType:'',
        servings:'',
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
        cakeType       : e.target.form[3].value,
        fillingType    : e.target.form[4].value,
        frostingType   : e.target.form[5].value,
        decoration     : e.target.form[6].value,
        decorationDesc :'',
      }

      this.props.saveValues(data);   

  },   


  render:function(){
      return(
        <div id='card' className='container-fluid'>

          <form className='col-xs-12 text-center'>
            
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
              <label>Cake Size and Shape:</label>
                <select ref="servingSize" onChange={this.saveAndContinue}>
                      <option value=""></option>
                      <option value="1/4 Sheet">1/4 Sheet, Serves: 10-16</option>
                      <option value="1/2 Sheet">1/2 Sheet, Serves: 30-36</option>
                      <option value="3/4 Sheet">3/4 Sheet, Serves: 45-55</option>
                      <option value="FullSheet">FullSheet, Serves: 70-80</option>
                      <option value="3 Layer FullSheet">3 Layer FullSheet, Serves: 100-110</option>
                      <option value="8in Round">8 in Round, Serves: 10-12</option>
                      <option value="10in Round">10 in Round, Serves: 20-25</option>
                      <option value="12in Round">12 in Round, Serves: 30-36</option>
                      <option value="14in Round">14 in Round, Serves: 45-55</option>
                      <option value="16in Round">16 in Round, Serves: 78-85</option>
                      
                </select>
              
              <br></br> 
              <label>Cake Type</label>
                <select ref="cakeType" onChange={this.saveAndContinue}>
                      <option value=""></option>
                      <option value="Half Chocolate Half Ivory Cake">Half Chocolate &Half Ivory</option>
                      <option value="Chocolate Cake">Chocolate Cake</option>
                      <option value="Classic Ivory Cake">Classic Ivory Cake</option>
                      <option value="Banana Cake">Banana Cake*</option>
                      <option value="Spice Cake">Spice Cake*</option>
                      <option value="Marble Cake">Marble Cake*</option>
                      <option value="Carrot Cake">Carrot Cake*</option>
                      <option value="Lemon Cake">Lemon Cake*</option>
                      <option value="Redvelvet Cake">Redvelvet Cake*</option>
                      <option value="Chiffon Cake">Chiffon Cake*</option>
                      <option value="Chocolate Chiffon Cake">Chocolate Chiffon Cake*</option>
                      <option value="Cheesecake">Cheesecake*</option>
                </select>
            
              <br></br> 
              <label>Filling</label>
                  <select ref="filling" onChange={this.saveAndContinue}>
                    <option value=""></option>
                   
                    <option value="Chocolate Buttercream">Chocolate Buttercream</option>
                    <option value="Vanilla Buttercream">Vanilla Buttercream</option>
                    <option value="Mocha Buttercream">Mocha Buttercream</option>
                    <option value="French Buttercream">French Buttercream</option>
                    <option value="Vanilla Custard">Vanilla Custard</option>
                    
                    <option value="Raspberry Preserves">Raspberry</option>  
                    <option value="Lemon Preserves">Lemon</option> 
                    <option value="Pineapple Preserves">Pineapple</option>
                  
                     <option value="Raspberry Mousse">Raspberry</option>  
                    <option value="Lemon Mousse">Lemon</option> 
                    <option value="Pineapple Mousse">Pineapple</option>
                   
                    <option value="Fresh Strawberries & Whipped Cream">Fresh Strawberries & Whipped Cream *</option>
                    <option value="Fresh Bananas & Whipped Cream">Fresh Bananas & Whipped Cream *</option>
                    <option value="Chocolate Mousse">Chocolate Mousse *</option>  
                    <option value="Mango Mousse">Mango Mousse *</option> 
                    <option value="Hazelnut Mousse">Hazelnut Mousse *</option>
                    <option value="PeanutButter Mousse">PeanutButter Mousse *</option>
                    <option value="Passionfruit Mousse">Passionfruit Mousse *</option>
                    <option value="Mint Chocolate Chip">Mint Chocolate Chip *</option>
                    <option value="Toffee Crunch">Toffee Crunch *</option>
                    <option value="Bavarian Cream">Bavarian Cream *</option>  
                    <option value="Rum Custard">Rum Custard *</option>
                    <option value="Grand Mariner Custard">Grand Mariner Custard *</option>
                    <option value="German Chocolate">German Chocolate *</option> 
                    <option value="Cream Cheese">Cream Cheese *</option> 
                  </select>
            

            <br></br> 
            <label>Frosting</label>
                  <select ref="frosting" onChange={this.saveAndContinue} >
                    <option value=""></option>
                    <option value="Chocolate Buttercream">Chocolate Buttercream</option>
                    <option value="Vanilla Buttercream">Vanilla Buttercream</option>
                    <option value="Mocha Buttercream">Mocha Buttercream</option>
                    <option value="French Buttercream">French Buttercream</option> 
                    <option value="Chocolate Mousse">Chocolate Mousse *</option>
                    <option value="Whipped Cream">Whipped Cream *</option>
                    <option value="Cream Cheese">Cream Cheese *</option>
                    <option value="Marzipan">Marzipan *</option>
                    <option value="White Chocolate Ganache">White Chocolate Ganache *</option>
                    <option value="Dark Chocolate Ganache">White Chocolate Ganache *</option>
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
              <button className='text-center col-sm-offset-8'>Save and Continue</button>
            </Link>
            
          </form>
          

        </div>
  )}
});



module.exports = CustomCakeInfoForm;