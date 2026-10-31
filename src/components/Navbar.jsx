import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../images/logo.png';
import menu from '../images/menu.png';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname === path) return true;
    return false;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="site-header">
      <nav className="nav-bar" aria-label="Main navigation">
        <Link to="/" className="brand-link" aria-label="Jayess Builders home" onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt="" className="brand-logo h-12 w-auto"/>
          {/* <span className="brand-name">JAYESS <span>BUILDERS</span></span> */}
        </Link>
        <div className="desktop-nav">
          <Link to="/" aria-current={isActive('/') ? 'page' : undefined}>Home</Link>
          <Link to="/about" aria-current={isActive('/about') ? 'page' : undefined}>About us</Link>
          <Link to="/testimonials" aria-current={isActive('/testimonials') ? 'page' : undefined}>Testimonials</Link>
          <Link to="/contact" aria-current={isActive('/contact') ? 'page' : undefined}>Contact</Link>
        </div>
        <Link to="/contact" className="nav-cta">Let’s talk <span aria-hidden="true">↗</span></Link>
        <button
          type="button"
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <img src={menu} alt="" />
        </button>
      </nav>
      {isMenuOpen && (
        <div className="mobile-nav" id="mobile-navigation">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About us</Link>
          <Link to="/testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}

export default Navbar; 
