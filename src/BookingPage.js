import React, { useState } from 'react';
import BookingForm from './components/BookingForm';

function BookingPage({ availableTimes, dispatch }) {

  return (
    <div>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default BookingPage;