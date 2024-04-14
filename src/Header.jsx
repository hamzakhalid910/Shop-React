import React from 'react';
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/login">Log In</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
