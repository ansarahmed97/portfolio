import React, { useEffect, useRef } from 'react';
import './styles/Home.css';

const typingEffect = (textElement, text) => {
  let index = 0;

  const interval = setInterval(() => {
    if (index < text.length) {
      textElement.textContent = text.substring(0, index + 1);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 200); // Adjust the delay for desired typing speed
};

const Home = () => {
  const h1Ref = useRef(null);
  const h4Ref = useRef(null);
  let textElement;

  useEffect(() => {
    textElement = h1Ref.current;

    if (textElement) {
      typingEffect(textElement, "I'm Ansar Ahmed");

      // Start typing for the <h4> element after the h1 finishes
      setTimeout(() => {
        textElement = h4Ref.current;

        if (textElement) {
          typingEffect(textElement, "A Front End Web Developer");
        }
      }, 1000); // Adjust the delay to match the h1 typing duration
    }
  }, []);

  return (
    <div id="home">
      <div className="home-container">
        <div className="txt-container">
          <p>Hey!</p>
          <p>Happy to see you here</p>
          <h1 className="home-h1" ref={h1Ref}></h1>
          <h4 className="home-h4" ref={h4Ref}></h4>
          <fieldset>
            <legend>Checkout</legend>
            <div className="social-icons">
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
            <div className="pdf">
              <a href={process.env.PUBLIC_URL + "/Ansar's Resume.pdf"} target="_blank" rel="noopener noreferrer">My Resume</a>
            </div>
          </fieldset>
        </div>
        <div className="img-container">
          <div className="main-img">
            <img src={process.env.PUBLIC_URL + '/Web.png'} alt="Ansar Ahmed - A Front End Web Developer" />
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Home;