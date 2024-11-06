import React from 'react';
import './Healing.css'; // Import the CSS file for styling
import healingImage from './Images/healing-background.jpg'; // Replace with the actual image path

const Healing = () => {
  return (
    <div className="healing-section" style={{ backgroundImage: `url(${healingImage})` }}>
      <div className="healing-overlay">
        <div className="healing-content">
          <h1>We carry on the tradition of pure healing</h1>
          <p>
          We carry on the tradition of pure healing, blending time-honored techniques with modern advancements in physiotherapy. 
          Our commitment to authentic, compassionate care ensures that each patient experiences true,
          lasting recovery and wellness.
          </p>
          <button className="discover-button">Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default Healing;
