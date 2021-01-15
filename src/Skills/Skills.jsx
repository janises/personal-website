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
      <h1 className="skills-header">Skills</h1>
      <div className="skills-list">
        {skillsList}
      </div>
    </div>
  );
}

export default Skills;
