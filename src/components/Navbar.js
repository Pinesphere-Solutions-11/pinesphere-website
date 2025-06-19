import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FaBars, 
  FaTimes, 
  FaCube,
  FaUser
} from "react-icons/fa";
import { 
  HiHome, 
  HiInformationCircle, 
  HiMail
} from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsUserMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <FaCube className="logo-icon" />
          <span>Pinesphere</span>Solutions
        </Link>
        
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        <div className="nav-content">
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" className="nav-link">
                <HiHome className="nav-icon" />
                <span className="nav-text">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                <HiInformationCircle className="nav-icon" />
                <span className="nav-text">About</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                <HiMail className="nav-icon" />
                <span className="nav-text">Contact</span>
              </Link>
            </li>
          </ul>
          
          <div className="user-menu-container">
            <button 
              className="user-menu-btn"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            >
              <div className="user-avatar">
                <FaUser />
              </div>
            </button>
            
            <div className={`user-dropdown ${isUserMenuOpen ? "active" : ""}`}>
              <Link to="/login" className="dropdown-item">
                Login
              </Link>
              <Link to="/signup" className="dropdown-item">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;