import React from "react";
import { Nav } from "rsuite/";
import "rsuite/dist/rsuite.min.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <Nav>
        <div className="navcontainer">
          <Link to="/" >
            <img className="logo" src="logo.jpg" alt="logo" />
          </Link>
          <div className="navmenu">
            <Nav.Menu title="Calibaration Services">
              <Link to="/Paperless" className="navlink">
                <Nav.Menu title="Paperless">
                  <Link to="/Pressure" className="navlink">
                    <Nav.Item>Pressure</Nav.Item>
                  </Link>
                  <Link to="/Thermal" className="navlink">
                    <Nav.Item>Thermal</Nav.Item>
                  </Link>
                  <Link to="/Flow" className="navlink">
                    <Nav.Item>Flow</Nav.Item>
                  </Link>
                  <Link to="/Electrotechnical" className="navlink">
                    <Nav.Item>Electrotechnical</Nav.Item>
                  </Link>
                </Nav.Menu>
              </Link>
              <Link to="/Onsite" className="navlink">
                <Nav.Item>On-site</Nav.Item>
              </Link>
            </Nav.Menu>
            <Nav.Menu title="Validation Services">
              <Link to="/Csv">
                <Nav.Item>CSV</Nav.Item>
              </Link>
              <Link to="/Cqv">
                <Nav.Item>CQV</Nav.Item>
              </Link>
              <Link to="/Thermal2">
                <Nav.Item>Thermal</Nav.Item>
              </Link>
            </Nav.Menu>
          </div>
          <div className="navitems">
			
            
              <Nav.Item><Link to="/Edc" className="navlink">Engineering Design & Consulting</Link></Nav.Item>
            
              <Nav.Item><Link to="/Productsales" className="navlink">Product Sales</Link></Nav.Item>
            
              <Nav.Item><Link to="/Industries" className="navlink">Industries</Link></Nav.Item>
            
              <Nav.Item><Link to="/Customer" className="navlink">Customer Portal</Link></Nav.Item>
            
              <Nav.Item><Link to="/About" className="navlink">About Us</Link></Nav.Item>
            
              <Nav.Item><Link to="/Contact" className="navlink">Contact Us</Link></Nav.Item>
          </div>
        </div>
      </Nav>
    </div>
  );
}

export default Navbar;
