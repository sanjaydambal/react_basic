import React from'react';

import './App.css';
import BasicEvent from './components/BasicEvent';
// import Array from './components/Array';
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}
 const message = "Hello World";
function App() {
  return (
    <div className="App">
      {/* <Array data = {vehicleOne} cal = {calculate} bike = "honda" wats = {message} /> */}
     <BasicEvent isGoal = {false} />
    </div>
  );
}

export default App;
