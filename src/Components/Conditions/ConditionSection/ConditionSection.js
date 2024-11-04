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
          <img src="https://media.istockphoto.com/id/1401141140/photo/electro-stimulation-in-physical-therapy.jpg?s=612x612&w=0&k=20&c=iaIO8sNrvQMgXuXmxC1gesuRd7DEaDE_K_LyH3QqDdA=" alt="Back Pain" className="condition-section-card-image" />
          <div className="condition-section-card-content">
            <h3>Back Pain and Sciatica Relief</h3>
            <p>Our team provides comprehensive treatment for back pain and sciatica to relieve pain and improve mobility.</p>
            <button className="condition-section-read-more-btn">Read More</button>
          </div>
        </div>
        
        <div className="condition-section-card">
          <img src="https://stock.imgix.net/8515?auto=compress,format&q=50&cs=adobergb1998" alt="Neck Pain" className="condition-section-card-image" />
          <div className="condition-section-card-content">
            <h3>Neck Pain Relief</h3>
            <p>Specialized care to alleviate neck pain and improve posture, helping you regain comfort and function.</p>
            <button className="condition-section-read-more-btn">Read More</button>
          </div>
        </div>

        <div className="condition-section-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4PqEjjqFXngNovOpEy0VIoN72RXojiuPfpGQTTnpvMe0xquEmX7UqCslR_TLpfFKCT-c&usqp=CAU" alt="Shoulder Pain" className="condition-section-card-image" />
          <div className="condition-section-card-content">
            <h3>Shoulder Pain Relief</h3>
            <p>Our therapists offer targeted shoulder pain relief to help restore strength, range of motion, and reduce discomfort.</p>
            <button className="condition-section-read-more-btn">Read More</button>
          </div>
        </div>

        <div className="condition-section-card">
          <img src="https://www.natural-cure.org/wp-content/uploads/Reflex-600x395.jpg" alt="Balance and Gait Disorders" className="condition-section-card-image" />
          <div className="condition-section-card-content">
            <h3>Balance and Gait Disorders</h3>
            <p>Comprehensive therapy to improve balance, stability, and walking patterns, restoring confidence in movement.</p>
            <button className="condition-section-read-more-btn">Read More</button>
          </div>
        </div>

        <div className="condition-section-card">
          <img src="https://orthopedicandbalancetherapy.com/wp-content/uploads/2020/03/arthritis-pain-0320-1280x500-1.jpg" alt="Arthritis Pain Relief" className="condition-section-card-image" />
          <div className="condition-section-card-content">
            <h3>Arthritis Pain Relief</h3>
            <p>Personalized treatments to manage arthritis pain, improve flexibility, and enhance your quality of life.</p>
            <button className="condition-section-read-more-btn">Read More</button>
          </div>
        </div>

        <div className="condition-section-card">
          <img src="https://cdn.painscale.com/cms/imgs/0f4fa4d0-d3e6-11ed-a818-6ba56afe2269.jpg" alt="Chronic Pain Relief" className="condition-section-card-image" />
          <div className="condition-section-card-content">
            <h3>Chronic Pain Relief</h3>
            <p>Our approach helps manage chronic pain, restore functionality, and improve overall quality of life.</p>
            <button className="condition-section-read-more-btn">Read More</button>
          </div>
        </div>

        <div className="condition-section-card">
          <img src="https://t4.ftcdn.net/jpg/03/82/25/91/360_F_382259175_YzJvLpdEKBPvDnhVbArSj6jyb61wcMi1.jpg" alt="Fibromyalgia" className="condition-section-card-image" />
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
