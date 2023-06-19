import React, { useState, useRef, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import './App.css';
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const projectsRef = useRef(null);
  const homeRef = useRef(null);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    if (currentPage === 'projects') {
      projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (currentPage === 'home') {
      homeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentPage]);
  return (
    <>
      <Navbar onPageChange={handlePageChange} />
      <div className="content">
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
      </div>
    </>
  );
}
export default App;