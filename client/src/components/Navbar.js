// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav style={{ padding: '10px', backgroundColor: '#eee', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        {token && <Link to="/dashboard" style={{ marginRight: 10 }}>Dashboard</Link>}
      </div>
      <div>
        {!token ? (
          <>
            <Link to="/login" style={{ marginRight: 10 }}>Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
