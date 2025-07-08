// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import CommentsDashboard from './pages/CommentsDashboard';
import './styles/App.css'; // Global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/dashboard" element={<CommentsDashboard />} />
          {/* Optional: Redirect any unknown paths to dashboard or home */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;