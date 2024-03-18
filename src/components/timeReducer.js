import { fetchData, submitAPI } from '../utils/FakeAPI';



export const initializeTimes = (date = new Date()) => {
    // Initialize your times here
    //return ([...Array(6).keys()].map(i => `${17 + i}:00`));
    console.log ("Initialize data:" + date);
    return fetchData(date || new Date());
  };

  export const updateTimes = (payload) => {
    return initializeTimes(payload);
  }
  
  export const timesReducer = (state, action) => {
    switch (action.type) {
      case 'update':
        
        return updateTimes(new Date(action.payload));
      default:
        throw new Error();
    }
  };