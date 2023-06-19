import React from 'react';
import './styles/Projects.css';
const Projects = () => {
  return (
    <div id="projects">
      <h1 className='home-h'>My Projects</h1>
      <div className="card-container">
        <div className="card">
          <div className="card-img">
            <a href="https://github.com/ansarahmed97/iNotebook" target="_blank" rel="noopener noreferrer">
              <img src="iNotebook.svg" alt="..." title="Open in GitHub to view source code" />
            </a>
          </div>
          <div className="card-body">
            <h2 className="card-title">iNotebook</h2>
            <p className="card-text">
              I built a secure note-taking app using React.js with the Context API for state management. Users can create accounts, log in, and manage personal notes. The app ensures data privacy and utilizes MongoDB Compass for data storage. This project highlights my expertise in React.js, Context API, and user authentication implementation.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <a href="https://github.com/ansarahmed97/newsapp" target="_blank" rel="noopener noreferrer"><img src="allnews.svg" alt="..." title="Open in GitHub to view source code" /></a></div>
          <div className="card-body">
            <h2 className="card-title">All News</h2>
            <p className="card-text">
              I created a news app using React.js and NewsAPI, fetching global news articles. It enhances my React.js and API skills. The app includes a responsive navbar for news category navigation. Infinite scrolling dynamically loads articles while users scroll. This project demonstrates my API integration, UI design, and advanced features like infinite scrolling, reflecting my commitment to delivering engaging applications..</p>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <a href="https://github.com/ansarahmed97/textutils" target="_blank" rel="noopener noreferrer"><img src="textutils.svg" alt="..." title="Open in GitHub to view source code" /></a></div>
          <div className="card-body">
            <h2 className="card-title">Text Utils</h2>
            <p className="card-text">
              I developed a React.js word manipulation app during my learning phase, implementing JavaScript logic to perform operations on text inputs. Users can count words, convert case, and remove spaces. This project demonstrates my understanding of string manipulation, conditionals, and event handling in React.js, showcasing my passion for exploring and creating interactive applications.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <a href="https://github.com/ansarahmed97/myblog" target="_blank" rel="noopener noreferrer"><img src="blog.svg" alt="..." title="Open in GitHub to view source code" /></a></div>
          <div className="card-body">
            <h2 className="card-title">Daily Journal</h2>
            <p className="card-text">
              I created a blog app with Express.js and EJS templates, enabling users to create and update daily blog posts. The user-friendly interface, powered by Express.js, ensures smooth communication. Dynamic rendering via EJS templates allows seamless content updates. This project showcases my web development skills in Express.js, EJS templates, and CRUD operations.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <a href="https://github.com/ansarahmed97/todolist" target="_blank" rel="noopener noreferrer"><img src="todolist.svg" alt="..." title="Open in GitHub to view source code" /></a></div>
          <div className="card-body">
            <h2 className="card-title">Todo List</h2>
            <p className="card-text">I have built a user-friendly to-do list application using Express.js and EJS templates. Users can effortlessly manage tasks with dynamic rendering, while the backend handles HTTP requests and data persistence through a database or file system. This project showcases my expertise in web development using Node.js, Express.js, EJS templates, and CRUD operations.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <a href="https://github.com/ansarahmed97/simonsgame" target="_blank" rel="noopener noreferrer"><img src="simonsgame.svg" alt="..." title="Open in GitHub to view source code" /></a></div>
          <div className="card-body">
            <h2 className="card-title">Simons Game</h2>
            <p className="card-text">I created a Simon game using JavaScript and jQuery, testing users' memory and pattern recognition skills. It features four blocks with colors and sounds. Players must replicate the sequence by clicking the blocks in order. An error sound indicates losing. This project highlights my JavaScript skills and use of jQuery for interactive gaming experiences.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <a href="https://github.com/ansarahmed97/tindogbyansar" target="_blank" rel="noopener noreferrer"><img src="tindog.svg" alt="..." title="Open in GitHub to view source code" /></a></div>
          <div className="card-body">
            <h2 className="card-title">TinDog-Tinder Clone</h2>
            <p className="card-text">I developed a Tinder clone using the full Bootstrap framework, replicating the user interface and functionality. Users can create profiles, browse matches, and swipe profiles. The app is responsive and visually appealing across devices. This project demonstrates my proficiency in Bootstrap, replicating complex interfaces, and creating engaging applications that emulate popular platforms..</p>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <a href="https://github.com/ansarahmed97/DrumKit" target="_blank" rel="noopener noreferrer"><img src="drumkit.svg" alt="..." title="Open in GitHub to view source code" /> </a></div>
          <div className="card-body">
            <h2 className="card-title">Drum Kit</h2>
            <p className="card-text">I built a drumkit app using plain JavaScript, enabling users to play drum sounds by clicking or using keyboard keys. It replicates the physical drum kit experience digitally, with each drum element representing a sound. The app utilizes a switch statement for key events and audio playback. This project showcases my JavaScript skills and interactive application development for music enthusiasts.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
