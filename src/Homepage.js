import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function Homepage() {
  return (
    // <div style={{ display: 'grid', gridTemplateColumns: '1fr minmax(800px, 1200px) 1fr', backgroundColor: '#FFF', minHeight: '100vh' }}>
    
    
      <div style={{ backgroundColor: '#FFFFFF' }}>

        <Header />
        <Main />
        <Footer />
      </div>
    // </div>
  );
}

export default Homepage;