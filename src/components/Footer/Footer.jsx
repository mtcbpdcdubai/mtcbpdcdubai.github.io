import { FaInstagram, FaLinkedin, FaTiktok, FaGithub, FaXTwitter, FaThreads } from 'react-icons/fa6';
import { SiMedium } from 'react-icons/si';

import './Footer.css';


/** An array of social media icons to be included in the footer.
 * @type {{icon: React.JSX.Component, url: string}[]}
 */
const footerLinks = [
  {icon: <FaInstagram />, url: "https://instagram.com/mtcbpdc",},
  {icon: <FaLinkedin />,  url: "https://linkedin.com/company/microsoft-tech-club",},
  {icon: <SiMedium />,    url: "https://medium.com/@microsofttechclub",},
  {icon: <FaTiktok />,    url: "https://tiktok.com/@mtcbpdc",},
  {icon: <FaGithub />,    url: "https://github.com/mtcbpdcdubai",},
  {icon: <FaXTwitter />,  url: "https://x.com/mtcbpdc",},
  {icon: <FaThreads />,   url: "https://threads.net/@mtcbpdc",},
];

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-icons">{footerLinks.map(({icon, url}) => (
        <a
          key={url}
          href={url}
          className="footer-icon"
          target="_blank"
          rel="noopener noreferrer">
          {icon}
        </a>
      ))}</div>

      <div className="footer-contact">
        <a href="mailto:microsofttechclub@dubai.bits-pilani.ac.in">microsofttechclub@dubai.bits-pilani.ac.in</a>
      </div>

      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Microsoft Tech Club, BITS Pilani Dubai Campus
      </div>

    </footer>
  );
}
