import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteData } from '../../../data/siteData';
import { useStickyHeader } from '../../../hooks/useStickyHeader';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { isSticky } = useStickyHeader();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    document.body.style.overflow = '';
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    document.body.style.overflow = '';
  };

  const handleDropdownClick = (index, e) => {
    if (window.innerWidth <= 991) {
      e.preventDefault();
      setOpenDropdown(openDropdown === index ? null : index);
    }
  };

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`} id="header">
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-left">
              <span><i className="fas fa-phone"></i> <a href="tel:+917276831928">+91- 7276831928</a></span>
              <span><i className="fas fa-envelope"></i> <a href="mailto:support@chorevirtual.com">support@chorevirtual.com</a></span>
              <span className="address-span"><i className="fas fa-location-dot"></i> Malad (W), Mumbai 40064</span>
            </div>
            <div className="top-bar-right">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-x-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <nav className="navbar">
          {/* Logo */}
          <Link to="/" className="logo" id="logo">
            <div className="logo-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <div className="logo-text">
              Chore<span>Digital</span>
            </div>
          </Link>

          {/* Navigation Menu */}
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="nav-menu">
            {siteData.navigation.map((item, index) => (
              <li key={index}>
                {item.dropdown ? (
                  <>
                    <div
                      onClick={(e) => handleDropdownClick(index, e)}
                      className={`nav-dropdown-link ${location.pathname === item.path ? 'active' : ''}`}
                    >
                      <Link to={item.path}>{item.label}</Link>
                      <i className="fas fa-chevron-down"></i>
                    </div>
                    <ul
                      className="dropdown-menu-custom"
                      style={
                        window.innerWidth <= 991 && openDropdown === index
                          ? { display: 'block' }
                          : {}
                      }
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link to={subItem.path} onClick={closeMobileMenu}>
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={location.pathname === item.path ? 'active' : ''}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Header CTA */}
          <div className="header-cta">
            <Link to="/contact" className="btn-primary-custom">
              Get Started <i className="fas fa-arrow-right"></i>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            id="menu-toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`nav-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>
    </header>
  );
}
