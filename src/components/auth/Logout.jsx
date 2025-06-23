// src/components/auth/Logout.jsx
import React, { useEffect } from 'react';
import axios from 'axios';

export default function Logout() {
  useEffect(() => {
    const doLogout = async () => {
      try {
        await axios.post('http://localhost:5000/logout', {}, { withCredentials: true });
        window.location.href = '/login'; 
      } catch (err) {
        console.error('Logout failed:', err);
        window.location.href = '/login'; 
      }
    };

    doLogout();
  }, []);

  return <p>Logging out...</p>;
}
