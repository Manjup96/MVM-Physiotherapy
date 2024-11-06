import React from 'react';
import './BestTreatment.css';  // Link to the CSS file
import backgroundImage from '../BestTreatment/Images/backgroundImage.jpg'

const BestTreatment = () => {
  return (
    <div className="physiotherapy-banner">
      <div className="banner-background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="banner-content">
        <h1>Get the best treatment from the most experienced physiotherapist</h1>
        <p>
        Receive top-quality care from highly experienced physiotherapists dedicated to your recovery. 
        Our specialists use advanced techniques and personalized treatment plans to help you achieve 
        optimal health and mobility. Trust us to provide the best in physiotherapy care.
        </p>
        <button className="BestTreatment-button">Get Started</button>
      </div>
    </div>
  );
};

export default BestTreatment;
