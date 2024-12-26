import React from 'react';
import Achievements from './Achievements';
import Navbar from '../../navbar/Navbar';
import WorkshopSection from './WorkshopSection';
import './About.css';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="Achievement-container">
        <h1 className="text-center">Our Achievements</h1>
        <br />
        <Achievements />
      </div>
      <div className='Workshop-container'>
        <h1 className='text-center'>Previous Workshops</h1>
        <br />
      <WorkshopSection />
      </div>
    </div>
  );
};

export default About;
