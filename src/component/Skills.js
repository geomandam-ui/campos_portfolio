import React from "react";

function Skills() {
  const skills = ["Java", "JavaScript", "React", "Node.js", "Android Studio", "Laravel"];

  return (
    <section id="skills" style={{ textAlign: "center" }}>
      <h2>Skills</h2>
      <div>
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills; // ✅s