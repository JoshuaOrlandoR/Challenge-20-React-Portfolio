import React, { useState } from 'react';
import About from "./About";
import Navigation from "./Navigation";
import Projects from "./Projects";
import Footer from "./Footer";
// This is just placeholder garbage for now
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#About">About</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
