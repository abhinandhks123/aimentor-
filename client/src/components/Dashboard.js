import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Assuming you have a protected route and a valid token in localStorage or cookie
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
        // If not authenticated, redirect to login
        navigate('/login');
      }
    };

    fetchUser();
  }, [navigate]);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: 600, margin: 'auto', marginTop: 40 }}>
      <h2>Welcome, {user.name} 👋</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Wake Up Time:</strong> {user.wakeUpTime}</p>
      <p><strong>Target Year:</strong> {user.targetYear}</p>
      <p><strong>Motivation Style:</strong> {user.motivationStyle}</p>
      <p><strong>Weak Subjects:</strong> {user.weakSubjects?.join(', ')}</p>
    </div>
  );
};

export default Dashboard;
