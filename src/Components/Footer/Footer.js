import React from 'react';
import './Footer.css'; 
import footer_logo from '../Footer/Images/company logo.jpeg';
import footer_bg from '../Footer/Images/footer_bg.jpg'; // Import your background image

const Footer = () => {
  return (
    <footer 
      className="footer" 
      style={{
        backgroundImage: `url(${footer_bg})`,
        backgroundPosition: 'center -140px', // Moves the background image down
        backgroundSize: 'cover',
        position: 'relative',
      }}
    >
      <div className="footer-overlay"></div> {/* Transparent overlay */}
      
      <div className="footer-container">
        <div className="footer-section">
          <img src={footer_logo} alt="ChiroPhyz Logo" className="footer-logo" />
          <p>Go on and live with the freedom of physical therapy, designed to help you move better, feel stronger, and live pain-free.</p>
          <div className="footer-social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Manual Therapy</li>
            <li>Sports Rehabilitation</li>
            <li>Post-Surgery Rehabilitation</li>
            <li>Exercise Therapy</li>
            <li>Cold Therapy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Get In Touch</h4>
          <p>Bengaluru, India</p>
          <p><i className="fas fa-envelope"></i> hello@gmail.com</p>
          <p><i className="fas fa-phone"></i> +911234567890</p>
          <p><i className="fas fa-fax"></i> +911234567890</p>
        </div>

        <div className="footer-section">
          <h4>Open Hours</h4>
          <ul>
            <li>Monday: 08.00 am - 07.00 pm</li>
            <li>Tuesday: 08.00 am - 07.00 pm</li>
            <li>Wednesday: 08.00 am - 07.00 pm</li>
            <li>Thursday: 08.00 am - 07.00 pm</li>
            <li>Friday: 08.00 am - 07.00 pm</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2024 Physiotherapy by iiiQbets. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
