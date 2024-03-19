import React from 'react';
import { styles } from '../styles';

// Local styles
const localStyles = {
  aboutContainer: {
    display: 'grid', 
    gridTemplateColumns: '1fr 1fr', 
    backgroundColor: 'white', 
    padding: '40px', 
    gap: '40px'
  },
  aboutImage: {
    maxWidth: '100%', 
    height: 'auto'
  }
};

function About() {
  return (
    <section style={localStyles.aboutContainer}>
      <div>
        <h1 style={styles.titleBlack}>Little Lemon</h1>
        <h2 style={styles.subTitleBlack}>Chicago</h2>
        <p style={styles.descriptionBlack}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
      </div>
      <div>
        <img src={require('../images/about.png')} alt="About Us" style={localStyles.aboutImage} />
      </div>
    </section>
  );
}

export default About;
