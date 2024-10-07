import React from 'react';
import './Team.css'; // Import your custom styles here
import TeamMember1 from './Images/doctor1.jpg'; // Replace with your actual image paths
import TeamMember2 from './Images/doctor2.jpg'; // Replace with your actual image paths
import TeamMember3 from './Images/doctor3.jpg'; // Replace with your actual image paths
import TeamMember4 from './Images/doctor4.jpg'; // Replace with your actual image paths

const Team = () => {
  return (
    <div className="team-section">
      <h4>Meet Our Team</h4>
      <p className="team-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi
        quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam 
        necessitatibus saepe in ab? Repellat!
      </p>
      
      <div className="team-container">
        <div className="team-card">
          <img src={TeamMember1} alt="Team Member 1" className="team-image" />
          <div className="team-info">
            <h3>Vicky Reese</h3>
            <p>Message Physio Therapist</p>
          </div>
        </div>
        
        <div className="team-card">
          <img src={TeamMember2} alt="Team Member 2" className="team-image" />
          <div className="team-info">
            <h3>William Acevedo</h3>
            <p>Rehabilitation Therapist</p>
          </div>
        </div>

        <div className="team-card">
          <img src={TeamMember3} alt="Team Member 3" className="team-image" />
          <div className="team-info">
            <h3>Thomas Stewart</h3>
            <p>Doctor of Physical Therapy</p>
          </div>
        </div>

        <div className="team-card">
          <img src={TeamMember4} alt="Team Member 4" className="team-image" />
          <div className="team-info">
            <h3>Kristina Ward</h3>
            <p>Doctor of Physical Therapy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
