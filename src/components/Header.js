import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">airfor share</div>
      <nav>
        <ul>
          <li><Link to="/how-it-works">How it works</Link></li>
          <li><a href="#">Download</a></li>
          <li><a href="/Upgrade">Upgrade</a></li>
          <li><a href="/Feedback">Feedback</a></li>
          <li><a href="/Login" className="login-register">Login / Register</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
