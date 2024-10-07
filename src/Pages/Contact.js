import React from 'react'
import ContactBanner from '../Components/Contact/ContactBanner/ContactBanner'
import ContactLocation from '../Components/Contact/ContactLocation/ContactLocation'
import ContactForm from '../Components/Contact/ContactForm/ContactForm'
import AppointmentForm from '../Components/Home/AppointmentForm/AppointmentForm'

const Contact = () => {
  return (
    <div>
      <ContactBanner />
      <ContactLocation />
      <ContactForm />
  
    </div>
  )
}

export default Contact
