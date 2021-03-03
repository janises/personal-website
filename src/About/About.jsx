import React from 'react';
import './About.css';

function About() {
  return (
    <div id="about">
      {/* <div className="triangle" /> */}
      <h1 className="about-header">What I&apos;ve Been Doing</h1>
      <div className="about-body">
        <div className="about-text">
          {/* eslint-disable max-len */}
          <p>
            I spent my undergrad at Cal State Fullerton, double majoring in Psychology and Sociology, competing in intramural archery tournaments, and writing my thesis on the difference between male and female serial killers in America.
          </p>
          <br />
          <p>
            Following graduation, I served as a Peace Corps Volunteer for twenty-seven months in the country of Micronesia on the island of Kosrae. I taught English to 3rd and 4th graders, established the first recycling program, and reorganized the library system at the school. Every summer, the other volunteers and I would host girls&apos; camps where rising freshmen from the different villages on the island could have fun and learn about feminism, nutrition, health, and safety. I learned how to speak the local language, earned my rescue diver license, and climbed mountains barefoot.
          </p>
          <br />
          <p>
            After returning to California, I enrolled in a web development bootcamp in Provo, Utah. Upon completion of the program, I was offered a job at&nbsp;
            <a
              className="link"
              href="www.joinhoney.com"
              target="_blank"
              noopener
              rel="noreferrer"
            >
              Honey
            </a>
            , where I continue to work as a software engineer and co-founded the first LGBTQ+ employee resource group, Pride@Honey.
          </p>
        </div>
        <img
          alt="sipyen bridge, kosrae"
          className="about-img"
          src="../../assets/img/sipyen_bridge.jpg"
        />
      </div>
    </div>
  );
}

export default About;
