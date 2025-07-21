import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Chatbot from './components/Chatbot';
import LandingPage from './components/LandingPage';

function App() {
  return (
    
    <Router>
    
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<RegisterForm/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path="/chatbot" element={<Chatbot />} />
      
    </Routes>
  </Router>
  );
}

export default App;
