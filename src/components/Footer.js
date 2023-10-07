import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="shop-info">
          <h3>Lovely Aquarium and Pet Shop</h3>
          <p>Shop Address: Your Shop Address</p>
          <p>Phone: Your Phone Number</p>
          <p>Email: Your Email Address</p>
          <p>WhatsApp: Your WhatsApp Number</p>
        </div>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
