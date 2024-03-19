import React from 'react';
import restaurantImage from '../images/restaurantfood.png';
import { styles } from '../styles';

function Hero() {
  return (
    <section style={styles.mainSection}>
      <div>
        <h1 style={styles.title}>Little Lemon</h1>
        <h2 style={styles.subTitle}>Chicago</h2>
        <p style={styles.description}>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <button style={styles.button} aria-label="On Click">
          Reserve a Table
        </button>
      </div>
      <div style={styles.imageContainer}>
        <img src={restaurantImage} alt="Restaurant Interior" style={styles.image} />
      </div>
    </section>
  );
}

export default Hero;
