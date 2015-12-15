var React = require('react');


var CustomCakeSelections = React.createClass({

  render:function(){
  
    return(

      <div className='text-center'>

        <p>Date and Time: {this.props.fieldValues.dateTime}</p>
        <p>Servings Size: {this.props.fieldValues.servings}</p>
        <p>Cake Shape:    {this.props.fieldValues.cakeShape}</p>
        <p>Cake Type:     {this.props.fieldValues.cakeType}</p>
        <p>Filling:       {this.props.fieldValues.fillingType}</p>
        <p>Frosting:      {this.props.fieldValues.frostingType}</p>
        <p>Decoration:    {this.props.fieldValues.decoration}</p>
        <p>Description:   {this.props.fieldValues.decorationDesc}</p>

      </div>
      
      )
  }
}); 


module.exports = CustomCakeSelections;



