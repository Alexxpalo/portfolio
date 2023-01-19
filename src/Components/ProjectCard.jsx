import React, { useState } from "react";

function ProjectCard(props) {
  const project = props.project;
  const [isOpen, setIsopen] = useState(false);

  const handleClick = (id) => {
    setIsopen(!isOpen);
  }

  return (
    <div onClick={() => handleClick(project.id)}  className="bg-slate-200 text-xl w-1/4 flex flex-col select-none">
    <p className="text-center bg-white p-2 text-blue-500">{project.name}</p>

    <div className="flex-1 bg-white">
    {
      isOpen ? (
          <p>{project.description}</p>
        
      ) : (
        <img src={"img/" + project.image + ".webp"} alt={project.name} />
      )
    }
    </div></div>
  );
}

export default ProjectCard;

