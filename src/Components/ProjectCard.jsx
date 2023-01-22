import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  const project = props.project;
  const [isOpen, setIsopen] = useState(false);

  const handleClick = (id) => {
    setIsopen(!isOpen);
  }
  
  return (
    <div className="bg-slate-200 text-xl w-1/4 max-sm:w-2/3 flex flex-col select-none">
    <Link to={project.id} className="text-center bg-white p-2 text-blue-500 hover:bg-sky-200">{project.name}</Link>

    <div className="flex-1 bg-slate-200" onClick={() => handleClick(project.id)}>
    <img src={"img/" + project.image + ".webp"} alt={project.name}/>

    </div></div>
  );
}

export default ProjectCard;

