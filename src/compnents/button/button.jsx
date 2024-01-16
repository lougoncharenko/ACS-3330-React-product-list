import React from 'react';

const Button = ({ category, count, setCategory }) => {
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
    <button style={buttonStyle}
    onClick={() => setCategory(category)}
    >
      {category} 
      <span style={circleButtonStyle}> 
        {count}
      </span>
    </button>
  );
};

export default Button;