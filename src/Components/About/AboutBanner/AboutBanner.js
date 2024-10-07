import React from 'react';
import AboutBannerImage from './Images/AboutBanner.jpg'; 
import './AboutBanner.css';

const AboutBanner = () => {
  const bannerStyle = {
    backgroundImage: `url(${AboutBannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '400px', 
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  };

  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
  };

  return (
    <div style={bannerStyle}>
      <div style={overlayStyle}>
        <div style={contentStyle} className="about-banner-content">
          <h1>We Strive For Excellence In Physiotherapy Healing</h1>
          <div className="about-breadcrumb">
            <span>Home</span>
            <span> &gt; </span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;
