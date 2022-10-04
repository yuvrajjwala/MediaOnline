import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import Channels from './pages/Channels'
import Brands from './pages/Brands'
import Customer from './components/customers/customer';
import LightHeader from './components/LighHeader/LightHeader';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/channels" element={<Channels />}></Route>
          <Route path="/brands" element={<Brands />}></Route>
          <Route path="/customer" element={<Customer />}></Route>
          <Route path="/light" element={<LightHeader  text1="Launch your own Video Streaming Platform" text2="" subtext1="9MO offers an end-to-end live streaming platform catering to OTT requirements of various industries via On-Demand, Live Streaming and online store." buttonText="GET STARTED" text0="INFLUENCERS," />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
