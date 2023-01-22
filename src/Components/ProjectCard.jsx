import React, { useState } from "react";

function ProjectCard(props) {
  const project = props.project;
  const [isOpen, setIsopen] = useState(false);

  const handleClick = (id) => {
    setIsopen(!isOpen);
  }
  
  return (
    <div className="bg-slate-200 text-xl w-1/4 max-sm:w-2/3 flex flex-col select-none">
    <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-center bg-white p-2 text-blue-500 hover:bg-sky-200">{project.name}</a>

    <div className="flex-1 bg-slate-200" onClick={() => handleClick(project.id)}>
    {
      isOpen ? (
        <div className="p-1 bg-white">
          <p>{project.description}</p>
        </div>

      ) : (
        <img src={"img/" + project.image + ".webp"} alt={project.name} className="cursor-help"/>
      )
    }
    </div></div>
  );
}

export default ProjectCard;

