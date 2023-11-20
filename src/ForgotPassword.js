import React, { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('https://endb.onrender.com/forgot-password', { username });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleForgotPassword}>Submit</button>
      <p>{message}</p>
    </div>
  );
}

export default ForgotPassword;
