import React from 'react';
import './styles/Home.css';
const Home = () => {
  return (
  <div id="home">
      <div className="home-container">
        <div className="txt-container">
          <p>Hey!</p>
          <p>Happy to see you here</p>
          <h1 className='home-h1'>I'm Ansar Ahmed</h1>
          <h4>A Front End Web Developer</h4>
          <fieldset>
            <legend>Checkout</legend>
            <div className="social-icons">
              <a href="https://github.com/ansarahmed97" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ansar-ahmed-881188269/"  target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com/ansarahmed._" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="pdf">
              <a href="/Ansar's Resume.pdf" target="_blank" rel="noopener noreferrer">My Resume</a>
            </div>
          </fieldset>
        </div>
        <div className="img-container">
          <div className="main-img">
            <img src="/ansar.svg" alt="Ansar Ahmed - A Front End Web Developer" />
          </div>
        </div>
      </div>
      </div>
  );
};
export default Home;
