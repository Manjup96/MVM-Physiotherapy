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
            Dui turpis habitant cras commodo placerat vel risus. Lacinia cursus si volutpat aenean laoreet praesent dignissim habitasse quisque cras commodo.
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
                    Elit amet dui eget erat nibh platea velit primis interdum at. Sollicitudin consectetur commodo quam imperdiet ut. Nullam si praesent maximus potenti aliquet erat tellus.
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
                    Elit amet dui eget erat nibh platea velit primis interdum at. Sollicitudin consectetur commodo quam imperdiet ut. Nullam si praesent maximus potenti aliquet erat tellus.
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
                    Elit amet dui eget erat nibh platea velit primis interdum at. Sollicitudin consectetur commodo quam imperdiet ut. Nullam si praesent maximus potenti aliquet erat tellus.
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
                    Elit amet dui eget erat nibh platea velit primis interdum at. Sollicitudin consectetur commodo quam imperdiet ut. Nullam si praesent maximus potenti aliquet erat tellus.
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
