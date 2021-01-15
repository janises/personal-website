/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './Projects.css';

function Projects() {
  const clickHandler = () => {
    window.open('https://pennyandthejetsgame.herokuapp.com/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="projects">
      <h1 className="projects-header">Projects</h1>
      <div className="project-container">
        <img
          alt="penny and the jets game"
          className="project-img"
          src="../../assets/img/pennyandthejets.png"
          onClick={clickHandler}
        />
        <div className="project-description">
          <a
            className="project-link"
            href="https://pennyandthejetsgame.herokuapp.com/"
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
      <div className="project-container">
        <div className="project-description">
          <a
            className="project-link"
            href="https://blackcanarysafetyapp.herokuapp.com/"
            target="_blank"
            noopener
            rel="noreferrer"
          >
            Black Canary Safety App
          </a>
          &nbsp;
          is a mobile-responsive web app designed for user safety. I was a collaborator on this project that allows users to send their location to their friends when they feel unsafe and would like someone to know their whereabouts until they feel safe again. Features allow the user to set a specific message for their emergency message, as well as send their location to friends for a specified length of time. We chose the name Black Canary because the DC Comics character Black Canary&apos;s super power is her Canary Cry, which renders her attackers incapacitated. Built with React, Redux, Node, Express, PostgreSQL, Sass, Greensock Animations, Google Maps API, and Socket.io.
        </div>
        <iframe
          title="black canary safety app walkthrough"
          width="400"
          height="215"
          src="https://www.youtube.com/embed/cw8VR4JNrwk"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default Projects;
