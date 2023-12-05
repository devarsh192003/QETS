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
              <img src={process.env.PUBLIC_URL + "/logo.jpg"} alt='' />
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
