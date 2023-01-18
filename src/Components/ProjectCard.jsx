import React, { useState } from "react";

function ProjectCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div onClick={() => setIsOpen(!isOpen)} className="bg-slate-200 text-xl w-1/3 px-1 flex flex-col gap-1">
    <p className="text-center bg-white p-2 text-blue-500">{props.name}</p>
    <img src={"img/" + props.image + ".webp"} alt={props.name} />

    {isOpen && (
      <p>{props.desc}</p>
    )}
    </div>
  );
}

export default ProjectCard;

