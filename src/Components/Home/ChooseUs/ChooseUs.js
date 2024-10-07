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
            <p>Vivamus pharetra potenti malesuada metus sem. Neque si rutrum accumsan massa aliquam orci mi dictumst justo primis consequat. Et nam posuere fringilla iaculis ac dapibus convallis molestie semper mattis.</p>
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
            <p>Condimentum nam ullamcorper hac dolor volutpat eu. Massa velit dictumst ligula mollis blandit luctus ornare bibendum posuere lacus.</p>
          </div>
          <div className="choose-feature-item">
            <h3>Holistic Approach <span>✔</span></h3>
            <p>Condimentum nam ullamcorper hac dolor volutpat eu. Massa velit dictumst ligula mollis blandit luctus ornare bibendum posuere lacus.</p>
          </div>
          <div className="choose-feature-item">
            <h3>Friendly and Professional <span>✔</span></h3>
            <p>Condimentum nam ullamcorper hac dolor volutpat eu. Massa velit dictumst ligula mollis blandit luctus ornare bibendum posuere lacus.</p>
          </div>
          <div className="choose-feature-item">
            <h3>High-Quality Service <span>✔</span></h3>
            <p>Condimentum nam ullamcorper hac dolor volutpat eu. Massa velit dictumst ligula mollis blandit luctus ornare bibendum posuere lacus.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
