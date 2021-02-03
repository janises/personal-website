/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Contact.css';

function Contact() {
  const handleSubmit = () => {
    console.log('submitted form');
  };

  const handleClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="contact">
      <h1 className="contact-header">
        How To Reach Me
      </h1>
      <div className="contact-body">
        <div className="contact-description">
          {/* eslint-disable-next-line max-len */}
          Thank you so much for taking the time to look through my site! I hope it was entertaining and informative. Feel free to contact me through my socials or send me an email using the form. Have a nice day!
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
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              className="contact-input contact-form-styles"
              type="text"
              id="email"
              name="email"
              placeholder="Email"
            />
          </label>
          <label>
            <input
              className="contact-input contact-form-styles"
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
            />
          </label>
          <label>
            <textarea
              className="contact-form-styles"
              type="text"
              id="message"
              name="message"
              placeholder="Message"
            />
          </label>
          <input
            className="contact-submit"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
