/* eslint-disable max-len */

import React from 'react';
import './Skills.css';

function Skills() {
  const skillRatings = {
    javascript: 5,
    react: 5,
    redux: 5,
    html: 4,
    css: 4,
    node: 3,
    'socket.io': 3,
    sql: 2,
    graphql: 1,
    webpack: 1,
  };

  const skillsList = Object.keys(skillRatings).map((skill) => {
    const stars = [];
    for (let i = 0; i < skillRatings[skill]; i += 1) {
      stars.push(
        <span>
          <img
            alt="star"
            className="star"
            src="../../assets/img/star.png"
          />
        </span>,
      );
    }
    return (
      <div className="skill-item">
        <div className="skill-name">
          {skill.toUpperCase()}
        </div>
        <div className="star-rating">
          {stars}
        </div>
      </div>
    );
  });

  return (
    <div id="skills">
      <h1 className="skills-header">Stuff I Know</h1>
      <div className="skills-body">
        <div className="skills-list">
          {skillsList}
        </div>
        <div className="skills-description">
          <p>
            I&apos;ve been working on front end projects for the past three years. I definitely don&apos;t claim to be an expert in any of these skills and I have a lot to learn, but have given 5 stars to the technologies that I work with the most. I&apos;m trying this strange concept of being confident in my abilities.
          </p>
          <br />
          <p>
            While I currently work as a front end developer, I have some familiarity with back end technologies and have worked on multiple full stack projects. I hope to do some more work with databases, servers, APIs, and sockets soon. I also enjoy making simple browser games, and am excited to learn more about them.
          </p>
          <br />
          <p>
            Other skills I have include archery, knitting, scuba diving, playing the ukulele, and binge watching TV shows for days at a time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
