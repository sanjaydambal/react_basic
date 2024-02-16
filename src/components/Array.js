import React from 'react';

const arr = [1, 2, 3, 4, 5];
const myArray = ['apple', 'banana', 'orange'];
const arr2 = ["car", "truck", "bike"];
const vehicles = ['mustang', 'f-150', 'expedition'];


const Array = (a,b) => {
    const [car, truck, suv] = vehicles;
    function calculate(a, b) {
        const add = a + b;
        const subtract = a - b;
        const multiply = a * b;
        const divide = a / b;
      
        return [add, subtract, multiply, divide];
      }
      
      const [add, subtract, multiply, divide] = calculate(4, 7);
  return (
    <div>
      {arr.map(item => <p key={item}>{item * item}</p>)}
      {myArray.map((item,index)=><p key ={index}>{item}</p>)}
      {arr2.map(vehicle =><p key={vehicle}>{vehicle}</p>)}
      <p>Car:{car}</p>
      <p>Truck:{truck}</p>
        <p>SUV:{suv}</p>
        <p>Addition: {add}</p>
      <p>Subtraction: {subtract}</p>
      <p>Multiplication: {multiply}</p>
      <p>Division: {divide}</p>
    </div>
  );
};

export default Array;
