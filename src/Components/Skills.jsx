import React from "react";
import "./Skills.css"; // Import your CSS file

const Skills = () => {
  // Define your skills and their proficiencies
  const skills = [
    { name: "C", proficiency: 70 },
    { name: "Azure", proficiency: 20 },
    { name: "GitHub", proficiency: 60 },
    { name: "CSS", proficiency: 20 },
    { name: "JAVA", proficiency: 20 },
    { name: "Python", proficiency: 50 },
    { name: "JavaScript", proficiency: 0 },
    { name: "React", proficiency: 50 },
    // Add more skills as needed
  ];

  return (
    <div className="skills-tab">
      <h2 id="skills-header">My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-meter">
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path
                  className="circle-bg"
                  d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  strokeDasharray={`${skill.proficiency}, 100`}
                  d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">
                  {skill.proficiency}%
                </text>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
