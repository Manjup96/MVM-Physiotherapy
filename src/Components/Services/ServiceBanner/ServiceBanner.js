import React from 'react';
import './ServiceBanner.css'; // Import the CSS for styling

const ServiceBanner = () => {
  return (
    <div className="service-banner">
      <div className="banner-overlay">
        <div className="banner-content">
          <h1>Our Services</h1>
          <p className="service-breadcrumb">
            <span>Home</span> 
            <span className="separator">{'>'}</span> 
            <span>Services</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
