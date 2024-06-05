import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-links">

          <NavLink to="/" className={({isActive})=>`hover:text-gray-200 ${isActive ? "text-white" : "text-black"}`} >
                helo
          </NavLink>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div className="navbar-actions">
          <a href="/cart">
            <div className="cart">
              <FaShoppingCart />
              <span className="cart-count">0</span>
            </div>
          </a>
          <button className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          {/* Conditionally render login button based on screen size */}
          <div className="login-button-large-screen">
            <button className="login-button">Login</button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="navbar-mobile">
          <a href="/" onClick={toggleMenu}>Home</a>
          <a href="/products" onClick={toggleMenu}>Products</a>
          <a href="/about" onClick={toggleMenu}>About Us</a>
          <a href="/contact" onClick={toggleMenu}>Contact Us</a>
          {/* Render login link inside hamburger menu */}
          <a href="/login" className="login-link-mobile" onClick={toggleMenu}>Login</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
