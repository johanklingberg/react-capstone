import React from 'react';
import Header from './components/Header';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Hero from './components/Hero';


function Homepage() {
  return (
    // <div style={{ display: 'grid', gridTemplateColumns: '1fr minmax(800px, 1200px) 1fr', backgroundColor: '#FFF', minHeight: '100vh' }}>
    
    
      <div style={{ backgroundColor: '#FFFFFF' }}>

        <Header />
        {/* <Main /> */}
        <Hero /> 
      
      <Specials />
      
      <Testimonials />
      <About />      
      </div>
    // </div>
  );
}

export default Homepage;