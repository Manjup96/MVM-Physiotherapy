import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.css'; 
import DoctorImage from './Images/DoctorImage.jpg'; 
import profile1 from './Images/profile1.jpg'; 
import profile2 from './Images/profile2.jpg'; 
import profile3 from './Images/profile3.jpg'; 
import profile4 from './Images/profile4.jpg'; 

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="testimonials-section">
      <div className="testimonials-content">
        {/* Left section: Image */}
        <div className="testimonials-image">
          <img src={DoctorImage} alt="Doctor with patient" />
        </div>

        {/* Right section: Testimonial Cards */}
        <div className="testimonials-text">
          <h2>Chiropractic Patient Testimonials</h2>
          <p>
          Here's what our chiropractic patients have to say about their experience:
          </p>
          
          {/* Testimonial Cards inside the Slider */}
          <div className="testimonial-slider">
            <Slider {...sliderSettings}>
              <div>
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <img src={profile1} alt="Robert Adams" className="testimonial-photo" />
                    <div>
                      <h3>Robert Adams</h3>
                      <span>Jakarta</span>
                    </div>
                  </div>
                  <p>
                    "I’ve struggled with back pain for years, but after just a few sessions, I’m feeling like myself again. The team’s care and expertise made all the difference!" – Sarah T."
                  </p>
                </div>
              </div>

              <div>
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <img src={profile2} alt="Anita Costin" className="testimonial-photo" />
                    <div>
                      <h3>Anita Costin</h3>
                      <span>Bandung</span>
                    </div>
                  </div>
                  <p>
                    "I never realized how much tension I was carrying in my neck and shoulders until I saw the chiropractor here. Now, I feel more relaxed and pain-free!" – John M."
                  </p>
                </div>
              </div>

              <div>
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <img src={profile3} alt="Robert Adams" className="testimonial-photo" />
                    <div>
                      <h3>Robert Adams</h3>
                      <span>Jakarta</span>
                    </div>
                  </div>
                  <p>
                    "The personalized approach really made me feel heard and cared for. Thanks to chiropractic care, I can enjoy daily activities without discomfort!" – Emily R."
                  </p>
                </div>
              </div>

              <div>
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <img src={profile4} alt="Anita Costin" className="testimonial-photo" />
                    <div>
                      <h3>Anita Costin</h3>
                      <span>Bandung</span>
                    </div>
                  </div>
                  <p>
                    "The personalized approach really made me feel heard and cared for. Thanks to chiropractic care, I can enjoy daily activities without discomfort!" – Emily R."
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
