import React from 'react';
import './Healing.css'; // Import the CSS file for styling
import healingImage from './Images/healing-background.jpg'; // Replace with the actual image path

const Healing = () => {
  return (
    <div className="healing-section" style={{ backgroundImage: `url(${healingImage})` }}>
      <div className="healing-overlay">
        <div className="healing-content">
          <h1>We carry on the tradition of pure healing</h1>
          <p>
            Dictumst natoque pede consectetur inceptos fermentum. Mus himenaeos blandit magnis
            tortor imperdiet massa penatibus. Magnis rhoncus quisque montes orci dictum leo inceptos.
          </p>
          <button className="discover-button">Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default Healing;
