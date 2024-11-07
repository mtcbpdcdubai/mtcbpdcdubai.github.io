import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/MTClogo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src={logo} alt="Microsoft Tech Club" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
        </div>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/membership" onClick={toggleMenu}>Membership</Link></li>
          <li><Link to="/events" onClick={toggleMenu}>Events</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          <li><Link to="/articles" onClick={toggleMenu}>Articles</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
