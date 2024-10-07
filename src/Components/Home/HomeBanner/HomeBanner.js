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
      subtitle: 'Fames magnis enim eget torquent aenean accumsan. Consequat feugiat scelerisque vel dignissim auctor non tempor.',
    },
    {
      imageUrl: Banner2,
      title: 'Discover Our Holistic Healing Techniques',
      subtitle: 'Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.',
    },
    {
      imageUrl: Banner3,
      title: 'Experience Comprehensive Wellness Care',
      subtitle: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
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
