import React from 'react';
import { styles } from './styles';

function ConfirmedBookingPage() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Booking Confirmed!</h1>
      <p style={styles.description}>Your booking has been confirmed. We look forward to seeing you!</p>
    </div>
  );
}

export default ConfirmedBookingPage;
