var React = require('react');

//this.props.fieldValues.decoration 
//{this.props.feildValues.dateTime}

var CakeSelections = React.createClass({

  getInitialState:function(){
    return{
      dateTime:null,
      eventType:null,
      servings:null,
      cakeShape:null,
      cakeType:null,
      fillingType:null,
      frostingType:null,
      decoration:null 
    }
  },
  render:function(){
    return(

      <div>
        
        <p>Date and Time: </p>
        <p>Servings Size: </p>
        <p>Cake Shape: </p>
        <p>Cake Type: </p>
        <p>Filling: </p>
        <p>Frosting: </p>
        <p>Decoration: </p>

      </div>
      
      )
  }
});


module.exports = CakeSelections;


//fieldValues is not defined so i am not passing props down properly
