import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/Logo.svg';
import { styles } from '../styles';
// React stylesheet


function Nav() {
  return (
    <>
    <div style={{ ...styles.navContainer, minWidth: '800px' }}>
      <img src={logoImage} alt="logo" style={styles.logoImage} />
      <nav style={styles.navBar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
          <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About</Link></li>
          <li style={styles.navItem}><Link to="/menu" style={styles.navLink}>Menu</Link></li>
          <li style={styles.navItem}><Link to="/booking" style={styles.navLink}>Reservations</Link></li>
          <li style={styles.navItem}><Link to="/order-online" style={styles.navLink}>Order online</Link></li>
          <li style={styles.navItem}><Link to="/login" style={styles.navLink}>Login</Link></li>
        </ul>
      </nav>
    </div>
    </>
  );
}

export default Nav;
