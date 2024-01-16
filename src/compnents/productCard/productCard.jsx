import React from 'react';

const ProductCard = ({ name, category, price }) => {

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '8px',
  };

  const categoryStyle = {
    color: '#555',
    marginBottom: '8px',
  };

  const priceStyle = {
    fontSize: '1.1rem',
    color: 'green',
  };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>{name}</div>
      <div style={categoryStyle}>Category: {category}</div>
      <div style={priceStyle}>Price: {price}</div>
    </div>
  );
};

export default ProductCard;
