import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Import custom CSS (if needed)
import Navbar from '../../navbar/Navbar'; // Import Navbar component
import HomeBox from './HomeBox'; // Import HomeBox component
import SiteFooter from '../../SiteFooter/SiteFooter';

function Home() {
  return (
    <>
      <Navbar />
      <div className="homepage-container">
        <div className="header-box-container">
          <header className="header-box">
            <h1 className="text-center homepage-title">Android App Development Course</h1>
            <p className="text-center homepage-description"></p>
            <div className="course-details text-center">
              <p>With Kotlin and Jetpack Compose</p>
              <p>15 days training program</p>
              <p>For beginners and experienced developers, UG/PG students</p>
              <p>January 10-24, 2025</p>
              <p>Organized by: <strong>Humble Coders</strong></p>
            </div>
          </header>
        </div>
        <div className="box-wrapper container">
          <div className="row">
            <div className="col-12">
              {/* Replace the Registration Link box with Program Outcomes */}
              <HomeBox heading="Program Outcomes" content={
                <ul className="custom-bullet-list">
                  <li>Gain hands-on experience with Kotlin and Jetpack Compose for Android app development.</li>
                  <li>Explore advanced concepts like Firebase integration, MVVM architecture, APIs, and real-time communication.</li>
                  <li>Learn to design visually stunning and user-friendly app interfaces.</li>
                  <li>
                    <strong>Projects:</strong> Build professional apps from scratch, including a CGPA calculator, Wishlist app, Chatbot, Bluetooth scanner, and Chat application.
                  </li>
                  <li>
                    <strong>Certification:</strong> Receive a Certificate of Completion to enhance your career profile.
                  </li>
                </ul>
              } />
              <p className="text-center">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdCAQzqkVE7d52jLucXsZBzkVNx__dUB7FvhwYjFnIjer4beA/viewform?usp=sf_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-3"
                >
                  Click Here to Register
                </a>
              </p>
            </div>
          </div>
        </div>
        <h4 className="text-center">Target Audience</h4>
        <p className="text-center">Undergraduate and postgraduate students from all disciplines and academic levels.</p>
        <br /><br /><br />
        <h4 className="text-center">Feel free to reach out at</h4>
        <p className="text-center">executives@humblecoders.in </p>
        <br /><br /><br /><br />
      </div>
      <SiteFooter />
    </>
  );
}

export default Home;
