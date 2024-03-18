export const initializeTimes = () => {
    // Initialize your times here
    return ([...Array(6).keys()].map(i => `${17 + i}:00`));
  };

  export const updateTimes = (payload) => {
    return initializeTimes();
  }
  
  export const timesReducer = (state, action) => {
    switch (action.type) {
      case 'update':
        
        return updateTimes(action.payload);
      default:
        throw new Error();
    }
  };