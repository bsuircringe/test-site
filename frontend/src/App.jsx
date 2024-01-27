import './App.css';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('')

  const getNumber = async () => {
    const requestOptions = {
      method : 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    };
    const response = await fetch('http://localhost:8000', requestOptions);
    const data = await response.json();
    console.log(data);
    setMessage(data.toString(message))
    console.log(message)
  };

  useEffect(() => {
    getNumber();
  }, [])

  return (
    <div className="App">
      <div className="main-window">
        <p className='label'>The factorial of random integer number is</p>
        <div className="number">{message}</div>
      </div>
    </div>
  );
}

export default App;
