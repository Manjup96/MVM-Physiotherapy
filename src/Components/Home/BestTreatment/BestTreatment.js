import React from 'react';
import './BestTreatment.css';  // Link to the CSS file
import backgroundImage from '../BestTreatment/Images/backgroundImage.jpg'

const BestTreatment = () => {
  return (
    <div className="physiotherapy-banner">
      <div className="banner-background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="banner-content">
        <h1>Get the best treatment from the most experienced physiotherapist</h1>
        <p>
          Velit letius montes sodales nec purus erat. Adipiscing eleifend dui 
          inceptos hendrerit mauris at commodo potenti ullamcorper senectus. 
          Habitasse aliquet orci consequat faucibus ipsum vestibulum tincidunt dictumst.
        </p>
        <button className="BestTreatment-button">Get Started</button>
      </div>
    </div>
  );
};

export default BestTreatment;
