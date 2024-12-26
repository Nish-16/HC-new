import React from 'react';
import AboutCard from './AboutCard';

const Achievements = () => {
  const data = [
    {
      photo: 'https://via.placeholder.com/200',
      description: 'Placeholder description for photo 1',
    },
    {
      photo: 'https://via.placeholder.com/200',
      description: 'Placeholder description for photo 2',
    },
    {
      photo: 'https://via.placeholder.com/200',
      description: 'Placeholder description for photo 3',
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <div className="col-md-4" key={index}>
            <AboutCard photo={item.photo} description={item.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
