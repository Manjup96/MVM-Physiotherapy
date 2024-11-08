import React from 'react'
import ServiceBanner from '../Components/Services/ServiceBanner/ServiceBanner'
import WhatWeDo from '../Components/Home/WhatWeDo/WhatWeDo'
import ServiceHeading from '../Components/Services/ServiceHeading/ServiceHedaing'
import ServiceHealingBanner from '../Components/Services/ServiceHealingBanner/ServiceHealingBanner'
import ServiceTrusted from '../Components/Services/ServiceTrusted/ServiceTrusted'
import WhatWeDoMore from '../Components/WhatWeDoMore/WhatWeDoMore'

const Services = () => {
  return (
    <div>
      <ServiceBanner />
      <ServiceHeading />
   <WhatWeDo />
   <WhatWeDoMore />
   <ServiceHealingBanner />
   <ServiceTrusted />
   
    </div>
  )
}

export default Services
