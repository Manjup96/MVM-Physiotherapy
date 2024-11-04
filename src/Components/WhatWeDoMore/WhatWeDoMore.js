import React from 'react';
import './WhatWeDoMore.css';
// import ManualTherapyImage from './Images/ManualTherapyImage.jpg'; 
// import SportsRehabImage from './Images/SportsRehabImage.jpg'; 
// import PostSurgeryRehabImage from './Images/PostSurgeryRehabImage.jpg'; 
import ExerciseTherapyImage from './Images/PostSurgeryRehabImage.jpg'; 

const WhatWeDoMore = () => {
  return (
    <div className="what-we-do-more-cards-container">
  
      <div className="what-we-do-more-card">
        <img src={ExerciseTherapyImage} alt="Exercise Therapy" className="what-we-do-more-card-image" />
        <div className="what-we-do-more-card-content">
          <h3>SmartFit</h3>
          <p>Our therapists create personalized exercise routines to help strengthen muscles, improve balance, and enhance flexibility.</p>
          <button className="what-we-do-more-read-more-btn">Read More</button>
        </div>
      </div>

      <div className="what-we-do-more-card">
        <img src={ExerciseTherapyImage} alt="Exercise Therapy" className="what-we-do-more-card-image" />
        <div className="what-we-do-more-card-content">
          <h3>Therapeutic Exercise</h3>
          <p>Our therapists create personalized exercise routines to help strengthen muscles, improve balance, and enhance flexibility.</p>
          <button className="what-we-do-more-read-more-btn">Read More</button>
        </div>
      </div>  

      <div className="what-we-do-more-card">
        <img src={ExerciseTherapyImage} alt="Exercise Therapy" className="what-we-do-more-card-image" />
        <div className="what-we-do-more-card-content">
          <h3>Manipulation</h3>
          <p>Our therapists create personalized exercise routines to help strengthen muscles, improve balance, and enhance flexibility.</p>
          <button className="what-we-do-more-read-more-btn">Read More</button>
        </div>
      </div> 

      <div className="what-we-do-more-card">
        <img src={ExerciseTherapyImage} alt="Exercise Therapy" className="what-we-do-more-card-image" />
        <div className="what-we-do-more-card-content">
          <h3>FCE's (Functional Capacity Evaluations)</h3>
          <p>Our therapists create personalized exercise routines to help strengthen muscles, improve balance, and enhance flexibility.</p>
          <button className="what-we-do-more-read-more-btn">Read More</button>
        </div>
      </div> 

      <div className="what-we-do-more-card">
        <img src={ExerciseTherapyImage} alt="Exercise Therapy" className="what-we-do-more-card-image" />
        <div className="what-we-do-more-card-content">
          <h3>COVID-19 Rehabilitation and Prevention Program</h3>
          <p>Our therapists create personalized exercise routines to help strengthen muscles, improve balance, and enhance flexibility.</p>
          <button className="what-we-do-more-read-more-btn">Read More</button>
        </div>
      </div> 

      <div className="what-we-do-more-card">
        <img src={ExerciseTherapyImage} alt="Exercise Therapy" className="what-we-do-more-card-image" />
        <div className="what-we-do-more-card-content">
          <h3>Proprioception Therapy</h3>
          <p>Our therapists create personalized exercise routines to help strengthen muscles, improve balance, and enhance flexibility.</p>
          <button className="what-we-do-more-read-more-btn">Read More</button>
        </div>
      </div> 

      <div className="what-we-do-more-card">
        <img src={ExerciseTherapyImage} alt="Exercise Therapy" className="what-we-do-more-card-image" />
        <div className="what-we-do-more-card-content">
          <h3>Proprioception Therapy</h3>
          <p>Our therapists create personalized exercise routines to help strengthen muscles, improve balance, and enhance flexibility.</p>
          <button className="what-we-do-more-read-more-btn">Read More</button>
        </div>
      </div> 
    </div>
  )
}

export default WhatWeDoMore;
