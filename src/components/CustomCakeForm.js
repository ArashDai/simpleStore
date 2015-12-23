var React =  require('react');
var Link = require('react-router').Link;

var CustomCakeSelections = require('./CustomCakeSelections');
var CustomCakeInfoForm = require('./CustomCakeInfoForm');
var CustomCakeDescriptionForm = require('./CustomCakeDescriptionForm');


var CustomCakeForm = React.createClass({

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
  
  calculatePrice:function(cakeData){
    var price = 0;

    var premiumCake=['Banana Cake','Spice Cake','Marble Cake','Carrot Cake','Lemon Cake','Redvelvet Cake','Chiffon Cake','Chocolate Chiffon Cake','Cheesecake'];

    var premiumFilling=['Fresh Strawberries & Whipped Cream','Fresh Bananas & Whipped Cream','Cream Cheese',"German Chocolate","Grand Mariner Custard","Rum Custard","Bavarian Cream","Toffee Crunch","Mint Chocolate Chip","Passionfruit Mousse","PeanutButter Mousse","Hazelnut Mousse","Mango Mousse","Chocolate Mousse"];

    var premiumFrosting=["Dark Chocolate Ganache","White Chocolate Ganache","Marzipan","Cream Cheese","Whipped Cream","Chocolate Mousse"];

    var options={
      '1/4 Sheet': 10,
      '1/2 Sheet': 16,
      '3/4 Sheet': 22,
      'FullSheet': 29,
      '3 Layer FullSheet': 39,
      '8in Round': 10,
      '10in Round': 16,
      '12in Round': 22,
      '14in Round': 29,
      '16in Round': 39,
    }; 

    

      
        if(cakeData.servings === '1/4 Sheet' ){
            
              if(cakeData.decoration === "Photo Cake"){price=price+47}
                else if(cakeData.decoration === "Airbrush Design"){price=price+53}
                else if(cakeData.decoration === "Piped Frosting Design"){price=price+63}
                else if(cakeData.decoration === "Custom Design"){price=price+63} 
              else{
                price=price+35;
              } 
              if(premiumCake.indexOf(cakeData.cakeType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              if(premiumFilling.indexOf(cakeData.fillingType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              if(premiumFrosting.indexOf(cakeData.frostingType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              return price;
        }

        else if(cakeData.servings === '1/2 Sheet' ){
            
              if(cakeData.decoration === "Photo Cake"){price=price+75}
                else if(cakeData.decoration === "Airbrush Design"){price=price+79}
                else if(cakeData.decoration === "Piped Frosting Design"){price=price+95}
                else if(cakeData.decoration === "Custom Design"){price=price+95} 
              else{
                price=price+54;
              } 
              if(premiumCake.indexOf(cakeData.cakeType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              if(premiumFilling.indexOf(cakeData.fillingType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              if(premiumFrosting.indexOf(cakeData.frostingType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              return price;
        }

        else if(cakeData.servings === '3/4 Sheet' ){
          
              if(cakeData.decoration === "Photo Cake"){price=price+100}
               else if(cakeData.decoration === "Airbrush Design"){price=price+109}
               else if(cakeData.decoration === "Piped Frosting Design"){price=price+131}
               else if(cakeData.decoration === "Custom Design"){price=price+131} 
              else{
                price=price+69;
              } 
              if(premiumCake.indexOf(cakeData.cakeType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              if(premiumFilling.indexOf(cakeData.fillingType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              if(premiumFrosting.indexOf(cakeData.frostingType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              return price;
        }

        else if(cakeData.servings === 'FullSheet' ){
            
              if(cakeData.decoration === "Photo Cake"){price=price+120}
               else if(cakeData.decoration === "Airbrush Design"){price=price+125}
               else if(cakeData.decoration === "Piped Frosting Design"){price=price+159}
               else if(cakeData.decoration === "Custom Design"){price=price+159} 
              else{
                price=price+87;
              } 
              if(premiumCake.indexOf(cakeData.cakeType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              if(premiumFilling.indexOf(cakeData.fillingType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              if(premiumFrosting.indexOf(cakeData.frostingType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              return price;
        }

        else if(cakeData.servings === '3 Layer FullSheet' ){
            
              if(cakeData.decoration === "Photo Cake"){price=price+190}
                else if(cakeData.decoration === "Airbrush Design"){price=price+199}
                else if(cakeData.decoration === "Piped Frosting Design"){price=price+238}
                else if(cakeData.decoration === "Custom Design"){price=price+238} 
              else{
                price=price+140
              } 
              if(premiumCake.indexOf(cakeData.cakeType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              if(premiumFilling.indexOf(cakeData.fillingType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              if(premiumFrosting.indexOf(cakeData.frostingType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              return price;
        } 

        else if(cakeData.servings === '8in Round' ){
            
              if(cakeData.decoration === "Photo Cake"){price=price+38}
                else if(cakeData.decoration === "Airbrush Design"){price=price+49}
                else if(cakeData.decoration === "Piped Frosting Design"){price=price+59}
                else if(cakeData.decoration === "Custom Design"){price=price+59} 
              else{
                price=price+30
              }
              if(premiumCake.indexOf(cakeData.cakeType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              if(premiumFilling.indexOf(cakeData.fillingType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              if(premiumFrosting.indexOf(cakeData.frostingType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              return price;
        }

        else if(cakeData.servings === '10in Round' ){
           
              if(cakeData.decoration === "Photo Cake"){price=price+62}
               else if(cakeData.decoration === "Airbrush Design"){price=price+69}
               else if(cakeData.decoration === "Piped Frosting Design"){price=price+85}
               else if(cakeData.decoration === "Custom Design"){price=price+85} 
              else{
                price=price+47
              }
              if(premiumCake.indexOf(cakeData.cakeType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              if(premiumFilling.indexOf(cakeData.fillingType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              if(premiumFrosting.indexOf(cakeData.frostingType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              return price;
        }

        else if(cakeData.servings === '12in Round' ){
            
              if(cakeData.decoration === "Photo Cake"){price=price+78}
                else if(cakeData.decoration === "Airbrush Design"){price=price+85}
                else if(cakeData.decoration === "Piped Frosting Design"){price=price+107}
                else if(cakeData.decoration === "Custom Design"){price=price+107} 
              else{
                price=price+56
              }
              if(premiumCake.indexOf(cakeData.cakeType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              if(premiumFilling.indexOf(cakeData.fillingType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              if(premiumFrosting.indexOf(cakeData.frostingType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              return price;
        }

        else if(cakeData.servings === '14in Round' ){
            
              if(cakeData.decoration === "Photo Cake"){price=price+112}
              else if(cakeData.decoration === "Airbrush Design"){price=price+115}
              else if(cakeData.decoration === "Piped Frosting Design"){price=price+144}
              else if(cakeData.decoration === "Custom Design"){price=price+144} 
              else{
                price=price+84
              }
              if(premiumCake.indexOf(cakeData.cakeType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              if(premiumFilling.indexOf(cakeData.fillingType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              if(premiumFrosting.indexOf(cakeData.frostingType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              return price;
        } 

        else if(cakeData.servings === '16in Round' ){
              if(cakeData.decoration === "Photo Cake"){price=price+140}
                else if(cakeData.decoration === "Airbrush Design"){price=price+145}
                else if(cakeData.decoration === "Piped Frosting Design"){price=price+184}
                else if(cakeData.decoration === "Custom Design"){price=price+184} 
              else{
                price=price+107
              } 
              if(premiumCake.indexOf(cakeData.cakeType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              if(premiumFilling.indexOf(cakeData.fillingType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              if(premiumFrosting.indexOf(cakeData.frostingType) !== -1 ){
                price=price+options[cakeData.servings]
              }
              return price;
      } 

    

  },

  saveValues: function(fields) {

      fields['price'] = this.calculatePrice(fields);
    
      this.setState(fields);
    
  },
  
  render: function() {
    return(
     <div id='card'className='container-fluid'>
      <h1 className='text-center'>Custom Cake Creator</h1>
        <p className='text-center'>The perfect cake awaits</p>
      
      <div className='container-fluid'>
        {this.props.children && React.cloneElement(this.props.children,{saveValues:this.saveValues, fieldValues:this.state})}
      </div> 
       
      <br></br>

      <CustomCakeSelections fieldValues={this.state}/>
      

     </div>
    )
  }

});


module.exports = CustomCakeForm;


