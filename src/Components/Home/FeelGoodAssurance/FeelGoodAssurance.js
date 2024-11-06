import React from 'react';
import './FeelGoodAssurance.css';  // Ensure this CSS file is created and linked
import Doctor_image from '../FeelGoodAssurance/Images/Doctor_image.jpg'

const FeelGoodAssurance = () => {
  return (
    <div className="feel-good-container">
      <div className="feel-good-content">
        <h1>
          "We not only make you feel good. We make sure that you are good."
        </h1>
        <p>
        We go beyond simply helping you feel better; our commitment is to ensure you truly get better. 
        With a focus on long-term wellness, our team provides care that heals, strengthens, 
        and supports your journey to lasting health.
        </p>
      </div>
      <div className="feel-good-image">
        <img src="https://thumbs.dreamstime.com/b/young-indian-female-doctor-showing-thumbs-up-white-background-62407006.jpg" alt="Doctors" />
      </div>
    </div>
  );
};

export default FeelGoodAssurance;
