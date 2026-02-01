import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/pages.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h1>Welcome to FullStack App</h1>
          <p>A modern fullstack application built with React and Node.js</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">
              Browse Products
            </Link>
            <Link to="/register" className="btn btn-secondary">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>User Authentication</h3>
              <p>Secure JWT-based authentication system</p>
            </div>
            <div className="feature-card">
              <h3>Product Management</h3>
              <p>Complete CRUD operations for products</p>
            </div>
            <div className="feature-card">
              <h3>RESTful API</h3>
              <p>Well-structured API with proper endpoints</p>
            </div>
            <div className="feature-card">
              <h3>Responsive Design</h3>
              <p>Works seamlessly on all devices</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
