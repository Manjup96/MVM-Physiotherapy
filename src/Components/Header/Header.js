import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; 
import logo from '../../Assets/Images/company logo.jpeg'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    // Navigate to the same page and scroll to the form
    navigate('/'); // Replace with your actual route if needed
    document.getElementById('appointmentForm').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <span>
            <FontAwesomeIcon icon={faEnvelope} /> hello@chirophyzdemo.com
          </span>
          <span>
            <FontAwesomeIcon icon={faPhoneAlt} /> +1 (555) 987-6543
          </span>
        </div>
        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>

      {/* Nav Bar */}
      <div className="nav-bar">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="ChiroPhyz" />
        </div>

        {/* Hamburger Icon for Mobile/Tablet */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>

        {/* Navigation Menu */}
        <nav className={isMenuOpen ? 'nav-menu open' : 'nav-menu'}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/conditions">Conditions</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li className="book-appointment-mobile">
      <button onClick={handleAppointmentClick}>Book Appointment</button>
    </li>
          </ul>
        </nav>

        {/* Book Appointment button for Desktop */}
        <div className="book-appointment-desktop">
        <button onClick={handleAppointmentClick}>Book Appointment</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
