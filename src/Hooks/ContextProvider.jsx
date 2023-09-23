// ContextProvider.js
import React, { useState } from 'react';
import Context from './Context'; // Import the context from Context.js

export default function ContextProvider({ children }) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(true);

  return (
    <Context.Provider value={{ count, setCount, count2, setCount2 }}>
      {children}
    </Context.Provider>
  );
}
