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
import Customer from "./pages/Customer";
import Footer from './components/Footer';
import Home from './pages/Home';
function App() {
	return (
	
			<div className="App">
        
            <Navbar/>

	      <Routes>
          
          <Route exact path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path='/Contact' element={<Contact />} />
          <Route path="/Cqv" element={<Cqv/>} />
          <Route path="/Csv" element={<Csv/>} />
          <Route path="/Electrotechnical" element={<Electrotechnical/>} />
          <Route path="/Industries" element={<Industries/>} />
          <Route path="/Flow" element={<Flow/>} />
          <Route path="/Paperless" element={<Paperless/>} />
          <Route path="/Thermal" element={<Thermal/>} />
          <Route path="/Thermal2" element={<Thermal2/>} />
          <Route path="/Edc" element={<Edc/>} />
          <Route path="/Pressure" element={<Pressure/>} />
          <Route path="/Onsite" element={<Onsite/>} />
          <Route path="/Productsales" element={<Productsales/>} />
          <Route path='/Customer' element={<Customer/>} />
		  </Routes>
        
			<Footer/>	
			</div>
		
	);
}
 export default App;