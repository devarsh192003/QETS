import React from 'react'
import Back from "../components/Back"
import Heading from "../components/Heading"
import img from "../images/img6.jpeg"

function Paperless() {
  return (
    <div className='paperless'>
          <Back name='About Us' title='About Us - Who We Are?' cover={img} />
          <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />
    
        <div className='containerflexmtop'>
          <div className='left row'>
            <div className="Contents">
            
              </div>
            </div>
            </div>
    </div>
  )
}

export default Paperless