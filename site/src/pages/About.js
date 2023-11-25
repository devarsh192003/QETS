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
    
  
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            
            <button className='btn2'>More About Us</button>
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
