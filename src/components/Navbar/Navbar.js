import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.module.css';

const Navbar = () => (
  <header className="bg-success text-center">
    <nav>
      <Link to="/">
        <h1 className="text-white">Tasty Recipes</h1>
      </Link>
    </nav>
  </header>
);

export default Navbar;
