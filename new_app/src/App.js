import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import Channels from './pages/Channels'
import Brands from './pages/Brands'
import Influencers from './pages/Influencers'
import Customer from './components/customers/customer';
import LightHeader from './components/LighHeader/LightHeader';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Seller from './components/Seller/Seller';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/channels" element={<Channels />}></Route>
          <Route path="/brands" element={<Brands />}></Route>
          <Route path="/clients" element={<Customer />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/influencers" element={<Influencers />}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/seller' element={<Seller/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
