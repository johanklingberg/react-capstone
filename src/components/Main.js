import React, { useReducer } from 'react';
import Homepage from '../Homepage';
import BookingPage from '../BookingPage';
import ConfirmedBookingPage from '../ConfirmedBookingPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { initializeTimes, timesReducer } from './timeReducer';
import { submitAPI } from '../utils/FakeAPI';

function Main() {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    const result = await submitAPI(formData);
    if (result) {
      navigate('/confirmed');
    }
  };

  return (
    <main>
    <Routes>
          <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
          <Route path="/confirmed" element={<ConfirmedBookingPage />} />
          <Route path="/" element={<Homepage />} />
    </Routes>
    </main>
  );
}

export default Main;
