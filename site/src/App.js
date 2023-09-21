import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Cqv from "./pages/Cqv";
import Csv from "./pages/Csv";
import Thermal from "./pages/Thermal";
import Thermal2 from "./pages/Thermal2";
import Onsite from "./pages/Onsite";
import Productsales from "./pages/Productsales";
import Pressure from "./pages/Pressure";
import Paperless from "./pages/Paperless";
import Industries from "./pages/Industries";
import Flow from "./pages/Flow";
import Electrotechnical from "./pages/Electrotechnical";
import Edc from "./pages/Edc";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
	return (
	
			<div className="App">
            <Navbar/>
				
	      <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path="/" element={<App />} />
          <Route path="/About" element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path="/Cqv" element={<Cqv/>} />
          <Route path="/Csv" element={<Csv/>} />
          <Route path="/Electrotechnical" element={<Electrotechnical/>} />
          <Route path="/Industries" element={<Industries/>} />
          <Route path="/Flow" element={<Flow />} />
          <Route path="/Paperless" element={<Paperless />} />
          <Route path="/Thermal" element={<Thermal />} />
          <Route path="/Thermal2" element={<Thermal2 />} />
          <Route path="/Edc" element={<Edc />} />
          <Route path="/Pressure" element={<Pressure />} />
          <Route path="/Onsite" element={<Onsite />} />
          <Route path="/productsales" element={<Productsales />} />
          
		  </Routes>
		  
					
			</div>
		
	);
}

			