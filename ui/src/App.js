import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuestionsPage from './pages/QuestionsPage';
import SettingsPage from './pages/SettingsPage';
import LoginPage from './pages/LoginPage'; // Import the LoginPage
import './App.css';
import { UserProvider } from './components/context/user';

function App() {
  return (
    <UserProvider>
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
      </UserProvider>
  );
}

export default App;
