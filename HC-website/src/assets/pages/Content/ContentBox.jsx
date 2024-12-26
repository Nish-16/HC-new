import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContentBox({ heading, content}) {
  const boxStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '2px 2px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center', // Default alignment is left
    border: '2px solid black'
  };

  const headingStyle = {
    textAlign: 'center',
  };

  const contentStyle = {
    textAlign: 'left',
  };

  return (
    <div style={boxStyle}>
      <h4 style={headingStyle}>{heading}</h4>
      <p style={contentStyle}>{content}</p>
    </div>
  );
}

export default ContentBox;
