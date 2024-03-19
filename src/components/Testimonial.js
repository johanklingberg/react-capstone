import React from 'react';

const testimonialsData = {
  1: {
    rating: 5,
    name: "John Doe",
    review: "Absolutely loved the ambiance and the Mediterranean flavors. It's like a trip to Greece without leaving the city!"
  },
  2: {
    rating: 4,
    name: "Emily Smith",
    review: "The hummus was creamy and the pita bread was perfectly baked. A must-visit for Mediterranean cuisine lovers."
  },
  3: {
    rating: 5,
    name: "Michael Brown",
    review: "Their lamb gyro was out of this world! The service was excellent and the atmosphere was very welcoming."
  },
  4: {
    rating: 3,
    name: "Sarah Johnson",
    review: "Good food but the portions were a bit small for the price. The baklava, however, was a delightful end to our meal."
  }
};
function Testimonial({ id }) {
  const { rating, name, review } = testimonialsData[id];
  const imageName = require(`../images/profile.png`);
  const imageStar = require(`../images/star.png`);
  const stars = Array.from({ length: rating }, (_, index) => (
    <img key={index} src={imageStar} alt="star" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
  ));
  return (
    <article style={{ backgroundColor: 'white', padding: '20px', textAlign: 'left' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', fontWeight: 'bold' }}>
        Rating: {stars}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img src={imageName} alt="profile" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
        <span style={{ fontWeight: 'bold' }}>{name}</span>
      </div>
      <div style={{ fontSize: '0.9em' }}>{review}</div>
    </article>
  );
}
export default Testimonial;
