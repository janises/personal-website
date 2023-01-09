/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import './NavBar.css';

function NavBar() {
  const links = {
    home: '#home',
    contact: 'https://us21.list-manage.com/contact-form?u=82718a507e3d43864dc03ef9b&form_id=919cda318a5cf7814c09096e3c1aedf2',
  };

  const listItems = Object.keys(links).map((item) => (
    <li key={item}>
      {item === 'contact'
        ? (
          <a
            href="https://us21.list-manage.com/contact-form?u=82718a507e3d43864dc03ef9b&form_id=919cda318a5cf7814c09096e3c1aedf2"
            className="list-item"
            target="_blank"
          >
            CONTACT

          </a>
        )
        : (
          <Link
            smooth
            className="list-item"
            to={links[item]}
            activeClassName="list-item"
          >
            {item.toUpperCase()}
          </Link>
        )}
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
