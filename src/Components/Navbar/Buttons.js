import React from 'react';
import './Buttons.css';
import { Link } from 'react-router-dom';

const Buttons = () => {
  return (
    <div className='Buttons'>
      <Link to="/" className="ButtonCont"><b>Home</b></Link>
      <Link to="/timeline" className="ButtonCont"><b>Timeline</b></Link>
      <Link to="/blogs" className="ButtonCont"><b>Blogs</b></Link>
      <Link to="/forum" className="ButtonCont"><b>Forum</b></Link>
      <Link to="/about" className="ButtonCont"><b>About</b></Link>
      <Link to="/projects" id="Projects" className="ButtonCont" ><b>Projects</b></Link>
    </div>
  );
}

export default Buttons;
