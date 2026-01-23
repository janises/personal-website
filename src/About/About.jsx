import React from 'react';
import './About.css';

function About() {
  return (
    <div id="about">
      <h1 className="about-header">ABOUT ME</h1>
      <div className="about-body">
        <img
          alt="sipyen bridge, kosrae"
          className="about-img"
          src="../../assets/img/sipyen_bridge.jpg"
        />
        <h2 className="about-background">MY BACKGROUND</h2>
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
            &nbsp;where I have been working as a software engineer since 2021.
          </p>
        </div>
        <div className="hobbies-and-favorites-container">
          <div className="hobbies-and-favorites">
            <img
              className="hobby-img"
              alt="janise doing archery"
              src="../../assets/img/archery.jpg"
            />
            <h2 className="about-hobbies">MY HOBBIES</h2>
            <div className="hobbies-text">
              <p>
                I am a bit of a hobby collector. I like learning random things. I am not very good at any of them, but that&apos;s okay. Here are a few of the things I&apos;ve been learning: ocarina, kalimba, Rubik&apos;s cube, lock picking, sewing, crocheting, foreign languages, American Sign Language, ukulele, piano, guitar, shamisen, archery, scuba, drawing, watercolor painting, etc.
              </p>
            </div>
          </div>
          <div className="hobbies-and-favorites">
            <img
              className="favorite-img"
              alt="mac the dog"
              src="../../assets/img/mac.jpeg"
            />
            <h2 className="about-hobbies">MY FAVORITE THINGS</h2>
            <div className="hobbies-text">
              <p>My dog Mac is my favorite. I named him after my favorite band, Fleetwood Mac. I also really love books, tv shows, musicals, and video games.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
