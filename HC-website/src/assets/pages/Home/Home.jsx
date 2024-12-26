import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Import custom CSS (if needed)
import Navbar from '../../navbar/Navbar'; // Import Navbar component
import HomeBox from './HomeBox'; // Import HomeBox component

function Home() {
  return (
    <>
      <Navbar />
      <div className="homepage-container">
        <div className="header-box-container">
          <header className="header-box">
            <h1 className="text-center homepage-title">Welcome to My Home Page</h1>
            <p className="text-center homepage-description">This is the homepage content</p>
          </header>
        </div>
        <div className="box-wrapper container">
          <h1 className="home-box-heading">Home Box</h1>
          <div className="row">
            <div className="col-12">
              <HomeBox heading="Box Heading" content="This is the content for the Home Box." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
