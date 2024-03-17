import React from 'react';
import logoImage from '../images/Logo.svg';
import { styles } from '../styles';
// React stylesheet


function Nav() {
  return (
    <>
    <div style={styles.navContainer}>
      <img src={logoImage} alt="logo" style={styles.logoImage} />
      <nav style={styles.navBar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
          <li style={styles.navItem}><a href="#about" style={styles.navLink}>About</a></li>
          <li style={styles.navItem}><a href="#menu" style={styles.navLink}>Menu</a></li>
          <li style={styles.navItem}><a href="#reservations" style={styles.navLink}>Reservations</a></li>
          <li style={styles.navItem}><a href="#order-online" style={styles.navLink}>Order online</a></li>
          <li style={styles.navItem}><a href="#login" style={styles.navLink}>Login</a></li>
        </ul>
      </nav>
    </div>
    </>
  );
}

export default Nav;
