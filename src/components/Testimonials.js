import React from 'react';
import Testimonial from './Testimonial';

function Testimonials() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '50px', backgroundColor: '#EDEFEE', padding: '20px' }}>
      <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Testimonials</h2>
      </div>
      <Testimonial id={1} />
      <Testimonial id={2} />
      <Testimonial id={3} />
      <Testimonial id={4} />
      <div style={{ height: '100px' }}></div>
    </div>
 
  );
}

export default Testimonials;
