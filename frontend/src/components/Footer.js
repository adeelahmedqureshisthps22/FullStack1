import React from 'react';
import '../assets/styles/components.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>FullStack App</h3>
            <p>A modern fullstack application with React and Node.js</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@fullstackapp.com</p>
            <p>Phone: +1 (234) 567-8900</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 FullStack App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
