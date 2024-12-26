import React from 'react';

const WorkshopSection = () => {
  const images = [
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/200',
  ];

  const styles = {
    textArea: {
      width: '100%',
      marginTop: '20px',
      padding: '10px',
      border: '2px solid black',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
    },
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        {images.map((image, index) => (
          <div className="col-6 col-md-2" key={index}>
            <img src={image} alt={`Placeholder ${index}`} className="img-fluid" />
          </div>
        ))}
      </div>
      <div style={styles.textArea}>
        <p>
          This is where your text will be displayed. You can replace this text with any content you want to show below the images.
        </p>
      </div>
    </div>
  );
};

export default WorkshopSection;
