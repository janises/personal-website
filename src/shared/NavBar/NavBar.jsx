import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import './NavBar.css';

function NavBar() {
  const links = {
    home: '#home',
    about: '#about',
    skills: '#skills',
    projects: '#projects',
    contact: '#contact',
  };

  const listItems = Object.keys(links).map((item) => (
    <li key={item}>
      <Link
        smooth
        className="list-item"
        to={links[item]}
        activeClassName="list-item active"
      >
        {item.toUpperCase()}
      </Link>
    </li>
  ));

  return (
    <div className="main-navbar">
      <ul className="list">
        { listItems }
      </ul>
    </div>
  );
}

export default NavBar;
