import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          Vedant's Portfolio
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Project">Project</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
