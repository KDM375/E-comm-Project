import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css'; 
import type { User } from '../../types/types';

const dummyUsers: User[] = [
  {
    id: 1,
    email: 'admin@technest.com',
    password: 'admin123',
    role: 'admin',
    name: 'Admin User'
  },
  {
    id: 2,
    email: 'customer@example.com',
    password: 'customer123',
    role: 'customer',
    name: 'Regular Customer'
  }
];

const AuthScreen: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const toggleMode = () => {
    setError('');
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setIsSignup(prev => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSignup) {
      // Handle Sign Up
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      const newUser: User = {
        id: Date.now(), // Fake ID
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: 'customer' // Signups are customers by default
      };

      // Save to localStorage (or skip if you want to just redirect)
      localStorage.setItem('user', JSON.stringify(newUser));
      alert('Account created successfully!');
      navigate('/');
    } else {
      // Handle Login
      const foundUser = dummyUsers.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );

      if (!foundUser) {
        setError('Invalid email or password');
        return;
      }

      localStorage.setItem('user', JSON.stringify(foundUser));
      alert('Login successful!');

      if (foundUser.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/');
      }
    }
  };

  return (
    <div className={`auth-wrapper ${isSignup ? 'signup-mode' : ''}`}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>{isSignup ? 'Create Account' : 'Welcome Back'}</h2>
          {error && <div className="error-message">{error}</div>}

          {isSignup && (
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {isSignup && (
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
          <p>
            {isSignup ? 'Already have an account?' : "Don't have an account?"}
            <button type="button" onClick={toggleMode} className="toggle-btn">
              {isSignup ? 'Login' : 'Sign Up'}
            </button>
          </p>
        </form>
      </div>

      <div className="side-panel">
        <div className="overlay">
          <h2>TechNest</h2>
          <p>Your digital future starts here</p>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
