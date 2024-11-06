import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contactform-container">
      <div className="contactform-card">
        <h2>Send us a message</h2>
        <p>
        Send us a message and let us know how we can assist you on your path to better health.
        </p>
        <form className="contactform">
          <div className="contactform-row">
            <div className="contactform-group">
              <label>Your Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="contactform-group">
              <label>Email Address</label>
              <input type="email" placeholder="Your email" />
            </div>
          </div>
          <div className="contactform-row">
            <div className="contactform-group">
              <label>Phone</label>
              <input type="text" placeholder="Phone number" />
            </div>
            <div className="contactform-group">
              <label>Subject</label>
              <input type="text" placeholder="Subject" />
            </div>
          </div>
          <div className="contactform-group">
            <label>Message</label>
            <textarea placeholder="Your message" rows="4"></textarea>
          </div>
          <button type="submit" className="contactform-btn">
            <i className="fas fa-envelope"></i> Send Message
          </button>
        </form>
      </div>

      <div className="contactform-card2">
        <h2>Get in touch with us</h2>
        <p>
          Reach out if you have any questions or need assistance. We are here to help!
        </p>
        <div className="overlay">
          <h3>We're here to help!</h3>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
