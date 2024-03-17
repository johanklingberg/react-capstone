import React from 'react';

const dishes = [
  {
    Name: "Greek Salad",
    Price: "$12.99",
    Description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    ImageName: "greeksalad.jpg"
  },
  {
    Name: "Bruchetta",
    Price: "$5.99",
    Description: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    ImageName: "bruchetta.png"
  },
  {
    Name: "Lemon Dessert",
    Price: "$5.00",
    Description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    ImageName: "lemondessert.jpg"
  }
];

function Special({ dish }) {
  console.log(dishes);
  const selectedDish = dishes.find(d => d.Name === dish);
  const imageName = require(`../images/${selectedDish.ImageName}`);
  console.log("Selected Dish:", selectedDish);
  console.log("Dish:", dish);
 // alert(imageName);
  return (
    selectedDish ? (
      <div style={{ borderRadius: '10px 10px 0 0', backgroundColor: '#EDEFEE', minHeight:'450px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        
        <div>
          <img src={imageName} alt={selectedDish.Name} style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', border: '1px solid black', borderRadius: '10px 10px 0 0', margin: '0' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 20px 10px 20px' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '18px', margin: 0 }}>{selectedDish.Name}</h2>
            <p style={{ color: '#EE9972', fontSize: '18px', margin: 0 }}>{selectedDish.Price}</p>
          </div>
          <p style={{ margin: '0 20px 20px 20px' }}>{selectedDish.Description}</p>
        </div>
        <a href="#" style={{ fontWeight: 'bold', display: 'block', padding: '20px', color: 'black', textDecoration: 'none', textAlign: 'left' }}>Order a delivery</a>
      </div>
    ) : (
      <div style={{ backgroundColor: '#EDEFEE', padding: '20px' }}>No dish selected</div>
    )
  );
}

export default Special;
