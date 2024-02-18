import React from 'react';

const arr = [1, 2, 3, 4, 5];
const myArray = ['apple', 'banana', 'orange'];
const arr2 = ["car", "truck", "bike"];
const vehicles = ['mustang', 'f-150', 'expedition'];

const Array = ({ data:{brand,model,type,year}, cal,bike,wats}) => { // Renamed case to caseValue to avoid conflict with JavaScript's case keyword
  const [car, truck, suv] = vehicles;
  
  // Destructuring the result array from calculate function
  const [add, subtract, multiply, divide] = cal(1, 7);
  
  return (
    <div>
      {/* Mapping over arrays and rendering their items */}
      {arr.map(item => <p key={item}>{item * item}</p>)}
      {myArray.map((item, index) => <p key={index}>{item}</p>)}
      {arr2.map(vehicle => <p key={vehicle}>{vehicle}</p>)}
      
      {/* Rendering values */}
      <p>Car: {car}</p>
      <p>Truck: {truck}</p>
      <p>SUV: {suv}</p>
      <p>Addition: {add}</p>
      <p>Subtraction: {subtract}</p>
      <p>Multiplication: {multiply}</p>
      <p>Division: {divide}</p>
      
      {/* Accessing data object properties */}
      <p>Brand: {brand}</p>
      <p>Model: {model}</p>
      <p>Type: {type}</p>
      <p>Year: {year}</p>
      <p>Color: {data.color}</p>
      
      {/* Displaying the value of case prop */}
     <p>{bike}</p>
     <p>{wats}</p>
    </div>
  );
};

export default Array;
