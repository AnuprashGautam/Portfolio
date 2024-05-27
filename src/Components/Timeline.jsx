import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const events = [
    { year: "2023-24", title: "B Tech II Year", description: "Gained Skill: CSS, REACT, JAVA (Core)" },
    { year: "2022-23", title: "B.Tech I Year", description: "Gained Skills: Azure Cloud, C Programming, HTML" },
    { year: "2020-22", title: "Itermediate Schooling", description: "Studied at Gyan Deep Public School PCM stream and Computer Science." },
    { year: "2008-20", title: "High Schooling", description: "Studied at Gyan Deep Public School." },
    // Add more events as needed
  ];

  return (
    <div className="timeline-container">
      <h2 className="timeline-header">Timeline</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <h3 className="timeline-year">{event.year}</h3>
              <h4 className="timeline-title">{event.title}</h4>
              <p className="timeline-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
