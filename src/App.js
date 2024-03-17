import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr minmax(800px, 1200px) 1fr', backgroundColor: '#FFF', minHeight: '100vh', justifyItems: 'center' }}>
        <div></div>
        <div>
        <Nav />
        {/* Navigation Links */}
       

        {/* Route Configuration */}
        <Routes>
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
        </div>
        <div></div>
        
     
      </div>
    </Router>
    
  );
}

export default App;