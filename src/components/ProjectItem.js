import React from "react";

function ProjectItem(project) {
  const { name, about, technologies } = project.project

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((item, index) => {
          return(
            <span key={index}>{item}</span>
          )
        })}
      </div>

    </div>
  );
}

export default ProjectItem;
 