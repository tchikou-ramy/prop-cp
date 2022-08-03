import React from 'react'
import PropTypes from 'prop-types';
const Bio = ({Date,Adress,Mobile,Mail,Train}) => {
const StyleObject = {textAlign:"justify" }
return(
    <div style={StyleObject}>
<span className="title">date and place of birth:<span className="description">{Date}</span></span><br/>
<span className="title">adress: <span className="description">{Adress}</span></span><br/>
<span className="title">mobile number: <span className="description">{Mobile}</span></span><br/>
<span className="title">Email: <span className="description">{Mail}</span></span><br/>
<span className="title">professional training: <span className="description">{Train}</span></span><br></br>
    </div>
)  
}
Bio.defaultProps={
    Mobile: '+216 +++ +++',
    Mail:'****@*****.com',
  };
Bio.propTypes={
    Bio:PropTypes.string,
  };

export default Bio