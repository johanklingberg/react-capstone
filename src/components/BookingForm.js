import React, { useState, useEffect } from 'react';
import { styles } from '../styles';

function BookingForm({ availableTimes, dispatch, submitForm }) {
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
    const [isFormValid, setIsFormValid] = useState(true);

    

    useEffect(() => {
      console.log("hej");

      setIsFormValid(date !== '' && time !== '' && guests > 0 && guests <= 10);
    }, [date, time, guests]);

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
          setGuests(Number(value)); // Ensure guests is always treated as a number
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
      if (!isFormValid) {
        alert('Please fill in all required fields.');
        return;
      }
      const reservation = { date, time, guests, occasion };

      submitForm(reservation);
      console.log('Reservation submitted:', reservation);
      // Here you would typically send the reservation to your server
    };

    
  return (
    <>
    <h1 id="bookingPageTitle">Booking Page</h1>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gridGap: '20px', gridTemplateColumns: 'auto', justifyContent: 'start' }} aria-labelledby="bookingPageTitle">
        <label id="dateLabel" htmlFor="date">
          Date: <span style={{color: 'red'}}>*</span>
        </label>
        <input type="date" id="date" name="date" value={date} onChange={handleInputChange} required aria-required="true" aria-labelledby="dateLabel" aria-label="Date" />
        
        <label id="timeLabel" htmlFor="time">
          Time: <span style={{color: 'red'}}>*</span>
        </label>        
        <select id="time" name="time" role="combobox" value={time} onChange={handleInputChange} required aria-required="true" aria-labelledby="timeLabel" aria-label="Time" data-testid="TimeCombo">
          <option value="">Select a time</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>
        
        <label id="guestsLabel" htmlFor="guests">
          Number of guests: <span style={{color: 'red'}}>*</span>
        </label>
        <input type="number" id="guests" name="guests" value={guests} min="1" max="10" onChange={handleInputChange} required aria-required="true" aria-labelledby="guestsLabel" aria-label="Number of guests" />
        
        <label id="occasionLabel" htmlFor="occasion">
          Occasion (optional):
        </label>
        <select id="occasion" name="occasion" value={occasion} onChange={handleInputChange} aria-labelledby="occasionLabel" aria-label="Occasion">
          <option value="">None</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        
        <button role="button" type="submit" style={styles.button} aria-label="On Click" disabled={!isFormValid}>Submit reservation</button>
        <p><span style={{color: 'red'}}>*</span> indicates a required field</p>
      </form>
    </> 
  );
}

export default BookingForm;
