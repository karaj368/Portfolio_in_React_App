import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills', label: 'Skills & Services' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__logo">K<span className="footer__logo-dot">.</span>Singh</span>
            <p className="footer__tagline">
              Frontend Developer & WordPress Expert based in New Delhi, India. Building fast, beautiful, and SEO-optimized websites.
            </p>
            <div className="footer__socials">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="footer__social-btn" aria-label="GitHub">
                <i className="fab fa-github" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer__social-btn" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="mailto:karajsingh368@gmail.com" className="footer__social-btn" aria-label="Email">
                <i className="fas fa-envelope" />
              </a>
              {/* <a href="https://kspwebsolutions.in" target="_blank" rel="noreferrer" className="footer__social-btn" aria-label="Website">
                <i className="fas fa-globe" />
              </a> */}
            </div>
          </div>

          <div className="footer__col">
            <p className="footer__col-title">Quick Links</p>
            <ul className="footer__links">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="footer__link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <p className="footer__col-title">Get In Touch</p>
            <ul className="footer__contact-list">
              <li>
                <a href="mailto:karajsingh368@gmail.com" className="footer__contact-item">
                  <i className="fas fa-envelope footer__contact-icon" />
                  karajsingh368@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918360954145" className="footer__contact-item">
                  <i className="fas fa-phone footer__contact-icon" />
                  +91 8360954145
                </a>
              </li>
              {/* <li>
                <a href="https://kspwebsolutions.in" target="_blank" rel="noreferrer" className="footer__contact-item">
                  <i className="fas fa-globe footer__contact-icon" />
                  kspwebsolutions.in
                </a>
              </li> */}
              <li className="footer__contact-item">
                <i className="fas fa-map-marker-alt footer__contact-icon" />
                New Delhi, India
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© {new Date().getFullYear()} Karaj Singh. All rights reserved.</p>
          <p className="footer__copy">Built with React JS · Designed & Develpment by Karaj Singh</p>
        </div>
      </div>
    </footer>
  );
}