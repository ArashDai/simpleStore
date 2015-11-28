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
        
        <p>Date and Time: {this.state.fieldValues.dateTime}</p>
        <p>Servings Size: {this.state.fieldValues.servings}</p>
        <p>Cake Shape:    {this.state.fieldValues.cakeShape}</p>
        <p>Cake Type:     {this.state.fieldValues.cakeType}</p>
        <p>Filling:       {this.state.fieldValues.fillingType}</p>
        <p>Frosting:      {this.state.fieldValues.frostingType}</p>
        <p>Decoration:    {this.state.fieldValues.decoration}</p>

      </div>
      
      )
  }
});


module.exports = CakeSelections;



