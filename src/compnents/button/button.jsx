import React from 'react';

const Button = ({ title, count }) => {
    const buttonStyle = {
        backgroundColor: 'blue', 
        color: 'white',          
        padding: '10px 20px', 
        borderRadius: '5px',     
        cursor: 'pointer',     
      };
      const circleButtonStyle = {
        backgroundColor: 'white',
        color: 'black',
        margin: '5px',
        padding: '2px',
        borderRadius: '50%',
      }
    
  return (
    <button style={buttonStyle}>
      {title} 
      <span style={circleButtonStyle}> 
        {count}
      </span>
    </button>
  );
};

export default Button;