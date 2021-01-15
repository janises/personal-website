/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Contact.css';

function Contact() {
  const handleSubmit = () => {
    console.log('submitted form');
  };

  return (
    <div id="contact">
      <h1 className="contact-header">
        Contact
      </h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className="contact-input contact-styles"
            type="text"
            id="email"
            name="email"
            placeholder="Email"
          />
        </label>
        <label>
          <input
            className="contact-input contact-styles"
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
          />
        </label>
        <label>
          <textarea
            className="contact-styles"
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
  );
}

export default Contact;
