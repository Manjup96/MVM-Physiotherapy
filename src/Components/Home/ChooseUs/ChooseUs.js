import React from 'react';
import './ChooseUs.css'; 
import ChooseUs1 from './Images/ChooseUs1.jpg';
import ChooseUs2 from './Images/ChooseUs2.jpg';

const ChooseUs = () => {
  return (
    <div className="choose-us-section">
      <div className="choose-us-content">
        {/* Left Side: Text and Images */}
        <div className="left-content">
          <div className="why-choose-us">
            <h4>WHY CHOOSE US</h4>
            <h1>Correcting your posture with professional brilliance</h1>
            <p>Improve your posture with the expertise of our skilled physiotherapists. 
              Our team combines professional knowledge with tailored techniques to help you 
              achieve alignment and comfort. Trust us to guide you toward a healthier,
              more confident posture.</p>
          </div>

          <div className="choose-image-gallery">
            <img src={ChooseUs1} alt="Physiotherapy demonstrating a spine" />
            <img src={ChooseUs2} alt="Physiotherapy assisting a patient" />
          </div>
        </div>

        {/* Right Side: Features List */}
        <div className="choose-features-list">
          <div className="choose-feature-item">
            <h3>Experience and Expertise <span>✔</span></h3>
            <p>Benefit from the perfect blend of experience and expertise with our dedicated physiotherapists.</p>
          </div>
          <div className="choose-feature-item">
            <h3>Holistic Approach <span>✔</span></h3>
            <p>Our holistic approach treats the whole person, focusing on physical, mental, and emotional well-being.</p>
          </div>
          <div className="choose-feature-item">
            <h3>Friendly and Professional <span>✔</span></h3>
            <p>Enjoy a warm, welcoming atmosphere with our friendly and professional team.</p>
          </div>
          <div className="choose-feature-item">
            <h3>High-Quality Service <span>✔</span></h3>
            <p>Experience high-quality service with our dedicated physiotherapy team, committed to delivering exceptional care tailored to your needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
