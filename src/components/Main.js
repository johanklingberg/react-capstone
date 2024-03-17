import React from 'react';
import Special from './Special';
import Testimonials from './Testimonials';
import About from './About';
import restaurantImage from '../images/restaurantfood.png';
import { styles } from '../styles';


function Main() {
  return (
    <main>

      
      
      <section style={styles.mainSection}>
      <div>
        <h1 style={styles.title}>Little Lemon</h1>
        <h2 style={styles.subTitle}>Chicago</h2>
        <p style={styles.description}>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <button style={styles.button}>
          Reserve a Table
        </button>
      </div>
      <div style={styles.imageContainer}>
        <img src={restaurantImage} alt="Restaurant Interior" style={styles.image} />
      </div>
    </section>
    <section style={styles.specialsSection}>
      <div style={styles.specialsHeader}>
        <h1 style={styles.specialsTitle}>This week's specials!</h1>
        <button style={styles.specialsButton}>
          Online Menu
        </button>
      </div>
      <Special dish="Greek Salad" />
      <Special dish="Bruchetta" />
      <Special dish="Lemon Dessert" />
    </section>
    <Testimonials />
    <About />      
    </main>
  );
}

export default Main;
