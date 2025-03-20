import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuestionsPage from './pages/QuestionsPage';
import TodosPage from './pages/TodosPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="page-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/todos" element={<TodosPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
