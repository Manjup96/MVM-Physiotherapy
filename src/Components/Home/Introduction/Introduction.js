import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Introduction.css'; 
import Introduction1 from './images/Introduction1.jpg';  // large image
import Introduction2 from './images/Introduction2.jpg';  // top right small image
import Introduction3 from './images/Introduction3.jpg';  // bottom right small image

const Introduction = () => {
  return (
    <div className="introduction-container">
      <div className="introduction-section">
        {/* Left Section: Images and Experience */}
        <div className="introduction-left">
          <img src="https://img.freepik.com/free-photo/healthcare-concept-clinic_23-2151117872.jpg" className="introduction-large-img" />
          <div className="introduction-small-images">
            <img src="https://plus.unsplash.com/premium_photo-1682089872205-dbbae3e4ba32?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZG9jdG9yfGVufDB8fDB8fHww" alt="physiotherapy Image 2" className="introduction-small-img" />
            <img src={Introduction3} alt="physiotherapy Image 3" className="introduction-small-img" />
          </div>
        </div>

        {/* Right Section: Content */}
        <div className="introduction-content">
          <h4>WHO WE ARE</h4>
          <h1>Restoring Balance and Harmony through Physiotherapy</h1>
          <p>
          At our clinic, we believe in restoring balance and harmony through expert physiotherapy care.
          </p>
          <p>
          dedicated team combines advanced techniques with a compassionate approach, empowering each patient to overcome pain and improve mobility.
          </p>
          <div className="introduction-features">
            <div className="introduction-feature-item">
              <span role="img" aria-label="Checkmark">✅</span>
              <h3>Experienced Physiotherapy</h3>
              <p>With years of expertise in physiotherapy, our team is committed to delivering high-quality, effective treatment tailored to your needs..</p>
            </div>
            <div className="introduction-feature-item">
              <span role="img" aria-label="Checkmark">✅</span>
              <h3>Holistic Health Approach</h3>
              <p>Our holistic health approach addresses the whole person, not just symptoms, aiming for true, lasting wellness.</p>
            </div>
          </div>
          {/* Update the button to be a Link */}
          <Link to="/appointment">
            <button className="introduction-about-btn">More About Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
