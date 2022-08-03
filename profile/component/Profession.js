import React from 'react'
import PropTypes from 'prop-types';

const Profession = ({Experrience1,Experrience2,Experrience3})=>{
const StyleObject = {textAlign:"justify" }

  return(
    <div style={StyleObject}>
        <span className="title">My experience professional:<span className="description">{Experrience1}</span></span><br/>
        <span className="title">My experience professional:<span className="description">{Experrience2}</span></span><br/>
        <span className="title">My experience professional:<span className="description">{Experrience3}</span></span>
    </div>

)  
}
Profession.propTypes={
    Profession:PropTypes.string,
   
  };
export default Profession