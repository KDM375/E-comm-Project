import React from 'react';
import type { Product } from '../types/types';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img 
        src={product.image} 
        alt={product.name} 
        onClick={() => navigate(`/product/${product.id}`)}
      />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div className="specs">
        <span>{product.specs.processor}</span>
        <span>{product.specs.ram}</span>
      </div>
      <button 
        className="buy-btn"
        onClick={() => navigate('/checkout', { state: { product } })}
      >
        Buy Now
      </button>
    </div>
  );
};

export default Card;