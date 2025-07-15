import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <header className="app-header">
      <div className="header-container">
        <div className="logo" onClick={() => navigate('/')}>
          <h1>TechNest</h1>
          <p>Premium Laptops & Accessories</p>
        </div>

        <nav className="main-nav">
          {!isAdminRoute ? (
            <>
              <Link to="/shop" className={location.pathname === '/shop' ? 'active' : ''}>Shop</Link>
              <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
            </>
          ) : (
            <>
              <Link to="/admin/dashboard" className={location.pathname === '/admin/dashboard' ? 'active' : ''}>Dashboard</Link>
              <Link to="/admin/add-product" className={location.pathname === '/admin/add-product' ? 'active' : ''}>Add Product</Link>
            </>
          )}
        </nav>

        <div className="auth-actions">
          {isAdminRoute ? (
            <button 
              className="logout-btn"
              onClick={() => navigate('/')}
            >
              Exit Admin
            </button>
          ) : (
            <div className="profile-icon" onClick={() => navigate('/login')}>
              <FaUserCircle size={28} color="white" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;