var React = require('react');

//this.props.fieldValues.decoration 
//{this.props.feildValues.dateTime}

var CakeSelections = React.createClass({

  getInitialState:function(){
    
    return{
      
      dateTime:this.props.fieldValues.dateTime,
      eventType:this.props.fieldValues.eventType,
      servings:this.props.fieldValues.servings,
      cakeShape:this.props.fieldValues.cakeShape,
      cakeType:this.props.fieldValues.cakeType,
      fillingType:this.props.fieldValues.fillingType,
      frostingType:this.props.fieldValues.frostingType,
      decoration:this.props.fieldValues.decoration
      
    }
  },

  componentDidUpdate:function(){
    this.setState({
      dateTime:this.props.fieldValues.dateTime,
      eventType:this.props.fieldValues.eventType,
      servings:this.props.fieldValues.servings,
      cakeShape:this.props.fieldValues.cakeShape,
      cakeType:this.props.fieldValues.cakeType,
      fillingType:this.props.fieldValues.fillingType,
      frostingType:this.props.fieldValues.frostingType,
      decoration:this.props.fieldValues.decoration
      })
  },


  render:function(){
  
    return(

      <div>

        <p>Date and Time: {this.state.dateTime}</p>
        <p>Servings Size: {this.state.servings}</p>
        <p>Cake Shape:    {this.state.cakeShape}</p>
        <p>Cake Type:     {this.state.cakeType}</p>
        <p>Filling:       {this.state.fillingType}</p>
        <p>Frosting:      {this.state.frostingType}</p>
        <p>Decoration:    {this.state.decoration}</p>

      </div>
      
      )
  }
});


module.exports = CakeSelections;



