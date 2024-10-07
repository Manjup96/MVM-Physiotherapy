import React from 'react';
import './ServiceTrusted.css'; // Import the CSS file for styling
import logo1 from './Images/company_logo.jpg'; // Replace with actual paths to your logos
import logo2 from './Images/company_logo.jpg';
import logo3 from './Images/company_logo.jpg';
import logo4 from './Images/company_logo.jpg';
import logo5 from './Images/company_logo.jpg';

const ServiceTrusted = () => {
  return (
    <div className="trusted-section">
      <h2>Trusted by 450+ major companies worldwide</h2>
      <div className="scrolling-container">
        <div className="trusted-logos">
          <img src={logo1} alt="Company Logo 1" />
          <img src={logo2} alt="Company Logo 2" />
          <img src={logo3} alt="Company Logo 3" />
          <img src={logo4} alt="Company Logo 4" />
          <img src={logo5} alt="Company Logo 5" />
          {/* Duplicate logos for smooth continuous scrolling */}
          <img src={logo1} alt="Company Logo 1" />
          <img src={logo2} alt="Company Logo 2" />
          <img src={logo3} alt="Company Logo 3" />
          <img src={logo4} alt="Company Logo 4" />
          <img src={logo5} alt="Company Logo 5" />
        </div>
      </div>
    </div>
  );
};

export default ServiceTrusted;
