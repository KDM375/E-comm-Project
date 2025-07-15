import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { Product } from '../../types/types';

const ProductDetail: React.FC = () => {
  const location = useLocation();
  const product = location.state?.product as Product;
  const [mainImage, setMainImage] = useState(product?.image || '');
  const navigate = useNavigate();

  // Sample gallery images (in a real app, this would come from the product data)
  const galleryImages = [
    product?.image,
    'https://via.placeholder.com/600x400?text=Product+Angle',
    'https://via.placeholder.com/600x400?text=Product+Closeup',
    'https://via.placeholder.com/600x400?text=Accessories'
  ];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-gallery">
        <div className="main-image">
          <img src={mainImage} alt={product.name} />
        </div>
        <div className="thumbnail-gallery">
          {galleryImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.name} view ${index + 1}`}
              onClick={() => setMainImage(img)}
              className={mainImage === img ? 'active' : ''}
            />
          ))}
        </div>
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        
        <div className="specs">
          <h3>Specifications</h3>
          <ul>
            <li><strong>Processor:</strong> {product.specs.processor}</li>
            <li><strong>RAM:</strong> {product.specs.ram}</li>
            <li><strong>Storage:</strong> {product.specs.storage}</li>
            <li><strong>Display:</strong> {product.specs.display}</li>
          </ul>
        </div>

        <div className="description">
          <h3>Description</h3>
          <p>{product.description}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        </div>

        <button 
          className="buy-now-btn"
          onClick={() => navigate('/checkout', { state: { product } })}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;