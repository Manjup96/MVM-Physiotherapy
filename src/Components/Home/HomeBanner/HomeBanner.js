import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // carousel styles
import './HomeBanner.css';
import { useNavigate } from 'react-router-dom';

// Correctly import your images
import Banner1 from './Images/Banner1.jpg';
import Banner2 from './Images/Banner2.jpg';
import Banner3 from './Images/Banner1.jpg'; // Ensure Banner3.jpg also exists

const HomeBanner = () => {
  const banners = [
    {
      imageUrl: Banner1,
      title: 'We Heal With The Latest Innovations In Physiotherapy',
      subtitle: 'We heal with the latest innovations in physiotherapy, incorporating advanced techniques and cutting-edge technology to deliver effective, personalized treatments.',
    },
    {
      imageUrl: Banner2,
      title: 'Discover Our Holistic Healing Techniques',
      subtitle: 'Discover our holistic healing techniques, designed to restore balance and promote overall well-being.',
    },
    {
      imageUrl: Banner3,
      title: 'Experience Comprehensive Wellness Care',
      subtitle: 'Experience comprehensive wellness care that goes beyond treating symptoms to enhance your overall health.',
    }
  ];

  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    // Navigate to the same page and scroll to the form
    navigate('/'); // Replace with your actual route if needed
    document.getElementById('appointmentForm').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
      >
        {banners.map((banner, index) => (
          <div key={index} className="banner-container" style={{ backgroundImage: `url(${banner.imageUrl})` }}>
            <div className="banner-content">
              <h1>{banner.title}</h1>
              <p>{banner.subtitle}</p>
              <button className="btn btn-success" onClick={handleAppointmentClick}>Book Appointment</button>
             
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeBanner;
