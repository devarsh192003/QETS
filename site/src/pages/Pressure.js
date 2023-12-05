
import React from "react"
import Back from "../components/Back"
import Heading from "../components/Heading"
import img from "../images/img2.jpg"
import "./about.css"

const Pressure = () => {
  return (
    <>
      <div className='about'>
        <Back name='Pressure' title='Pressure Calibaration?' cover={img} />
        <div className='containerflexmtop'>
          <div className='left row'>
            <div className="Contents">
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />
    
  
            <p>At QE TECHNICAL SOLUTIONS we understand that precise and accurate pressure measurements
            are essential to our customers' in-process safety, compliance, and management efficiency. 
            Our absolute pressure, gage pressure, and low pressure vacuum capabilities are ISO/IEC 17025-
            2017 accredited, and whether we're calibrating your pressure transmitters, deadweight testers,
            pressure gauges, or transducers, you can be assured that our hydraulic and pneumatic pressure
            calibrations will be performed with true SI unit.</p>
            <p>Our pressure and vacuum calibrations are also ISO 9001 calibration-compliant, performed by 
              our highly-trained technical staff and industry-renowned metrology and quality experts.</p>
              <ul className="roundedlist">
                <li>Pressure and Vacuum Gauges</li>
                <li>Pressure Modules</li>
                <li>Digital Pressure Gauges</li>
                <li>Digital Manometers, Barometers, Valves, and Pressure Calibrators</li>
                <li>Analog Pressure and Test Gauges</li>
                <li>Pressure Sensors</li>
                <li>Process Gauges</li>
            </ul>      
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

export default Pressure
