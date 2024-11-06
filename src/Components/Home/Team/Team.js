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
      Meet our team of skilled physiotherapy doctors, dedicated to helping you regain strength and mobility. 
      With years of experience and specialized training, they provide personalized care tailored to your unique needs.
      </p>
      
      <div className="team-container">
        <div className="team-card">
          <img src="https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=" alt="Team Member 1" className="team-image" />
          <div className="team-info">
            <h3>Vicky Reese</h3>
            <p>Message Physio Therapist</p>
          </div>
        </div>
        
        <div className="team-card">
          <img src="https://thumbs.dreamstime.com/b/young-indian-female-doctor-showing-thumbs-up-white-background-62407006.jpg" alt="Team Member 2" className="team-image" />
          <div className="team-info">
            <h3>William Acevedo</h3>
            <p>Rehabilitation Therapist</p>
          </div>
        </div>

        <div className="team-card">
          <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D" alt="Team Member 3" className="team-image" />
          <div className="team-info">
            <h3>Thomas Stewart</h3>
            <p>Doctor of Physical Therapy</p>
          </div>
        </div>

        <div className="team-card">
          <img src="https://st2.depositphotos.com/4153545/7958/i/950/depositphotos_79581488-stock-photo-smiling-indian-doctor-woman-with.jpg" alt="Team Member 4" className="team-image" />
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
