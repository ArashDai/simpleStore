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
        
        <p>Date and Time: {this.props.fieldValues.dateTime}</p>
        <p>Servings Size: {this.props.fieldValues.servings}</p>
        <p>Cake Shape:    {this.props.fieldValues.cakeShape}</p>
        <p>Cake Type:     {this.props.fieldValues.cakeType}</p>
        <p>Filling:       {this.props.fieldValues.fillingType}</p>
        <p>Frosting:      {this.props.fieldValues.frostingType}</p>
        <p>Decoration:    {this.props.fieldValues.decoration}</p>

      </div>
      
      )
  }
});


module.exports = CakeSelections;



