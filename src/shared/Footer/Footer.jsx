/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './Footer.css';

function Footer() {
  const handleClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="footer">
      <div className="copyright">
        Janise Suski &copy; 2021
      </div>
      <img
        alt="github"
        className="social-media"
        src="../../assets/img/github.png"
        onClick={() => handleClick('https://github.com/janises')}
      />
      <img
        alt="github"
        className="social-media"
        src="../../assets/img/linkedin.png"
        onClick={() => handleClick('https://www.linkedin.com/in/janise-suski/')}
      />
    </div>
  );
}

export default Footer;
