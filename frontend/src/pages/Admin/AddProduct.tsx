import React, { useState } from 'react';
import type { Product } from '../../types/types';
import './admin.css';


const AddProduct: React.FC = () => {
  const [product, setProduct] = useState<Omit<Product, 'id'>>({
    name: '',
    price: 0,
    description: '',
    image: '',
    specs: {
      processor: '',
      ram: '',
      storage: '',
      display: ''
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name in product.specs) {
      setProduct({
        ...product,
        specs: {
          ...product.specs,
          [name]: value
        }
      });
    } else {
      setProduct({
        ...product,
        [name]: value
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    alert('Product added successfully!');
    // Reset form
    setProduct({
      name: '',
      price: 0,
      description: '',
      image: '',
      specs: {
        processor: '',
        ram: '',
        storage: '',
        display: ''
      }
    });
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            required
          />
        </div>
        
        <h3>Specifications</h3>
        <div className="form-group">
          <label>Processor:</label>
          <input
            type="text"
            name="processor"
            value={product.specs.processor}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>RAM:</label>
          <input
            type="text"
            name="ram"
            value={product.specs.ram}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Storage:</label>
          <input
            type="text"
            name="storage"
            value={product.specs.storage}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Display:</label>
          <input
            type="text"
            name="display"
            value={product.specs.display}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;