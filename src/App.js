import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr minmax(800px, 1200px) 1fr', backgroundColor: '#FFF', minHeight: '100vh', justifyItems: 'center' }}>
      
        <div></div>
        <div>
        <Nav />
        
        <Main/>

        <Footer />
        </div>
        <div></div>
      </div>
      
    </Router>
    
  );
}

export default App;