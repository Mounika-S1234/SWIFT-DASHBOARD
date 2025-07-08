// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Create this CSS file for styling

const Header = ({ username }) => {
  const initials = username ? (username.charAt(0).toUpperCase() + (username.split(' ')[1] ? username.split(' ')[1].charAt(0).toUpperCase() : '')) : 'EH';

  return (
    <header className="app-header">
      <div className="header-left">
        <Link to="/dashboard" className="swift-logo-link">
          <span className="swift-logo">SWIFT</span>
        </Link>
      </div>
      <div className="header-right">
        <div className="user-icon">{initials}</div>
        <span className="username-display">{username ||  'Ervin Howell'}</span>
      </div>
    </header>
  );
};

export default Header;