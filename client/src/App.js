
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import Navbar from "../src/ui/Navbar";
import Contact from "../src/pages/Contact";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Programs from "../src/pages/Programs";
import Fundraising from "./ui/Fundraising";
import Volunteer from "./ui/Volunteer";
import Projects from "../src/pages/Projects";
import OurMission from "./ui/OurMission";
import WhatWeDo from "./ui/WhatWeDo";
import FinancialInformation from "./ui/FinancialInformation";
import DonateHere from "./ui/DonateHere";
import Footer from '../src/ui/Footer';
function App() {
    const [user, setUser] = useState(null);
  
    const handleLogin = (userData) => {
      setUser(userData);
    };
  
    const handleSignup = (userData) => {
      setUser(userData);
    };
  
    return (
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/our-mission" element={<OurMission />} />
            <Route path="/about/what-we-do" element={<WhatWeDo />} />
            <Route path="/about/financial-information" element={<FinancialInformation />} />
            <Route path="/about/donate-here" element={<DonateHere />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/fundraising" element={<Fundraising />} />
            <Route path="/programs/volunteer" element={<Volunteer />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/ourmission" element={<OurMission />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    );
  }
  
  export default App;
  
  
  
  
  