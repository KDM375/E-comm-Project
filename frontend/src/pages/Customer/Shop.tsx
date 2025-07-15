import React, { useState } from 'react';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';
import SearchBar from '../../components/SearchBar';
import type { Product } from '../../types/types';

// Dummy data for 50 products
const dummyProducts: Product[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Laptop Model ${i + 1}`,
  price: Math.floor(Math.random() * 2000) + 500,
  description: `High-performance laptop with great features. Model ${i + 1}`,
  image: `https://via.placeholder.com/300x200?text=Laptop+${i + 1}`,
  specs: {
    processor: `Intel Core i${Math.floor(Math.random() * 5) + 5}`,
    ram: `${Math.floor(Math.random() * 16) + 8}GB RAM`,
    storage: `${Math.floor(Math.random() * 2) + 1}TB SSD`,
    display: `${Math.floor(Math.random() * 4) + 13} inch Display`
  }
}));

const Shop: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const productsPerPage = 10;

  // Filter products based on search term
  const filteredProducts = dummyProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="shop-container">
      <h1>TechNest - Shop Laptops & Accessories</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <div className="products-grid">
        {currentProducts.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Shop;