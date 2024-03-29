/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './Projects.css';

function Projects() {
  const clickHandler = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="projects">
      <h1 className="projects-header">Things I&apos;ve Worked On</h1>
      <div className="projects-container">
        <div className="project-card">
          <img
            alt="penny and the jets game"
            className="project-img"
            src="../../assets/img/pennyandthejets.png"
            onClick={() => clickHandler('https://github.com/janises/PennyAndTheJets')}
          />
          <div className="project-description">
            <a
              className="project-link"
              href="https://github.com/janises/PennyAndTheJets"
              target="_blank"
              noopener
              rel="noreferrer"
            >
              Penny and the Jets
            </a>
            &nbsp;
            is a game I created using JavaScript, React, Redux, Node, Express, Auth0, PostgreSQL, and Sass. The game logic and animation is built without the use of a third party game animation library. Penny is a sky diving penguin who must avoid hitting birds and planes on the way down, but will earn bonus points by hitting clouds and parachutes. Users can also log in to keep track of their high scores.
          </div>
        </div>
        <div className="project-card">
          <iframe
            title="black canary safety app walkthrough"
            width="350"
            height="215"
            src="https://www.youtube.com/embed/cw8VR4JNrwk"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="project-description">
            <a
              className="project-link"
              href="https://github.com/blackcanary-dm26/black-canary-web-app"
              target="_blank"
              noopener
              rel="noreferrer"
            >
              Black Canary Safety App
            </a>
            &nbsp;
            is a mobile-responsive web app designed for user safety that I collaborated on. Features allow the user to set a specific message for their emergency message, as well as send their location to friends for a specified length of time. We chose the name Black Canary because the DC Comics character Black Canary&apos;s super power is her Canary Cry, which renders her attackers incapacitated. Built with React, Redux, Node, Express, PostgreSQL, Sass, Greensock Animations, Google Maps API, and Socket.io.
          </div>
        </div>
        <div className="project-card">
          <img
            alt="marvel-game"
            className="project-img"
            src="../../assets/img/ant-man-game.png"
            onClick={() => clickHandler('https://github.com/janises/marvel-lookup-antman-game')}
          />
          <div className="project-description">
            <a
              className="project-link"
              href="https://github.com/janises/marvel-lookup-antman-game"
              target="_blank"
              noopener
              rel="noreferrer"
            >
              Marvel character look up
            </a>
            &nbsp;
            is a project I created using JavaScript, React, Sass, axios, and md5. There are several options the user can choose. The first is a Marvel character look up using the Marvel API. The second is a game that features feminist Ant-Man and his fight against the patriarchy. The simple game is built without the use of a third party game animation library. There is also an Easter Egg that features Ron Swanson quotes.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
