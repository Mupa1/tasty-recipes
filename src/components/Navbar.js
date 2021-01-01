import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="bg-primary">
    <nav className="container d-flex justify-content-between align-items-center">
      <Link to="/">
        <h1 className="text-white">Tasty</h1>
      </Link>
      <Link to="/">
        <h3 className="text-white">Recipes</h3>
      </Link>
    </nav>
  </header>
);

export default Navbar;
