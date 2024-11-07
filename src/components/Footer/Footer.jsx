// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaTwitter, FaInstagram, FaLinkedin, FaDiscord, FaTiktok, FaMedium, FaGithub } from 'react-icons/fa';
import { RiThreadsFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href=" https://x.com/mtcbpdc" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="footer-icon" />
        </a>
        <a href="https://instagram.com/mtcbpdc" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="footer-icon" />
        </a>
        <a href="https://github.com/mtcbpdcdubai" target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" />
        </a>
        <a href=" https://www.threads.net/@mtcbpdc" target="_blank" rel="noopener noreferrer">
          <RiThreadsFill className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/company/microsoft-tech-club/mycompany/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
        <a href=" https://tiktok.com/@mtcbpdc" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="footer-icon" />
        </a>
        <a href="https://medium.com/@microsofttechclub/" target="_blank" rel="noopener noreferrer">
          <FaMedium className="footer-icon" />
        </a>
      </div>
      <div className="footer-contact">
        <a href="mailto:microsofttechclub@dubai.bits-pilani.ac.in">microsofttechclub@dubai.bits-pilani.ac.in</a>
      </div>
      <div className="footer-copy">
        &copy; 2024 Microsoft Tech Club, BITS Pilani Dubai Campus
      </div>
    </footer>
  );
};

export default Footer;
