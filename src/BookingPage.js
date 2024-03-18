import React, { useState } from 'react';
import BookingForm from './components/BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {

  return (
    <div>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
    </div>
  );
}

export default BookingPage;