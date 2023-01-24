import { ReactSVG } from "react-svg";

function ProjectUI(props) {
    const project = props.project;
    const iconElements = project.icons;
    return (
        <div className="fixed top-0 left-0 w-screen h-full z-10 backdrop-blur-md flex justify-center">
            <div className="bg-white w-1/2 max-md:w-full flex flex-col p-5 my-10 shadow-[0_0px_10px_rgba(0,0,0,0.6)]">
                <div className="flex-1 flex flex-col items-center gap-5">
                    <h1 className="text-4xl max-md:text-2xl text-blue-500">{project.name}</h1>
                    <p className="px-5 text-2xl max-md:text-xl">{project.description}</p>
                </div>
                <img className="flex-1 m-5 shadow-[0_0px_5px_rgba(0,0,0,0.6)]" src={"img/" + project.image + ".webp"} alt={project.name} />

                <div className="flex-1 flex justify-around items-center max-md:justify-between">
                    <p className="text-slate-500">Status: {project.status}.</p>
                    <div className="flex flex-col gap-2">
                    <p className="text-slate-500">Used technologies:</p>
                    <div className='flex justify-center gap-2'>
                        {iconElements &&
                            iconElements.map((icon) => {
                                return (<ReactSVG src={"icons/" + icon + ".svg"} className="h-10 w-10 fill-slate-500" />);
                            })
                        }
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectUI;

