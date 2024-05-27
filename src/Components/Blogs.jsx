import React from 'react';
import './Blogs.css';

const Blogs = () => {
  const blogPosts = [
    { title: "Understanding React", description: "An in-depth look at React.js and how it helps in building UI.", link: "#" },
    { title: "JavaScript ES6 Features", description: "Exploring new features introduced in ES6 and how to use them.", link: "#" },
    { title: "Backend with Node.js", description: "A guide to building scalable backends using Node.js.", link: "#" },
    { title: "CSS Grid Layout", description: "Learn about CSS Grid Layout and how it simplifies web design.", link: "#" },
    // Add more blog posts as needed
  ];

  return (
    <div className="blog-container">
      <h2 className="blog-header">Blogs</h2>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-item">
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <a href={post.link} className="blog-link" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          </div>
        ))}
      </div>
      <div className='BlogButtonBody'>
      <p ><b>New Blog</b></p>
    </div>
    </div>
  );
};

export default Blogs;
