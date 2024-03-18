import React, { useState } from 'react';
import { styles } from '../styles';

function BookingForm({ availableTimes, dispatch }) {
    const [date, setDate] = useState(() => {
      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0!
      let dd = today.getDate();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;

      return `${yyyy}-${mm}-${dd}`;
    });
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState('');

    //const availableTimes = [...Array(6).keys()].map(i => `${17 + i}:00`);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      switch (name) {
        case 'date':
          console.log(value);
          setDate(value);
          dispatch({ type: 'update', payload: value });
          break;
        case 'time':
          setTime(value);
          break;
        case 'guests':
          setGuests(value);
          break;
        case 'occasion':
          setOccasion(value);
          break;
        default:
          break;
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!date || !time || !guests) {
        alert('Please fill in all required fields.');
        return;
      }
      const reservation = { date, time, guests, occasion };
      console.log('Reservation submitted:', reservation);
      // Here you would typically send the reservation to your server
    };

    
  return (
    <>
    <h1 id="bookingPageTitle">Booking Page</h1>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gridGap: '20px', gridTemplateColumns: 'auto', justifyContent: 'start' }} aria-labelledby="bookingPageTitle">
        <label id="dateLabel">
          Date: <span style={{color: 'red'}}>*</span>
        </label>
        <input type="date" name="date" value={date} onChange={handleInputChange} required aria-required="true" aria-labelledby="dateLabel" aria-label="Date" />
        
        <label id="timeLabel">
          Time: <span style={{color: 'red'}}>*</span>
        </label>        
        <select name="time" role="combobox" value={time} onChange={handleInputChange} required aria-required="true" aria-labelledby="timeLabel" aria-label="Time" data-testid="TimeCombo">
          <option value="">Select a time</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>
        
        <label id="guestsLabel">
          Number of guests: <span style={{color: 'red'}}>*</span>
        </label>
        <input type="number" name="guests" value={guests} min="1" max="10" onChange={handleInputChange} required aria-required="true" aria-labelledby="guestsLabel" aria-label="Number of guests" />
        
        <label id="occasionLabel">
          Occasion (optional):
        </label>
        <select name="occasion" value={occasion} onChange={handleInputChange} aria-labelledby="occasionLabel" aria-label="Occasion">
          <option value="">None</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        
        <button type="submit" style={styles.button} aria-label="Submit reservation">Submit reservation</button>
        <p><span style={{color: 'red'}}>*</span> indicates a required field</p>
      </form>
    </> 
  );
}

export default BookingForm;
