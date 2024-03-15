import React from 'react';
import logoImage from '../images/Logo.svg';
function Nav() {
  return (
    <>
        <img src={logoImage} alt="logo" />
    <nav>
        
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#order-online">Order online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
    </>
  );
}

export default Nav;
