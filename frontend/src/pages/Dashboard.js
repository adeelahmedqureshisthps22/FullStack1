import React, { useEffect, useState } from 'react';
import '../assets/styles/pages.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div className="dashboard-page">
      <div className="container">
        <h1>Dashboard</h1>
        
        {user && (
          <div className="user-welcome">
            <h2>Welcome back, {user.firstName || user.username}!</h2>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
          </div>
        )}

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Products</h3>
            <p>Manage your products</p>
            <a href="/products" className="btn btn-primary">View Products</a>
          </div>

          <div className="dashboard-card">
            <h3>Profile</h3>
            <p>View and edit your profile</p>
            <a href="/profile" className="btn btn-primary">View Profile</a>
          </div>

          <div className="dashboard-card">
            <h3>Settings</h3>
            <p>Manage your account settings</p>
            <button className="btn btn-secondary" disabled>Coming Soon</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
