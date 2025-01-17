import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/MTClogo.png';
import './Navbar.css';
import * as Paths from "src/Paths";

/** The menu entries @type {[str, str][]} */
const menuItems = [
  [Paths.ROOT,       "Home"],
  [Paths.ABOUT,      "About"],
  [Paths.MEMBERSHIP, "Membership"],
  [Paths.EVENTS,     "Events"],
  [Paths.CONTACT,    "Contact"],
  [Paths.ARTICLES,   "Articles"],
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img className="navbar-logo" src={logo} alt="Microsoft Tech Club" />
        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          {menuItems.map(([to, title]) => <li key={to}><Link to={to} onClick={toggleMenu}>{title}</Link></li>)}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
