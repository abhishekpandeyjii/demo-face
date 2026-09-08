import { Link } from 'react-router-dom';
import { siteData } from '../../../data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="grid grid-4">
            {/* Footer About */}
            <div className="footer-widget">
              <Link to="/" className="footer-logo">
                <div className="logo-icon">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <div className="logo-text">
                  Chore<span>Digital</span>
                </div>
              </Link>
              <p>{siteData.company.description.substring(0, 150)}...</p>
              <div className="footer-social">
                {siteData.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-widget">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                {siteData.footer.quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-widget">
              <h4>Our Services</h4>
              <ul className="footer-links">
                {siteData.footer.serviceLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-widget">
              <h4>For Business Inquiry</h4>
              <div className="footer-contact-item">
                <i className="fas fa-location-dot"></i>
                <p>{siteData.company.address}</p>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-phone"></i>
                <p>
                  <a href={`tel:${siteData.company.phone}`}>{siteData.company.phone}</a><br />
                  {siteData.company.phone2 && (
                    <a href={`tel:${siteData.company.phone2}`}>{siteData.company.phone2}</a>
                  )}
                </p>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-envelope"></i>
                <p>
                  <a href={`mailto:${siteData.company.email}`}>{siteData.company.email}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>
              Copyright © 2014 - {currentYear} <strong>ChoreDigital Communication LLP</strong> All Rights Reserved
            </p>
            <div className="footer-bottom-links">
              <Link to="/sitemap">Sitemap</Link>
              <Link to="/privacy-terms">Privacy & Terms of Services</Link>
              <Link to="/presentation">PowerPoint Presentation</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
