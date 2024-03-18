
const seededRandom = seed => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
  
    return () => (s = s * a % m) / m;
  };
  
  const fetchData = date => {
    let result = [];
    console.log ("Date:" + date);
    //let random = seededRandom(date.getDate());
    let random = seededRandom(new Date());
  
    for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) result.push(i + ':00');
      if(random() < 0.5) result.push(i + ':30');
    }
  
    return result;
  };
  
  const submitAPI = formData => true;
  
  export {
    fetchData,
    submitAPI
  };