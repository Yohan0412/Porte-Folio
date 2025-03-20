import React from "react";

export default function BoxCompetences({ title, skills }) {
  return (
    <div className="container">
      <h1 className="title-language">{title}</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img className="logo" alt="props" src={skill.img} />
            <h2 className="skill-name">{skill.name}</h2>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
