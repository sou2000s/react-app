import React from 'react';
import './Navbar.css'
import logo from '../../images/Logo.svg'
const Navbar = () => {
    return (
       <nav className='header'>
          <img src={logo} alt="" />
          <div>
            <a href="/">Shop</a>
            <a href="/">Orders</a>
            <a href="/">Inventory</a>
            <a href="/">About</a>
          </div>
       </nav>
    );
};

export default Navbar;