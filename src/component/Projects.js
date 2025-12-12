import React from "react";

function Projects() {
  const projectList = [
    { name: "EventApp", description: "A task and event management app" },
    { name: "SmartRice", description: "An AI-powered rice quality checker" },
    { name: "Vegetable Recognition App", description: "Image recognition for vegetables" },
  ];

  return (
    <section id="projects" style={{ background: "#f0f0f0" }}>
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div className="projects-container" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects; // ✅