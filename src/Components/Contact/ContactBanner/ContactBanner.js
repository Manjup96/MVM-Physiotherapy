import React from 'react';
import './ContactBanner.css';

const ContactBanner = () => {
  return (
    <div className="contact-banner">
      <div className="overlay"></div> {/* Overlay layer */}
      <div className="overlay-content">
        <h1>Contact Us</h1>
        <div className="breadcrumb">
          <span>Home</span> <span>&gt;</span> <span>Contact Us</span>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
