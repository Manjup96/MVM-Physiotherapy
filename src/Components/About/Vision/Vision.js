import React from 'react';
import './Vision.css'; // Import CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye, faHandsHelping } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

const Vision = () => {
  return (
    <section style={{ backgroundColor: "#f8f8f8" }} className="vision-section">
      <div className="vision-container">
        <div className="vision-card">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faEye} size="3x" /> {/* Vision icon */}
          </div>
          <h3>Our Vision</h3>
          <p>Aptent lectus morbi consequat metus quisque ullamcorper leo montes risus litora. Feugiat fermentum augue magnis vulputate mi sociosqu phasellus sapien potenti.</p>
        </div>

        <div className="vision-card">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faBullseye} size="3x" /> {/* Mission icon */}
          </div>
          <h3>Our Mission</h3>
          <p>Aptent lectus morbi consequat metus quisque ullamcorper leo montes risus litora. Feugiat fermentum augue magnis vulputate mi sociosqu phasellus sapien potenti.</p>
        </div>

        <div className="vision-card">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faHandsHelping} size="3x" /> {/* Motto icon */}
          </div>
          <h3>Our Motto</h3>
          <p>Aptent lectus morbi consequat metus quisque ullamcorper leo montes risus litora. Feugiat fermentum augue magnis vulputate mi sociosqu phasellus sapien potenti.</p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
