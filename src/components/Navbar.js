import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="bg-primary">
    <nav className="text-center">
      <Link to="/">
        <h1 className="text-white">Tasty Recipes</h1>
      </Link>
    </nav>
  </header>
);

export default Navbar;
