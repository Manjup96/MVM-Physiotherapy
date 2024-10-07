import React from 'react';
import './ContactLocation.css';

const ContactLocation = () => {
  return (
    <div className="contact-location">
      <div className="contact-info">
        <h2>Get In Touch</h2>
        <h1>Start Your Wellness Journey Today!</h1>
        <p>
          Effictur diam est fames letius fringilla massa per malesuada justo praesent facilisis. 
          Lobortis a maximus congue vivamus natoque nullam iaculis fames.
        </p>
        
        <div className="contact-details">
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h4>Workshop</h4>
              <p>Tower 789 Oak St, Smalltown, TX 23456, United States</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-phone"></i>
            <div>
              <h4>Phone</h4>
              <p>Phone : +1 (555) 987-6543</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h4>Email</h4>
              <p>info@yourdomain.com</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-clock"></i>
            <div>
              <h4>Open Hours</h4>
              <p>Mon - Fri: 08.00am - 07.00pm</p>
              <p>Sat - Sun: Closed</p>
            </div>
          </div>
        </div>

        <h3>Follow our social network</h3>
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-linkedin-in"></i>
        </div>
      </div>

      <div className="map-container">
        {/* Replace the iframe src with your location's Google Maps URL */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.4231526016226!2d-74.00594148472195!3d40.712775979328286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3162cdb5f1%3A0x234c111ba123456!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1634054766676!5m2!1sen!2suk" 
          width="600" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactLocation;
