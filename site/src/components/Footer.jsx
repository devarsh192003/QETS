import React from "react"
import { footerdata} from "./footerdata"
import "./footer.css"

const Footer = () => {
  return (
    <>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' /></div>
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='inputflex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            
          </div>

          {footerdata.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 QE Technical Solutions.</span>
      </div>
    </>
  )
}

export default Footer
