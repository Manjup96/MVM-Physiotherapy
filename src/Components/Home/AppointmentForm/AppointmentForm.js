import React from 'react';
import './AppointmentForm.css';

const AppointmentForm = () => {
  return (
    <div className="appointment-container" id="appointmentForm">
      <div className="appointment-info-container">
        
        {/* Information Section */}
        <div className="appointment-info-section text-white p-5">
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

        {/* Form Section */}
        <div className="appointment-form-container bg-white p-4 shadow">
          <h2 className="mb-4 text-center">Book an Appointment</h2>
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>Full Name</label>
                <input type="text" className="form-control" placeholder="Full name" />
              </div>
              <div className="col-md-6">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email address" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>Phone Number</label>
                <input type="text" className="form-control" placeholder="Phone number" />
              </div>
              <div className="col-md-6">
                <label>Preferred Date</label>
                <input type="date" className="form-control" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>Preferred Time</label>
                <select className="form-control">
                  <option value="">Select time</option>
                  <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                  <option value="afternoon">Afternoon (1:00 PM - 4:00 PM)</option>
                  <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
                </select>
              </div>
              <div className="col-md-6">
                <label>Appointment Type</label>
                <select className="form-control">
                  <option value="">Select appointment type</option>
                  <option value="consultation">Consultation</option>
                  <option value="follow-up">Follow-up</option>
                  <option value="treatment">Treatment</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>Preferred Location</label>
                <select className="form-control">
                  <option value="">Select location</option>
                  <option value="downtown">Downtown Clinic</option>
                  <option value="uptown">Uptown Clinic</option>
                  <option value="suburb">Suburb Clinic</option>
                </select>
              </div>
              <div className="col-md-6">
                <label>How Did You Hear About Us?</label>
                <select className="form-control">
                  <option value="">Select an option</option>
                  <option value="online">Online Search</option>
                  <option value="friend">Friend/Family</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="form-group mb-3">
              <label>Description</label>
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
