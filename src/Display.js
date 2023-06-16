import React from 'react';

const Display = ({ data }) => {
  return (
    <div>
      <h2>Submitted Data:</h2>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Address: {data.address}</p>
    </div>
  );
};

export default Display;
