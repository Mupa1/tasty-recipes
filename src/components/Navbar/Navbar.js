import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import './Navbar.module.css';

const Navbar = () => (
  <header className="bg-success text-center">
    <nav data-testid="navbar">
      <BrowserRouter>
        <Link to="/">
          <h1 className="text-white">Tasty Recipes</h1>
        </Link>
      </BrowserRouter>
    </nav>
  </header>
);

export default Navbar;
