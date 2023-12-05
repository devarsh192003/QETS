import React from "react"
import Back from "../components/Back"
import Heading from "../components/Heading"
import img from "../images/img7.jpeg"
import "./about.css"

const Thermal = () => {
  return (
    <>
      <div className='about'>
        <Back name='Thermal' title='Thermal Calibaration?' cover={img} />
        <div className='containerflexmtop'>
          <div className='left row'>
            <div className="Contents">
            <p>
            Our metrology labs offer secondary/industrial level thermometer calibration, thermocouple calibration, and
            temperature transmitter calibration. We also offer reference-level SPRT probe and primary standard
            temperature calibrations by comparison to Indium, Tin, Zinc, and Aluminum fixed point reference cells. 
            </p>
            <p>Our pressure and vacuum calibrations are also ISO 9001 calibration-compliant, performed by 
              our highly-trained technical staff and industry-renowned metrology and quality experts.</p>
              <ul className="roundedlist">
              <li>RTD Calibration</li>
              <li>Themocouple calibration</li>
              <li>Dry Block, Temperature Oven, Bath, and Furnace Calibration</li>                
            </ul>  
            <Heading title='RTD Testing with Confidence' />    
            <p>You can have complete confidence in every process that our knowledgeable technicians perform.
               We maintain centrally controlled datasheets and calibration processes that are used across all
                of our labs that offer RTD calibrator capabilities. We also repeatedly check any unexpected
                results to protect your operations against out-of-tolerance production or temperature measurement inaccuracies.</p>

            <Heading title='Our Temperature Calibration Expertise' />    
            <p>we offers accredited Temperature Calibration Services in all of its India labs. In addition to a wide range of RTD capabilities, our services in the temperature discipline include: </p>
            <ul className="roundedlist">
              <li>Secondary/industrial level thermometer calibration</li>
              <li>Comprehensive thermocouple calibration from -30°C to 1200°C</li>
              <li>Secondary/industrial level thermometer calibratio</li>
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

export default Thermal
