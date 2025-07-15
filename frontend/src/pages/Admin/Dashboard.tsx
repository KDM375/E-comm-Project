import React from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';


const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  // Sample stats data
  const stats = [
    { title: 'Total Products', value: 152, change: '+12%' },
    { title: 'Orders Today', value: 24, change: '+5%' },
    { title: 'Revenue', value: '$8,425', change: '+18%' },
    { title: 'New Customers', value: 15, change: '+7%' }
  ];

  // Sample recent orders
  const recentOrders = [
    { id: '#TN1001', customer: 'John Doe', amount: '$1,299', status: 'Shipped' },
    { id: '#TN1002', customer: 'Jane Smith', amount: '$899', status: 'Processing' },
    { id: '#TN1003', customer: 'Robert Johnson', amount: '$1,599', status: 'Delivered' },
    { id: '#TN1004', customer: 'Emily Davis', amount: '$2,199', status: 'Processing' }
  ];

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-actions">
          <button 
            className="add-product-btn"
            onClick={() => navigate('/admin/add-product')}
          >
            Add New Product
          </button>
        </div>
      </header>

      <section className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3>{stat.title}</h3>
            <p className="value">{stat.value}</p>
            <p className="change">{stat.change}</p>
          </div>
        ))}
      </section>

      <section className="recent-orders">
        <h2>Recent Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.amount}</td>
                <td>
                  <span className={`status-badge ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <button className="view-btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <button onClick={() => navigate('/admin/add-product')}>
            Add Product
          </button>
          <button>View Inventory</button>
          <button>Process Orders</button>
          <button>Generate Reports</button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;