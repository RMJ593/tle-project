import React, { useState } from 'react';
import "./Form.css"

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, address });
  };

  return (
    <form onSubmit={handleSubmit}>
     <div className='box'>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Address:
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
     </div>
    </form>
  );
};

export default Form;
