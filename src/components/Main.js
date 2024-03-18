import React, { useState, useEffect, useReducer } from 'react';
import Homepage from '../Homepage';
import BookingPage from '../BookingPage';
import { Route, Routes } from 'react-router-dom';
import restaurantImage from '../images/restaurantfood.png';
import { styles } from '../styles';

function initializeTimes() {
  return ([...Array(6).keys()].map(i => `${17 + i}:00`));
}

const timesReducer = (state, action) => {
  switch (action.type) {
    case 'update':      
    console.log ("update: ", action.payload);
      return initializeTimes();
    default:
      throw new Error();
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  // useEffect(() => {
  //   initializeTimes();
  // }, []);

  return (
    <main>
    <Routes>
          <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
          <Route path="/" element={<Homepage />} />
    </Routes>
    </main>
  );
}

export default Main;
