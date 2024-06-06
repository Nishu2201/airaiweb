import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Home from './Components/Homepage/Home/home.jsx';
import About from './Components/About/About/About.jsx';
import Why from './Components/Why Us/Why/Why.jsx';
import Contact from './Components/Contact/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Scroll from './Components/Scroll-up/Scroll.jsx';
import Services from './Components/Service/Services/Services.jsx';

function App() {
  const scrollToTop =() =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Router>
      <main className="parent">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/whyus' element={<Why />} />
        <Route  path='/contact' element={<Contact />} />
      </Routes>
      <Scroll onClick={scrollToTop} />
      <Footer />
     
      </main>
      
    </Router>
  );
}

export default App;
