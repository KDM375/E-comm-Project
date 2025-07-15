import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Product } from '../types/types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample recent products (you can replace with your actual data)
const recentProducts: Product[] = [
  {
    id: 1,
    name: 'TechNest Pro X1',
    price: 1299,
    description: 'Ultra-thin business laptop with powerful performance',
    image: 'https://via.placeholder.com/600x400?text=Pro+X1',
    specs: {
      processor: 'Intel Core i7-1165G7',
      ram: '16GB RAM',
      storage: '512GB SSD',
      display: '14" FHD'
    }
  },
  // Add 7 more products...
  ...Array.from({ length: 7 }, (_, i) => ({
    id: i + 2,
    name: `TechNest Model ${i + 2}`,
    price: Math.floor(Math.random() * 1500) + 500,
    description: `High-performance laptop model ${i + 2}`,
    image: `https://via.placeholder.com/600x400?text=Model+${i + 2}`,
    specs: {
      processor: `Intel Core i${Math.floor(Math.random() * 5) + 5}`,
      ram: `${Math.floor(Math.random() * 16) + 8}GB RAM`,
      storage: `${Math.floor(Math.random() * 2) + 1}TB SSD`,
      display: `${Math.floor(Math.random() * 4) + 13}" Display`
    }
  }))
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to TechNest</h1>
        <p>Your one-stop shop for premium laptops and accessories</p>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <h3>Fast and Secure</h3>
          <p>All transactions are encrypted for your security</p>
        </div>
        <div className="feature-card">
          <h3>Fast and On-Time Delivery</h3>
          <p>Get your products delivered within 2-3 business days</p>
        </div>
      </section>

      <section className="recent-products">
        <h2>Recently Added</h2>
        <Slider {...carouselSettings}>
          {recentProducts.map(product => (
            <div key={product.id} className="product-slide">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>${product.price}</p>
            </div>
          ))}
        </Slider>
        <button 
          className="shop-now-btn"
          onClick={() => navigate('/shop')}
        >
          Go to Shop
        </button>
      </section>
    </div>
  );
};

export default Home;