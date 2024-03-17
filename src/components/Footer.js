import React from 'react';
import logoImage from '../images/Logo.svg';
import {styles} from '../styles';

function Footer() {
    
  return (
    <footer style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', backgroundColor: '#EDEFEE' }}>
        {/* footer info */}
    
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
      
      <img src={logoImage} alt="logo" style={styles.logoImage} />
      </div>
      <div  style={{ alignItems: 'start' }}>
        <h3>Doormat Navigation</h3>
        <ul style={{ padding: 0 }}>
          <li style={{ listStyleType: 'none' }}><a href="#home" style={{ fontWeight: 'bold', color: 'black', textDecoration: 'none' }}>Home</a></li>
          <li style={{ listStyleType: 'none' }}><a href="#about" style={{ fontWeight: 'bold', color: 'black', textDecoration: 'none' }}>About</a></li>
          <li style={{ listStyleType: 'none' }}><a href="#menu" style={{ fontWeight: 'bold', color: 'black', textDecoration: 'none' }}>Menu</a></li>
          <li style={{ listStyleType: 'none' }}><a href="#reservations" style={{ fontWeight: 'bold', color: 'black', textDecoration: 'none' }}>Reservations</a></li>
          <li style={{ listStyleType: 'none' }}><a href="#order-online" style={{ fontWeight: 'bold', color: 'black', textDecoration: 'none' }}>Order online</a></li>
          <li style={{ listStyleType: 'none' }}><a href="#login" style={{ fontWeight: 'bold', color: 'black', textDecoration: 'none' }}>Login</a></li>
        </ul>
      </div>
      <div style={{ display: 'grid', gap: '5px', alignItems: 'start' }}>
        <div>
          <h3>Contact</h3>
          <p>Address: 123 Main St, Anytown, USA<br/>
          Phone number: (123) 456-7890<br/>
          Email: info@example.com</p>
        </div>
      </div>
      <div style={{ alignItems: 'start' }}>
        <h3 style={{marginBottom: 10, padding: 0}}>Social Media Links</h3>
       
        <ul style={{ padding: 10, marginTop: '10', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <li style={{ listStyleType: 'none' }}><a href="https://www.facebook.com" style={{ textDecoration: 'none', color: 'black' }}>Facebook</a></li>
          <li style={{ listStyleType: 'none' }}><a href="https://www.twitter.com" style={{ textDecoration: 'none', color: 'black' }}>Twitter</a></li>
          <li style={{ listStyleType: 'none' }}><a href="https://www.instagram.com" style={{ textDecoration: 'none', color: 'black' }}>Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
