import React from 'react'
import Back from "../components/Back"
import Heading from "../components/Heading"
import img from "../images/about.jpg"

function Edc() {
  return (
    <div className='edc'>
          <Back name='About Us' title='EDC Calibaration' cover={img} />
          <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />
          <div className="Contents">
          
        <div className='containerflexmtop'>
          <div className='left row'>
          
            
    
            </div>
          </div>
        </div>
    </div>
  )
}

export default Edc