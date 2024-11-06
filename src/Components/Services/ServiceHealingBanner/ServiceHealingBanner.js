import React from 'react';
import './ServiceHealingBanner.css'; // Import the CSS file

const ServiceHealingBanner = () => {
  return (
    <div className="ServiceHealing-banner">
      <div className="ServiceHealing-banner-content">
        <h1>Get the best treatment from the most experienced Physiotherapists</h1>
        <p>
        Receive the highest quality care from our team of experienced physiotherapists. 
        With advanced expertise and a patient-centered approach, we provide treatments 
        tailored to your unique needs, helping you achieve lasting relief and optimal health. 
        Trust in our experience for the best in physiotherapy care.
        </p>
        <button className="ServiceHealing-cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default ServiceHealingBanner;
