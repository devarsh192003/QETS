import React from 'react'
import Back from "../components/Back"
import Heading from "../components/Heading"
import img from "../images/img6.jpeg"

function Edc() {
  return (
    <div className='edc'>
          <Back name='Engineering Design and Calibaration' title='Engineering Design' cover={img} />
         
          <div className="Contents">
       
          <p>
        <br />
QETS provides a comprehensive range of plant modeling services, blending various disciplines to meet the diverse needs of our clients. Our team, comprising skilled CAD professionals and design engineers, collaborates seamlessly with EPCs, engineering consultancies, and OEMs. Together, we deliver high-quality 3D modeling services, leveraging our extensive on-site experience to craft digital models that enable real-life walkthroughs. This ensures a thorough understanding of the facility well before the construction phase begins.</p>

<p>Having successfully partnered with numerous esteemed clients in India and the APAC regions, we serve as their trusted outsourcing ally for 3D design services. Our commitment to delivering top-notch results is underscored by a combination of quality assurance and timely project delivery. At the core of our work ethos is complete transparency, fostering an active and collaborative engagement throughout the project lifecycle.

</p>

<p>Situated in India, our dedicated team of qualified engineers, CAD designers, draftsmen, and project planning managers works diligently on client projects. This collaborative approach allows us to swiftly create drafts and make adjustments until we achieve the desired level of quality. Whether you're looking to construct a 3D model for enhanced visualization of your facility's concept, design, and output, rest assured that you've found the right partner. We're here to assist you and provide tailored solutions to meet your specific needs.
</p>
<Heading title = 'Softwares/Tools that we use' subtitle=''/>

<ol>
  <li>Auto Cad and other CAD tools</li>
  <li>Hexagon CADWorkx</li>
  <li>Hexagon PDS & S3D</li>
  <li>AVEVA LFM and Plant Management</li>
</ol>
          </div>
        </div>
    
  )
}

export default Edc