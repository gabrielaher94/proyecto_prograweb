import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useState} from 'react';
import TopNavbar from './components/TopNavbar'
import SideNavbar from './components/SideNavbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  const [items, setItems] = useState([
    {title: " Bienvenidos a Servisios tecnicos S.A", description: "Empresa experta en dar soportes tecnicos a nivel nacional"}
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={
          <div className="d-flex flex-column min-vh-100">
            <TopNavbar />
            <div className="flex-grow-1 d-flex">
              <SideNavbar />
              <Routes>
                <Route path="/home" element={<Home items={items} />} />
              </Routes>
            </div>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}
export default App;