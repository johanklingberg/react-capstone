import React, { useState } from 'react';
import BookingForm from './components/BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {

  return (
    <section>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
    </section>
  );
}

export default BookingPage;