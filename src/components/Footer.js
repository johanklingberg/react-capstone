import React from 'react';


function Footer() {
  return (
    <footer>
        {/* footer info */}
    <div className="footer-content">
      <div className="footer-column">
        <img src="footer-logo.png" alt="Footer Logo" />
      </div>
      <div className="footer-column">
        <h3>Doormat Navigation</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order-online">Order online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Contact</h3>
        <p>Address: 123 Main St, Anytown, USA</p>
        <p>Phone number: (123) 456-7890</p>
        <p>Email: info@example.com</p>
      </div>
      <div className="footer-column">
        <h3>Social Media Links</h3>
        <ul>
          <li><a href="https://www.facebook.com">Facebook</a></li>
          <li><a href="https://www.twitter.com">Twitter</a></li>
          <li><a href="https://www.instagram.com">Instagram</a></li>
        </ul>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
