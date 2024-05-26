// OptionalButton.js
import React from 'react';

const OptionalButton = ({ showButton }:any) => {
  return (
    <div>
      <h1>Welcome to our website!</h1>
      {showButton && <button className="btn">Click Me</button>}
    </div>
  );
};

export default OptionalButton;
