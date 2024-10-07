import React from 'react'
import HomeBanner from '../Components/Home/HomeBanner/HomeBanner'
import Introduction from '../Components/Home/Introduction/Introduction'
import FeelGoodAssurance from '../Components/Home/FeelGoodAssurance/FeelGoodAssurance'
import BestTreatment from '../Components/Home/BestTreatment/BestTreatment'
import ChooseUs from '../Components/Home/ChooseUs/ChooseUs'
import WhatWeDo from '../Components/Home/WhatWeDo/WhatWeDo'
import Team from '../Components/Home/Team/Team'
import Testimonials from '../Components/Home/Testimonials/Testimonials'
//  import ContactForm from '../Components/Home/ContactForm/ContactForm'
import AppointmentForm from '../Components/Home/AppointmentForm/AppointmentForm'


const Home = () => {
  return (
    <div>
     
      <HomeBanner />
      <Introduction /> 
      <FeelGoodAssurance />
      <BestTreatment />
      <ChooseUs />
      <WhatWeDo />
      <Team />
      <Testimonials />
      {/* <ContactForm /> */}
      <AppointmentForm />
     
    </div>
  )
}

export default Home
