// src/components/Navbar.jsx
import React from 'react';

const Navbar = ({ showRegistration, toggleRegistration, setSearchTerm }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Kalvium Books</h1>
        <ul className="nav-list">
          <li>
            <input
              type="text"
              placeholder="Search books..."
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-bar"
            />
          </li>
          <li>
            <button onClick={toggleRegistration} className="register-toggle-btn">
              {showRegistration ? 'Cancel' : 'Register'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;