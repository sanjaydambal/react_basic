import React from'react';

import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import BasicEvent from './components/BasicEvent';
import List from './components/List';
import Form from './Form';
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
  // const Mobils = [
  //   {id: 1, brand: 'Ford'},
  //   {id: 2, brand: 'BMW'},
  //   {id: 3, brand: 'Audi'}
  // ];
  // const cars = ['Ford', 'Chevy', 'Toyota'];
  // const engines = ['V8', 'V6', 'V12'];
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path = "/" element = {<Home/>}/>
          </Routes>
          </Router>
      {/* <Array data = {vehicleOne} cal = {calculate} bike = "honda" wats = {message} /> */}
     {/* <BasicEvent isGoal = {false}  car = {cars} engine = {engines} /> */}
    
     {/* <ul>
        {cars.map((car) => <List brand={car} />)}
      </ul> */}
      {/* <ul>
        {Mobils.map((vehicle) => <List key={vehicle.id} info = {vehicle}/>)}
      </ul> */}
      {/* <Form/> */}

    </div>
  );
}

export default App;
