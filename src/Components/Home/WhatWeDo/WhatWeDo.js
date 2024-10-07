import React from 'react';
import './WhatWeDo.css'; // Import your CSS for styling
import ManualTherapyImage from './Images/ManualTherapyImage.jpg'; 
import SportsRehabImage from './Images/SportsRehabImage.jpg'; 
import PostSurgeryRehabImage from './Images/PostSurgeryRehabImage.jpg'; 
import ExerciseTherapyImage from './Images/PostSurgeryRehabImage.jpg'; 

const WhatWeDo = () => {
  return (
    <div className="what-we-do-section">
      {/* Centered Heading */}
      <div className="what-we-do">
        <h4>WHAT WE DO</h4>
      </div>

      {/* Cards container */}
      <div className="cards-container">
        <div className="whtwedo-card">
          <img src={ManualTherapyImage} alt="Manual Therapy" className="whtwedo-card-image" />
          <div className="whtwedo-card-content">
            <h3>Manual Therapy</h3>
            <p>Manual therapy uses hands-on techniques to relieve pain, improve range of motion, and address muscle imbalances.</p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
        
        <div className="whtwedo-card">
          <img src={SportsRehabImage} alt="Sports Rehabilitation" className="whtwedo-card-image" />
          <div className="whtwedo-card-content">
            <h3>Sports Rehabilitation</h3>
            <p>Our sports rehabilitation services help athletes recover from injuries and improve performance through targeted therapy.</p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>

        <div className="whtwedo-card">
          <img src={PostSurgeryRehabImage} alt="Post-Surgery Rehabilitation" className="whtwedo-card-image" />
          <div className="whtwedo-card-content">
            <h3>Post-Surgery Rehabilitation</h3>
            <p>Recover faster after surgery with customized rehabilitation plans designed to restore strength and mobility.</p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>

        <div className="whtwedo-card">
          <img src={ExerciseTherapyImage} alt="Exercise Therapy" className="whtwedo-card-image" />
          <div className="whtwedo-card-content">
            <h3>Exercise Therapy</h3>
            <p>Our therapists create personalized exercise routines to help strengthen muscles, improve balance, and enhance flexibility.</p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
