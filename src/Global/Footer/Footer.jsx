import React from 'react';
import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Advance Analytik</h3>
            <p>Provide a brief description of the company and its core services.</p>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li><i className="fas fa-map-marker-alt"></i> 123 Main Street, City, Country</li>
              <li><i className="fas fa-phone"></i> +1 123-456-7890</li>
              <li><i className="fas fa-envelope"></i> info@advanceanalytik.com</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul className="social-media-icons">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
