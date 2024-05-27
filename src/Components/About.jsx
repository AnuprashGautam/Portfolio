import React from "react";
import "./About.css";
import MyPhoto from "../Assets/MyPhoto.jpg";
import Request_Project_Button from "./Request_Project_Button";

const About = () => {
  return (
    <div className="wholepage">
      <div className="leftbox">
        <img
          id="Photo"
          src={MyPhoto}
          alt="My Photo"
        />
      </div>
      <div className="rightbox">
        <p id="who">Who am I ?</p>
        <p id="cont">Namaste! I'm Anuprash Gautam, a full-stack developer with a strong foundation in both backend and frontend technologies. I'm proficient in Java, Spring Boot, JavaScript, React, Node.js, and Express. Additionally, I have experience with Azure deployment for scalable and secure application hosting. I love creating smooth user experiences and robust server-side solutions. Take a look at my portfolio to see how I can help bring your ideas to life!</p>
        <Request_Project_Button/>
      </div>
      
    </div>
  );
};

export default About;
