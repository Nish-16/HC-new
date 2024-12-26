import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Content.css'; // Import custom CSS
import Navbar from '../../navbar/Navbar'; // Import Navbar component
import ContentBox from './ContentBox'; // Import ContentBox component

function App() {
  return (
    <>
      <Navbar />
      <div className="Content-container">
        <header className="Title-box">
          <h1 className="text-center">Welcome to My Responsive Webpage</h1>
          <p className="text-center">This is the content</p>
        </header>
        <div className="Box-Container container">
          <h1 className="Box-heading">Schedule</h1>
          <div className="row">
            <div className="col-12">
              <ContentBox heading="Box 1 Heading" content="This is the content for Box 1." />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ContentBox heading="Box 2 Heading" content="This is the content for Box 2." align="right" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ContentBox heading="Box 3 Heading" content="This is the content for Box 3." />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ContentBox heading="Box 4 Heading" content="This is the content for Box 4." align="right" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ContentBox heading="Box 5 Heading" content="This is the content for Box 5." />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ContentBox heading="Box 6 Heading" content="This is the content for Box 6." align="right" />
            </div>
          </div>
          {/* Add more ContentBox components as needed */}
        </div>
      </div>
    </>
  );
}

export default App;
