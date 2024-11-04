import React from 'react';
import './ConditionSection.css'; // Import the CSS file for styling
import BackPainImage from './Images/ManualTherapyImage.jpg'; 
import NeckPainImage from './Images/PostSurgeryRehabImage.jpg'; 
import ShoulderPainImage from './Images/SportsRehabImage.jpg'; 
import ArthritisPainImage from './Images/PostSurgeryRehabImage.jpg'; 

const ConditionSection = () => {
  return (
    <div className="condition-section">
      {/* Centered Heading */}
      <div className="condition-section-header">
        <h4>CONDITIONS WE TREAT</h4>
      </div>

      {/* Cards container */}
      <div className="condition-section-cards-container">
        <div className="condition-section-card">
          <img src={BackPainImage} alt="Back Pain" className="condition-section-card-image" />
          <div className="condition-section-card-content">
            <h3>Back Pain and Sciatica Relief</h3>
            <p>Our team provides comprehensive treatment for back pain and sciatica to relieve pain and improve mobility.</p>
            <button className="condition-section-read-more-btn">Read More</button>
          </div>
        </div>
        
        <div className="condition-section-card">
          <img src={NeckPainImage} alt="Neck Pain" className="condition-section-card-image" />
          <div className="condition-section-card-content">
            <h3>Neck Pain Relief</h3>
            <p>Specialized care to alleviate neck pain and improve posture, helping you regain comfort and function.</p>
            <button className="condition-section-read-more-btn">Read More</button>
          </div>
        </div>

        <div className="condition-section-card">
          <img src={ShoulderPainImage} alt="Shoulder Pain" className="condition-section-card-image" />
          <div className="condition-section-card-content">
            <h3>Shoulder Pain Relief</h3>
            <p>Our therapists offer targeted shoulder pain relief to help restore strength, range of motion, and reduce discomfort.</p>
            <button className="condition-section-read-more-btn">Read More</button>
          </div>
        </div>

        <div className="condition-section-card">
          <img src={BackPainImage} alt="Balance and Gait Disorders" className="condition-section-card-image" />
          <div className="condition-section-card-content">
            <h3>Balance and Gait Disorders</h3>
            <p>Comprehensive therapy to improve balance, stability, and walking patterns, restoring confidence in movement.</p>
            <button className="condition-section-read-more-btn">Read More</button>
          </div>
        </div>

        <div className="condition-section-card">
          <img src={ArthritisPainImage} alt="Arthritis Pain Relief" className="condition-section-card-image" />
          <div className="condition-section-card-content">
            <h3>Arthritis Pain Relief</h3>
            <p>Personalized treatments to manage arthritis pain, improve flexibility, and enhance your quality of life.</p>
            <button className="condition-section-read-more-btn">Read More</button>
          </div>
        </div>

        <div className="condition-section-card">
          <img src={ShoulderPainImage} alt="Chronic Pain Relief" className="condition-section-card-image" />
          <div className="condition-section-card-content">
            <h3>Chronic Pain Relief</h3>
            <p>Our approach helps manage chronic pain, restore functionality, and improve overall quality of life.</p>
            <button className="condition-section-read-more-btn">Read More</button>
          </div>
        </div>

        <div className="condition-section-card">
          <img src={NeckPainImage} alt="Fibromyalgia" className="condition-section-card-image" />
          <div className="condition-section-card-content">
            <h3>Fibromyalgia</h3>
            <p>Specialized therapies to alleviate symptoms of fibromyalgia, enhancing comfort and daily functioning.</p>
            <button className="condition-section-read-more-btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConditionSection;
