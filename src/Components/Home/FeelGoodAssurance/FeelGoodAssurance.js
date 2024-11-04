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
          Inceptos fames enim consectetur ac nullam donec. Ullamcorper egestas 
          curabitur dui convallis hac cubilia phasellus senectus at suspendisse.
          Mi venenatis ipsum purus interdum platea faucibus. Luctus nascetur 
          inceptos tristique lectus risus pede.
        </p>
      </div>
      <div className="feel-good-image">
        <img src="https://thumbs.dreamstime.com/b/young-indian-female-doctor-showing-thumbs-up-white-background-62407006.jpg" alt="Doctors" />
      </div>
    </div>
  );
};

export default FeelGoodAssurance;
