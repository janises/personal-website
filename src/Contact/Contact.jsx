/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Mailchimp from 'react-mailchimp-form';
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
        <Mailchimp
          action="https://gmail.us21.list-manage.com/subscribe/post?u=82718a507e3d43864dc03ef9b&amp;id=52e01ad796&amp;f_id=00dfd2e1f0"
          fields={[
            {
              name: 'EMAIL',
              placeholder: 'Email',
              type: 'email',
              required: true,
            },
            {
              name: 'MESSAGE',
              placeholder: 'Message',
              type: 'message',
              required: true,
            },
          ]}
          messages={
            {
              sending: 'Sending...',
              success: 'Thank you for reaching out!',
              error: 'An unexpected internal error has occurred.',
              empty: 'You must write a message.',
              duplicate: 'Too many email attempts for this email address',
              button: 'Contact me!',
            }
          }
          className="MailchimpStyle"
        />
      </div>
    </div>
  );
}

export default Contact;
