import React,  { useState } from "react";
import { Outlet, Link } from 'react-router-dom';
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

import '../styles/Nav.css';


const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOnClickMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  }

  return(
  <>
    
    <nav className="nav">
      <div className="logo">B.R.</div>
      {!isMenuOpen?
      <div id="menu-icon" onClick={handleOnClickMenu}><AiOutlineMenu /></div>:
      <div id="menu-icon" onClick={handleOnClickMenu}><AiOutlineClose /></div>}
    
      <ul className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/Portofolio/" className="link" onClick={handleOnClickMenu}>Home</Link></li>
          <li><Link to="about" className="link" onClick={handleOnClickMenu}>About</Link></li>
          <li><Link to="skills" className="link" onClick={handleOnClickMenu}>Skills</Link></li>
          <li><Link to="contact" className="link" onClick={handleOnClickMenu}>Contact</Link></li>
      </ul>
    </nav>

    <Outlet />
  </>
  );
};

export default Nav;