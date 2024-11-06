import React from 'react';
import './Vision.css'; // Import CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye, faHandsHelping } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

const Vision = () => {
  return (
    <section style={{ backgroundColor: "#f8f8f8" }} className="vision-section">
      <div className="vision-container">
        <div className="vision-card">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faEye} size="3x" /> {/* Vision icon */}
          </div>
          <h3>Our Vision</h3>
          <p>Our vision is to empower individuals to live healthier, pain-free lives through exceptional physiotherapy and holistic care. We are committed to advancing wellness in our community by providing innovative, compassionate treatments that restore balance and enhance overall well-being.</p>
        </div>

        <div className="vision-card">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faBullseye} size="3x" /> {/* Mission icon */}
          </div>
          <h3>Our Mission</h3>
          <p>Our mission is to provide high-quality, personalized physiotherapy care that promotes healing, restores mobility, and enhances quality of life. Through compassion, expertise, and a commitment to innovation, we aim to empower our patients to achieve lasting wellness and lead active, fulfilling lives.</p>
        </div>

        <div className="vision-card">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faHandsHelping} size="3x" /> {/* Motto icon */}
          </div>
          <h3>Our Motto</h3>
          <p>Our motto: Healing Beyond Limits. We’re dedicated to helping you overcome challenges and achieve true well-being, providing compassionate care and innovative treatments to support every step of your recovery journey.</p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
