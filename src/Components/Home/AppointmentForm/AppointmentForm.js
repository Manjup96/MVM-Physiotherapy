import React from 'react';
import './AppointmentForm.css';

const AppointmentForm = () => {
  return (
    <div className="appointment-container" id="appointmentForm">
      <div className="row appointment-info-container">
        
        {/* Right side - Information */}
        <div className="col-md-12 appointment-info-section text-white p-5">
          <h1>We treat you today to give you a pain-free tomorrow</h1>
          <p className="appointment-info-paragraph">
            Bibendum quam libero donec natoque dictumst non nisi amet parturient. Habitant conubia per tempor suscipit ullamcorper penatibus mauris curae tortor. Nascetur vel himenaeos vitae bibendum pulvinar hendrerit ornare porta erat.
          </p>
          <p className="appointment-info-paragraph">
            Dapibus maximus eget fringilla efficitur dui proin tortor amet blandit donec. Volutpat finibus dui libero justo vulputate faucibus praesent nostra etiam. Suspendisse finibus consequat lobortis facilisi ridiculus senectus vestibulum.
          </p>
          
          {/* Contact Information */}
          <div className="appointment-contact-info-section mt-4">
            <div className="appointment-contact-box">
              <i className="fas fa-phone-alt appointment-contact-icon"></i>
              <div className="appointment-contact-details">
                <h5>Call Us</h5>
                <span>+1 (555) 987-6543</span>
              </div>
            </div>
            <div className="appointment-contact-box">
              <i className="fas fa-envelope appointment-contact-icon"></i>
              <div className="appointment-contact-details">
                <h5>Email Us</h5>
                <span>hello@yourdomain.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Left side - Form */}
        <div className="appointment-form-container bg-white p-4 shadow">
          <h2 className="mb-4">Book an Appointment</h2>
          <form>
            <div className="form-group mb-3">
              <label>Full Name</label>
              <input type="text" className="form-control" placeholder="Full name" />
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>Phone</label>
                <input type="text" className="form-control" placeholder="Phone number" />
              </div>
              <div className="col-md-6">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email address" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>Date</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-6">
                <label>Time</label>
                <input type="time" className="form-control" />
              </div>
            </div>
            <div className="form-group mb-3">
              <label>Message</label>
              <textarea className="form-control" rows="3" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="btn btn-success btn-block">Make an Appointment</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AppointmentForm;
