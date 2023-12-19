import React from 'react'
import Back from "../components/Back"
import Heading from "../components/Heading"
import img from "../images/about.jpg"

function Flow() {
  return (
    <div>Flow
          <Back name='Flow' title='Flow Calibaration' cover={img} />
          <section class="error-container">
    <span>4</span>
    <span><span class="screen-reader-text">0</span></span>
    <span>4</span>
  </section>
  <h1 className='pagenotfound'>Page is in developement</h1>
  <div class="link-container">
    <a target="_blank" href="https://www.silocreativo.com/en/creative-examples-404-error-css/" class="more-link">Visit the original article</a>
  </div>
    </div>
  )
}

export default Flow