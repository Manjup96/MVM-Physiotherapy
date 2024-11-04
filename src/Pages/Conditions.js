import React from 'react'
import ConditionBanner from '../Components/Conditions/ConditionBanner/ConditionBanner'
import ConditionHeading from '../Components/Conditions/ConditionHeading/ConditionHeading'
import ServiceHealingBanner from '../Components/Services/ServiceHealingBanner/ServiceHealingBanner'
import ConditionSection from '../Components/Conditions/ConditionSection/ConditionSection'



const Conditions = () => {
  return (
    <div>
        <ConditionBanner />
        <ConditionHeading />
        <ConditionSection/>
        <ServiceHealingBanner />
      
    </div>
  )
}

export default Conditions
