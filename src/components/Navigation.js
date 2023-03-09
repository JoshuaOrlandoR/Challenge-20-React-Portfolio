import React from 'react';
import './css/Navigation.css';

function Navigation(props) {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid justify-content-between'>
        <div className='navbar-brand'>Joshua Orlando</div>

        <ul className='navbar-nav'>
          <li className='nav-item'>
            <button className={`nav-link ${props.activeSection === 'showcase' ? 'active' : ''}`} onClick={() => props.setActiveSection('showcase')}>
              Home
            </button>
          </li>
          <li className='nav-item'>
            <button className={`nav-link ${props.activeSection === 'aboutme' ? 'active' : ''}`} onClick={() => props.setActiveSection('aboutme')}>
              About Me
            </button>
          </li>
          <li className='nav-item'>
            <button className={`nav-link ${props.activeSection === 'contact' ? 'active' : ''}`} onClick={() => props.setActiveSection('contact')}>
              Contact
            </button>
          </li>
          <li className='nav-item'>
            <button className={`nav-link ${props.activeSection === 'resume' ? 'active' : ''}`} onClick={() => props.setActiveSection('resume')}>
              Resume
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
