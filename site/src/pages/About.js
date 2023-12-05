import React from "react"
import Back from "../components/Back"
import Heading from "../components/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <div className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='containerflexmtop'>
          <div className='left row'>
            <div className="Contents">
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />
    
  
            <p>Companies with the most stringent quality requirements trust QE TECHNICAL SOLUTIONS to meet their calibration needs. QE TECHNICAL SOLUTIONS provides calibrations for a broad array of disciplines and instruments, allowing you to fulfill your calibration needs from a single, reliable vendor.</p>
            <p>The Laboratory is very well  equipped with state-of-the-art,  world-class, imported, and  indigenous Master instruments and  Reference Standards, Which are  employed for providing precise and  accurate calibration services to  prestigious clients.</p>
          
            </div>
          </div>
          <div className='right row'>
            <img  className='aboutimg' src='./immio.jpg' alt='' />
          </div>
          </div>
        </div>
    </>
  )
}

export default About
