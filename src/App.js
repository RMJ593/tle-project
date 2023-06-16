import React, { useState } from 'react';
import Form from './Form.js';
import Display from './Display.js';

const App = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <div>
      <h1>React Form Example</h1>
      {submittedData ? (
        <Display data={submittedData} />
      ) : (
        <Form onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default App;
