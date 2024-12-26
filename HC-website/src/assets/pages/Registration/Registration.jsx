import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have Bootstrap included
import Navbar from '../../navbar/Navbar';
import './Registration.css';
import SiteFooter from '../../SiteFooter/SiteFooter'

const Registration = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className='register-heading-container'>
          <h2 className='text-center'>Registration Information</h2> <br />
          <p>Details of registration</p>
        </div>
      </div>
      {/* <SiteFooter/> */}
    </>
  );
};

export default Registration;
