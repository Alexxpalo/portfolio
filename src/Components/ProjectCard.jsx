function ProjectCard(props) {
  return (<div className="bg-white text-xl w-1/4 flex flex-col gap-3">
    <p className="text-center">{props.name}</p>
    <img src={"img/" + props.image + ".webp"} alt={props.name} />
    </div>
  
  );
}

export default ProjectCard;

