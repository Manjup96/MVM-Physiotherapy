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
          <img src={Introduction1} alt="physiotherapy Image 1" className="introduction-large-img" />
          <div className="introduction-small-images">
            <img src={Introduction2} alt="physiotherapy Image 2" className="introduction-small-img" />
            <img src={Introduction3} alt="physiotherapy Image 3" className="introduction-small-img" />
          </div>
        </div>

        {/* Right Section: Content */}
        <div className="introduction-content">
          <h4>WHO WE ARE</h4>
          <h1>Restoring Balance and Harmony through Physiotherapy</h1>
          <p>
            Leo ante dui bibendum accumsan ipsum pharetra. Auctor erat praesent cursus nostra interdum semper.
          </p>
          <p>
            Dapibus senectus platea ac magnis vulputate quam accumsan libero. Enim iaculis phasellus integer fermentum diam sem vivamus dis nec ut. Nullam posuere mus porttitor magna amet est vulputate phasellus integer.
          </p>
          <div className="introduction-features">
            <div className="introduction-feature-item">
              <span role="img" aria-label="Checkmark">✅</span>
              <h3>Experienced Physiotherapy</h3>
              <p>Porta mi vel gravida phasellus fames turpis. Tellus senectus tortor leo integer lacinia euismod fusce.</p>
            </div>
            <div className="introduction-feature-item">
              <span role="img" aria-label="Checkmark">✅</span>
              <h3>Holistic Health Approach</h3>
              <p>Porta mi vel gravida phasellus fames turpis. Tellus senectus tortor leo integer lacinia euismod fusce.</p>
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
