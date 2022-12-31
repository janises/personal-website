import React from 'react';
import './About.css';

function About() {
  return (
    <div id="about">
      {/* <div className="triangle" /> */}
      <h1 className="about-header">ABOUT ME</h1>
      <div className="about-body">
        <img
          alt="sipyen bridge, kosrae"
          className="about-img"
          src="../../assets/img/sipyen_bridge.jpg"
        />
        <div className="about-text">
          {/* eslint-disable max-len */}
          <p>
            After graduating from Cal State Fullerton with B.A.s in Psychology and Sociology, I joined the&nbsp;
            <a
              className="link"
              href="https://www.peacecorps.gov/"
              target="_blank"
              noopener
              rel="noreferrer"
            >
              Peace Corps
            </a>
            , where I taught English for two years in the&nbsp;
            <a
              className="link"
              href="https://www.britannica.com/place/Micronesia-republic-Pacific-Ocean"
              target="_blank"
              noopener
              rel="noreferrer"
            >
              Federated States of Micronesia
            </a>
            &nbsp;(on the Island of Kosrae). When I finished my service, I attended a web development bootcamp at&nbsp;
            <a
              className="link"
              href="https://devmountain.com/"
              target="_blank"
              noopener
              rel="noreferrer"
            >
              DevMountain
            </a>
            . I was offered a job at&nbsp;
            <a
              className="link"
              href="www.joinhoney.com"
              target="_blank"
              noopener
              rel="noreferrer"
            >
              Honey
            </a>
            , where I worked as a software engineer and co-founded the first LGBTQ+ employee resource group, Pride@Honey. After about three years, I moved on to&nbsp;
            <a
              className="link"
              href="www.pluralsight.com/"
              target="_blank"
              noopener
              rel="noreferrer"
            >
              Pluralsight
            </a>
            &nbsp;where I currently work as a software engineer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
