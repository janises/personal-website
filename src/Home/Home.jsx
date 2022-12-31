import React from 'react';
import { Box } from '@mui/material';
import './Home.css';

function Home() {
  return (
    <div id="home">
      <h1 className="name">JANISE SUSKI</h1>
      <Box
        component="img"
        alt="Janise standing on Mt. Oma"
        src="../../assets/img/mt_oma.JPG"
        className="home-img"
      />
      <div className="intro">
        {/* eslint-disable-next-line max-len */}
        Software engineer, Returned Peace Corps Volunteer, avid reader. If you would like to work together or hear some cool stories, please contact me.
      </div>
    </div>
  );
}

export default Home;
