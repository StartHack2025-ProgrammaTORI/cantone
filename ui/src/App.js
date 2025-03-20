import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuestionsPage from './pages/QuestionsPage';
import LandingPage from './pages/LandingPage';
import SettingsPage from './pages/SettingsPage';
import LoginPage from './pages/LoginPage'; // Import the LoginPage
import './App.css';

function App() {
  return (
    <Router>
      <div className="page-container">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/login" element={<LoginPage />} /> {/* Add this line */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
