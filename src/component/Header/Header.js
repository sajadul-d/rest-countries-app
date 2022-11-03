import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <div>
      <h1>Rest Countries App</h1>
      <nav className="navbar">
        <a href="/home">Home</a>
        <a href="/country">Country</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
