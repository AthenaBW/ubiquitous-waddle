import React, { useState } from 'react';
import Header from './Header';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Footer from './Footer';
import Resume from './pages/Resume';

import '../style/style.css';


export default function Container() {
    const [currentPage, setCurrentPage] = useState('AboutMe');
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div className='body'>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {currentPage === 'AboutMe' && <AboutMe />}
        {currentPage === 'Portfolio' && <Portfolio />}
        {currentPage === 'Contact' && <Contact />}
        {currentPage !== 'About' && currentPage !== 'Portfolio' && currentPage !== 'Contact' && <Resume />}
        <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    );
  }
  