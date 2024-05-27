import React from 'react';
import './Forum.css';

const Forum = () => {
  const discussions = [
    { title: "Discussion A", description: "This is a discussion about web development.", link: "#" },
    { title: "Discussion B", description: "This is a discussion about mobile app development.", link: "#" },
    { title: "Discussion C", description: "This is a discussion about machine learning.", link: "#" },
    { title: "Discussion D", description: "This is a discussion about game development.", link: "#" },
    // Add more discussions as needed
  ];

  return (
    <div className="forum-container">
      <h2 className="forum-header">Forum Discussions</h2>
      <div className="forum-list">
        {discussions.map((discussion, index) => (
          <div key={index} className="forum-item">
            <div className="forum-content">
              <h3 className="forum-title">{discussion.title}</h3>
              <p className="forum-description">{discussion.description}</p>
              <a href={discussion.link} className="forum-link" target="_blank" rel="noopener noreferrer">View Discussion</a>
            </div>
          </div>
        ))}
      </div>
      <div className='ForumButtonBody'>
      <p ><b>New Forum</b></p>
    </div>
    </div>
  );
};

export default Forum;
