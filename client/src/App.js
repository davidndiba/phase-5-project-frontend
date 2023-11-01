import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import Navbar from "../src/ui/Navbar";
import Contact from "../src/pages/Contact";
import Home from "../src/pages/Home"
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
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    );
  }
  
  export default App;
  
  
  
  
  