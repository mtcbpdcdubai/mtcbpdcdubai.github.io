import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to={Paths.ROOT}><img className="navbar-logo" src={logo} alt="Microsoft Tech Club" /></Link>
        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          {menuItems.map(([to, title]) => (
            <li key={to}>
              <NavLink to={to} onClick={toggleMenu} className={({isActive}) => isActive ? "active" : ""}>{title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
