import ProjectUI from "./ProjectUI";
import React from "react";

function ProjectCard(props) {
  const project = props.project;
  const [projectUI, setProjectUI] = React.useState(false);

  function handleClick() {
    setProjectUI(!projectUI);
  }

  return (
    <div className="bg-slate-200 text-xl w-1/4 max-sm:w-2/3 flex flex-col select-none hover:shadow-[0_0px_15px_1px_rgba(0,0,0,0.5)] cursor-pointer" onClick={() => handleClick()}>
      <h1 className="text-center bg-white p-2 text-blue-500">{project.name}</h1>

      <div className="flex-1 bg-slate-200">
        <img src={"img/" + project.image + ".webp"} alt={project.name} />
        {projectUI && < ProjectUI project={project} />}
      </div>
    </div>
  );
}

export default ProjectCard;

