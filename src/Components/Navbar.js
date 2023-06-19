import React, { useState } from 'react';
import './styles/Navbar.css';
function Navbar({ onPageChange }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const handleNavigation = (page) => {
    setIsNavbarOpen(false);
    onPageChange(page);
  };
  return (
    <nav className="navbar">
      <div className="navbar-brand">Ansar Ahmed</div>
      <div className={`navbar-menu ${isNavbarOpen ? 'show' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item" onClick={() => handleNavigation('home')}>
            <span>Home</span>
          </li>
          <li className="nav-item" onClick={() => handleNavigation('projects')}>
            <span>My Projects</span>
          </li>
        </ul>
      </div>
      <div className={`navbar-toggle ${isNavbarOpen ? 'active' : ''}`} onClick={handleNavbarToggle}>
        <i className={`fa-solid ${isNavbarOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
  );
}
export default Navbar;
