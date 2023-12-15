import React from 'react'
import Back from '../components/Back'
import Heading from '../components/Heading'
import img from '../images/img10.jpeg'
import CardsGrid from './CardsGrid'

function Industries() {
  return (
    <div className='Industries'>
    <Back name='Industries' title='Industries which we serve' cover={img} />
    <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />
    
        <div className='containerflexmtop'>
        
            <div className="Contents">
          
            <p>Companies with the most  stringent quality requirements trust QE TECHNICAL SOLUTIONS to meet their calibration needs. QE TECHNICAL SOLUTIONS provides calibrations for a broad array of disciplines and instruments, allowing you to fulfill your calibration needs from a single, reliable vendor.</p>
            <p>The Laboratory is very well  equipped with state-of-the-art,  world-class, imported, and  indigenous Master instruments and  Reference Standards, Which are  employed for providing precise and  accurate calibration services to  prestigious clients.</p>
            
            </div>
           

          </div>
          <CardsGrid/>
          </div>
  )
}

export default Industries