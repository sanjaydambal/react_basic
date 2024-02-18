import React from 'react';

const BasicEvent = () => {
  const shoot = () => {
    alert('Goal!');
  };

  return (
    <div>
      <button onClick={shoot}>Take the shot!</button> 
    </div>
  );
};

export default BasicEvent;
