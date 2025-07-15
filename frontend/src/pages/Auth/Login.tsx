import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { User } from '../../types/types';

// Dummy users data
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

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = dummyUsers.find(u => u.email === email && u.password === password);
    
    if (user) {
      // In a real app, you would set authentication state here
      if (user.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/');
      }
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login to TechNest</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>

    </div>
  );
};

export default Login;