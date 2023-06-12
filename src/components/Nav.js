import React from "react";
import { Outlet, Link } from 'react-router-dom';

import '../styles/Nav.css';


const Nav = () => {
    return(
    <>
      <nav className="nav">
        <div className="logo">B.R.</div>
        <ul className="navbar">
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/about" className="link">About</Link></li>
            <li><Link to="/skills" className="link">Skills</Link></li>
            <li><Link to="/contact" className="link">Contact</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
    );
};

export default Nav;