import React, { useState } from 'react';
import axios from 'axios';

function Logout() {
  const [message, setMessage] = useState('');

  const handleLogout = async () => {
    try {
      const response = await axios.post('https://endb.onrender.com/logout');
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
      <p>{message}</p>
    </div>
  );
}

export default Logout;
