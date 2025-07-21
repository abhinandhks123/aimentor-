// src/components/RegisterForm.js
import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    wakeUpTime: '',
    targetYear: '',
    motivationStyle: '',
    weakSubjects: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        ...formData,
        weakSubjects: formData.weakSubjects.split(',').map(s => s.trim()),
      });
      setMessage('Registered sucessfullly');
    } catch (error) {
      setMessage('❌ Registration failed: ' + error.response.data.error);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '1rem' }}>
      <h2>Register</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        {['name', 'email', 'phone', 'wakeUpTime', 'targetYear', 'motivationStyle', 'password'].map(field => (
          <div key={field} style={{ marginBottom: '10px' }}>
            <input
              type={field === 'password' ? 'password' : 'text'}
              name={field}
              placeholder={field}
              value={formData[field]}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
        ))}

        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            name="weakSubjects"
            placeholder="Weak Subjects (comma separated)"
            value={formData.weakSubjects}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
            required
          />
        </div>

        <button type="submit" style={{ padding: '10px 20px' }}>Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
