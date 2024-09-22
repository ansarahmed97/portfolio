import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Ansar Ahmed</h3>
          <p>Front End Developer</p>
        </div>
        <div className="footer-center">
          <p>&copy; {new Date().getFullYear()} Ansar Ahmed. All Rights Reserved.</p>
        </div>
        <div className="footer-right">
          <div className="footer-social">
            <a href="https://github.com/ansarahmed97" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ansar-ahmed-881188269/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com/ansarahmed._" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
