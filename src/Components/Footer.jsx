import React from 'react';
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Section: Company Links */}
        <div className="footer-section">
          <h3>About eKart</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/press">Press</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        
        {/* Section: Support */}
        <div className="footer-section">
          <h3>Customer Support</h3>
          <ul>
            <li><a href="/help-center">Help Center</a></li>
            <li><a href="/returns">Returns</a></li>
            <li><a href="/shipping">Shipping</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </div>

        {/* Section: Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="footer-note">
          <p>© 2024 eKart, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}