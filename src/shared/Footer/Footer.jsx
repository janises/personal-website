import React from 'react';
import './Footer.css';

function Footer() {
  const handleClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="footer">
      <div className="social-container">
        <img
          alt="github"
          className="social-buttons"
          src="../../assets/img/github.png"
          onClick={() => handleClick('https://github.com/janises')}
        />
        <img
          alt="linked-in"
          className="social-buttons"
          src="../../assets/img/linkedin.png"
          onClick={() => handleClick('https://www.linkedin.com/in/janise-suski/')}
        />
      </div>
      <div>Copyright &copy; 2023 Janise Suski - All Rights Reserved </div>
    </div>
  );
}

export default Footer;
