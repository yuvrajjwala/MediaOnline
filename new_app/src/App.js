import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import Channels from './pages/Channels'
import Brands from './pages/Brands'
import Customer from './components/customers/customer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/channels" element={<Channels />}></Route>
          <Route path="/brands" element={<Brands />}></Route>
          <Route path="/customer" element={<Customer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
