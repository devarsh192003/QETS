import React from 'react'
import { Nav } from "rsuite/";
import "rsuite/dist/rsuite.min.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='Navbar'>
		
			<Nav>
				<div className='navcontainer'>
					<Link to='/App'><img className="logo" src= "logo.jpg" alt="logo"/></Link>
					<div className='navmenu'>
						<Nav.Menu title="Calibaration Services" active>
							<Link to = "/Paperless">
							<Nav.Menu title="Paperless">
							<Link to="/Pressure"><Nav.Item>Pressure</Nav.Item></Link>
								<Link to="/Thermal"><Nav.Item>Thermal</Nav.Item></Link>
								<Link to="/Flow"><Nav.Item>Flow</Nav.Item></Link>
								<Link to="/Electrotechnical"><Nav.Item>Electrotechnical</Nav.Item></Link>
							</Nav.Menu>	
							</Link>
							<Link to="/Onsite"><Nav.Item>On-site</Nav.Item></Link>	
						</Nav.Menu>	
						<Nav.Menu title="Validation Services">
						<Link to="/Csv"><Nav.Item>CSV</Nav.Item></Link>
						<Link to="/Cqv"><Nav.Item>CQV</Nav.Item></Link>
						<Link to="/Thermal2"><Nav.Item>Thermal</Nav.Item></Link>
						</Nav.Menu>
						</div>
						<div className='navitems'>
						<Link to="/Edc"><Nav.Item>Engineering Design & Consulting</Nav.Item></Link>
						<Link to="/productsales"><Nav.Item>Product Sales</Nav.Item></Link>
						<Link to="/Industries"><Nav.Item>Industries</Nav.Item></Link>
						<Link to="/Customer"><Nav.Item>Customer Portal</Nav.Item></Link>
						<Link to="/About"><Nav.Item>About Us</Nav.Item></Link>
						<Link to="/Contact"><Nav.Item>Contact Us</Nav.Item></Link>
						</div>
						</div>
				</Nav>
			</div>
		
	);
}


export default Navbar