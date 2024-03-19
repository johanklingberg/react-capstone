
import React from 'react';
import Special from './Special';
import { styles } from '../styles';
function Specials() {
  return (
    <section style={{padding: '20px', backgroundColor: '#ffffff', display: 'grid', gridTemplateColumns: '1fr 20px 1fr 20px 1fr', gridTemplateRows: 'auto auto', gridColumnGap: '20px'}}>
      <div style={{textAlign: 'center', marginBottom: 20, gridColumn: '1 / -1'}}>
        <h1>This week's specials!</h1>
        <button style={styles.button} aria-label="On Click">
          Online Menu
        </button>
        
      </div>
      <Special dish="Greek Salad" style={{gridColumn: '1'}} />
      <div style={{gridColumn: '2'}} /> {/* Spacer */}
      <Special dish="Bruchetta" style={{gridColumn: '3'}} />
      <div style={{gridColumn: '4'}} /> {/* Spacer */}
      <Special dish="Lemon Dessert" style={{gridColumn: '5'}} />
    </section>
  );
}

export default Specials;
