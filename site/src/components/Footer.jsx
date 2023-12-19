import React from "react";
import { NavLink } from "react-router-dom";
import { footerdata } from "./footerdata";
import "./footer.css";

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
          <div className="paragraph">
            <p> QE TECHNICAL SOLUTIONS provides calibrations for a broad array of disciplines and instruments, allowing you to fulfill your calibration needs from a single, reliable vendor.</p>
          </div>

          {footerdata.map((val, index) => (
            <div className='box' key={index} >
              <h3>{val.title}</h3>
              <ul>  
                {val.text.map((items, i) => (
                  <li key={i} className="link">
                    <NavLink className="navlink" to={items.link}>{items.list}</NavLink>
                  </li>
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
  );
};

export default Footer;
