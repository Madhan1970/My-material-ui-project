import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/home';
import About from './components/about';
import Projects from './components/project';
import Services from './components/services';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';



function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Services/>
      <Skills/>
      <Contact/>
      <Footer/>
      <index/>
    </>
  );
}

export default App;
