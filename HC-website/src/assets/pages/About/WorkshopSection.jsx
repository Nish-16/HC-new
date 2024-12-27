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
        <h3>Previous Workshop Recap:</h3>
        <p>
          Humble Coders recently conducted an exciting app development workshop at the prestigious Thapar Institute of Engineering and Technology! 🚀✨
        </p>
        <p>
          With over 70 enthusiastic students from diverse branches like Computer Engineering (COE), Computer Science and Business Systems (COPC), Electronics and Communication (EEC), Biotechnology, and more joined for the innovative workshop and hands-on learning experience.
        </p>
        <h4>Workshop Highlights</h4>
        <ul>
          <li><strong>Focus on Native Android Development:</strong> Students explored the latest trends in Android development using Kotlin Jetpack Compose, diving deep into building modern and intuitive mobile apps.</li>
          <li><strong>Practical Projects:</strong> The participants brought their learning to life by designing and deploying a fully functional CGPA calculator app, showcasing their work on GitHub.</li>
          <li><strong>Hands-On Learning:</strong> The sessions were designed to be interactive and practical, ensuring students gained real-world experience that prepares them for the tech industry's demands.</li>
        </ul>
        <h4>Student Engagement and Impact</h4>
        <p>
          The participants’ energy and enthusiasm were truly inspiring! Their curiosity and eagerness to learn reminded us why skill-based education is so important. By the end of the workshop, every student walked away with increased confidence, industry-relevant knowledge and a project they could proudly call their own.
        </p>
      </div>
    </div>
  );
};

export default WorkshopSection;
