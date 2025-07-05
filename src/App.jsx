// src/App.js
import { useState, useEffect, useRef } from 'react';

// Import all the components for your portfolio
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // A state to hold the name of the currently active section
  const [activeSection, setActiveSection] = useState('Home');

  // Create refs for every section you want to link to
  const refs = {
    Home: useRef(null),
    Services: useRef(null),
    Projects: useRef(null),
    About: useRef(null),
    Education: useRef(null),
    Contact: useRef(null),
  };

  // The scroll-to-section function remains the same
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // This useEffect hook sets up the scroll-spying
  useEffect(() => {
    const observerOptions = {
      root: null, // observes intersections in the viewport
      rootMargin: '0px',
      threshold: 0.4 // triggers when 40% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe each section
    Object.values(refs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, [refs]);


  return (
    // Uses the official "Main Background" color
    <div className="bg-slate-800 text-white font-sans">
      <Navbar refs={refs} scrollToSection={scrollToSection} activeSection={activeSection} />
      <main>
        {/* Each section is wrapped in a div with an id and its corresponding ref */}
        <div id="Home" ref={refs.Home}>
          <Hero refs={refs} scrollToSection={scrollToSection} />
        </div>
        <div id="Services" ref={refs.Services}>
          <Services />
        </div>
        <div id="Projects" ref={refs.Projects}>
          <Projects />
        </div>
        <div id="About" ref={refs.About}>
          <About />
        </div>
        <div id="Contact" ref={refs.Contact}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;