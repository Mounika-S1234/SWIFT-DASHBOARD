// src/components/SearchBar.js
import React from 'react';
import './SearchBar.css'; // Create this CSS file

const SearchBar = ({ onSearch, searchTerm }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search name, email, comment"
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
