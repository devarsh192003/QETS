import React from 'react'
import Back from "../components/Back"

import img from "../images/img6.jpeg"

function Csv() {
  return (
    <div className='csv'>
          <Back name='CSV' title='Computer Science and Validation' cover={img} />
          <section class="error-container">
    <span>4</span>
    <span><span class="screen-reader-text">0</span></span>
    <span>4</span>
  </section>
  <h1 className='pagenotfound'>Page is in developement</h1>
  <div class="link-container">
    <a target="_blank" href="/" class="more-link">GO to the home page</a>
  </div>
            
        
    </div>
  )
}

export default Csv